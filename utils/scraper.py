import numpy as np
import pandas as pd
import seaborn as sns
from tqdm import tqdm
import time
import random
import copy
from slugify import slugify

from matplotlib import pyplot as plt
from pytrends.request import TrendReq

class UnitrendScraper(object):
    """
    Unitrend Scraper utils class.
    """

    def __init__(self, hl='id-ID', retries=12, backoff_factor=1.0):
        self.pytrends = TrendReq(hl=hl, retries=retries, backoff_factor=backoff_factor)

    def find_pivot(self, keywords, cat = 0, timeframe = "today 5-y"):
        _keywords = copy.copy(keywords)
        chunk_size = 5

        for i in range(int(np.ceil(len(_keywords)/float(chunk_size)))):
            kw_list = _keywords[i*chunk_size:min(len(_keywords), (i+1)*chunk_size)]
            self.pytrends.build_payload(kw_list, cat=cat, timeframe=timeframe, geo='ID', gprop='')
            df_trends = self.pytrends.interest_over_time()
            if df_trends.empty:
                continue
            # print(df_trends)
            pivot = df_trends.columns[df_trends.drop(columns=["isPartial"]).max().argmax()]
            initial_pivot_mean = df_trends[pivot].mean()
            print(f"pivot = {pivot}\ninitial pivot mean = {initial_pivot_mean}")
            return pivot, initial_pivot_mean

    def biannually_trends(self, keywords, cat = 0, timeframe = "today 5-y"):
        _keywords = copy.copy(keywords)
        chunk_size = 4
        trends_container = pd.DataFrame()

        pivot, initial_pivot_mean = self.find_pivot(_keywords, cat=cat, timeframe=timeframe)
        _keywords.remove(pivot)

        pbar = tqdm(range(int(np.ceil(len(_keywords)/float(chunk_size)))))

        for i in pbar:
            kw_list = [pivot] + _keywords[i*chunk_size:min(len(_keywords), (i+1)*chunk_size)]
            pbar.set_description(f"Processing {kw_list}")

            self.pytrends.build_payload(kw_list, cat=cat, timeframe=timeframe, geo='ID', gprop='')
            df_trends = self.pytrends.interest_over_time()

            if 'isPartial' not in df_trends.columns:
                continue

            pivot_mean = df_trends[pivot].mean()
            pivot_ratio = initial_pivot_mean/pivot_mean
            print(f"pivot mean = {pivot_mean}\npivot ratio = {pivot_ratio}")

            if trends_container.empty:
                trends_container = df_trends.drop(columns=["isPartial"]).multiply(pivot_ratio)
            else:
                trends_container = trends_container.join(df_trends.drop(columns=["isPartial", pivot]).multiply(pivot_ratio))

        # print(trends_container)
        trends_container[trends_container.select_dtypes(include=['number']).columns].fillna(0)
        trends_container.index = pd.to_datetime(trends_container.index).astype(str)
        return trends_container
        # self.pytrends.build_payload(keywords, cat=0, timeframe='now 7-d', geo='', gprop='')
        # return ""

    def biannually_individual_trends(self, keywords, cat = 0):
        _keywords = copy.copy(keywords)
    #     chunk_size = 4
        trends_container = pd.DataFrame()
    #     # pivot = keywords.pop()
    #     pivot, initial_pivot_mean = find_pivot(_keywords)
    #     _keywords.remove(pivot)
        pbar = tqdm(_keywords)
        for keyword in pbar:
            pbar.set_description(f"Processing {keyword}")
            kw_list = [keyword]

            self.pytrends.build_payload(kw_list, cat=cat, geo='ID', gprop='')
            df_trends = self.pytrends.interest_over_time()

            if 'isPartial' not in df_trends.columns:
                continue

            if trends_container.empty:
                trends_container = df_trends.drop(columns=["isPartial"])
            else:
                trends_container = trends_container.join(df_trends.drop(columns=["isPartial"]))

        # print(trends_container)
        trends_container[trends_container.select_dtypes(include=['number']).columns].fillna(0)
        return trends_container
        # self.pytrends.build_payload(keywords, cat=0, timeframe='now 7-d', geo='', gprop='')
        # return ""
    
    def normalize_comma(self, data):
        _data = copy.copy(data)
        _ret = []

        for item in _data:
            if (item == "-"):
                continue
            if ("," in item):
                _ret.extend([_.strip() for _ in item.split(',') if _.strip() != ""])
            else:
                _ret.append(item)

        return _ret
    
    def normalize_dict_key_comma(self, data):
        _data = copy.copy(data)
        _ret = {}

        for k, v in _data.items():
            k_flatten = self.normalize_comma([k])
            # print(f"{k} -> {k_flatten} : {v}")
            for brand in k_flatten:
                _ret[brand] = v
                        
        return _ret

    def trends_percentage_change(self, df):
        _df = df.copy()
        df_trends_mean = pd.DataFrame(_df.mean(axis=1).rename("trends_mean"))
        df_trends_mean["year"] = df_trends_mean.index.year
        df_trends_mean["week"] = df_trends_mean.index.isocalendar().week
        
        year_now = df_trends_mean["year"][-1]
        week_now = df_trends_mean["week"][-1]
        trends_mean_now = df_trends_mean["trends_mean"][-1]
        
        last_year_trends_mean = df_trends_mean[ (df_trends_mean["year"] == year_now-1) & (df_trends_mean["week"] == week_now)]["trends_mean"][0]
        # print(f"{trends_mean_now} -> {last_year_trends_mean} = {100.0 * (trends_mean_now-last_year_trends_mean) / (last_year_trends_mean)}")
        # print(df_trends_mean.tail(10))
        # print(df_trends_mean.iloc[-1,:])
        
        df_trends_mean_last_year = df_trends_mean[-1*(52+week_now):-1*(week_now)]
        df_trends_mean_now = df_trends_mean[-1*(week_now):]
        
        biannually_trends_mean = {
                "last_year" : {int(week):trends_mean for week, trends_mean in zip(df_trends_mean_last_year["week"], df_trends_mean_last_year["trends_mean"])},
                "now" : {int(week):trends_mean for week, trends_mean in zip(df_trends_mean_now["week"], df_trends_mean_now["trends_mean"])}
        }
        trends_mean_change = 100.0 * (trends_mean_now-last_year_trends_mean) / (last_year_trends_mean)
        trends_mean_change = trends_mean_now if (np.isnan(trends_mean_change) or np.isinf(trends_mean_change)) else trends_mean_change

        return biannually_trends_mean, trends_mean_change

    def find_region_anchor_keyword(self, keywords, cat = 0, timeframe = "today 5-y"):
        _keywords = copy.copy(keywords)
        chunk_size = 5

        for i in range(int(np.ceil(len(_keywords)/float(chunk_size)))):
            kw_list = _keywords[i*chunk_size:min(len(_keywords), (i+1)*chunk_size)]
            self.pytrends.build_payload(kw_list, cat=cat, timeframe=timeframe, geo='ID', gprop='')
            df_trends_region = self.pytrends.interest_by_region(resolution='COUNTRY', inc_low_vol=True, inc_geo_code=True)
            if df_trends_region.empty:
                continue
            # print(df_trends_region)
            anchor = dict(df_trends_region.drop(columns=["geoCode"]).idxmax(axis=1))
            reverse_anchor = {}
            for k,v in anchor.items():
                if v not in reverse_anchor:
                    reverse_anchor[v] = [k]
                else:
                    reverse_anchor[v].append(k)
            # pivot = df_trends_region.columns[df_trends_region.drop(columns=["geoCode"]).mean().argmax()]
            # initial_pivot_mean = df_trends_region[pivot].mean()
            # print(f"pivot = {pivot}\ninitial pivot mean = {initial_pivot_mean}")
            return anchor, reverse_anchor

    def region_trends(self, keywords, cat = 0, timeframe = "today 5-y"):
        chunk_size = 4
        region_trends_container = pd.DataFrame()
        _keywords = copy.copy(keywords)
        anchor, reverse_anchor = self.find_region_anchor_keyword(_keywords, cat=cat, timeframe=timeframe)

        for k,v in reverse_anchor.items():
            _keywords_now = copy.copy(keywords)
            _keywords_now.remove(k)
            _region_trends_container = pd.DataFrame()

            pbar = tqdm(range(int(np.ceil(len(_keywords_now)/float(chunk_size)))))

            for i in pbar:
                kw_list = [k] + _keywords_now[i*chunk_size:min(len(_keywords_now), (i+1)*chunk_size)]
                pbar.set_description(f"Processing {k} {kw_list}")
                # print(kw_list)

                self.pytrends.build_payload(kw_list, cat=cat, timeframe=timeframe, geo='ID', gprop='')
                df_trends_region = self.pytrends.interest_by_region(resolution='COUNTRY', inc_low_vol=True, inc_geo_code=True)

                if _region_trends_container.empty:
                    _region_trends_container = df_trends_region.loc[v]
                else:
                    df_trends_region = df_trends_region.drop(columns=["geoCode"])
                    for col in df_trends_region.columns:
                        if col == k:
                            continue
                        df_trends_region[col] = (_region_trends_container[k]/df_trends_region[k]) * df_trends_region[col]
                    _region_trends_container = _region_trends_container.join(df_trends_region.drop(columns=[k]).loc[v])

            if region_trends_container.empty:
                region_trends_container = _region_trends_container
            else:
                region_trends_container = pd.concat([region_trends_container, _region_trends_container])
        
        print("#"*40)
        print(region_trends_container.index)
        geocode_map = {k:v for k,v in zip (region_trends_container.index, region_trends_container["geoCode"])}
        region_trends_container = region_trends_container.drop(columns=["geoCode"])
        
        region_trends_container = region_trends_container.div(region_trends_container.sum(axis=1), axis=0).reset_index()
        region_trends_container[region_trends_container.select_dtypes(include=['number']).columns].fillna(0)
        region_trends_container[region_trends_container.select_dtypes(include=['number']).columns] *= 100
        region_trends_container["geoCode"] = region_trends_container["geoName"].map(geocode_map)
        # region_trends_container = region_trends_container.set_index('geoName')

        return region_trends_container