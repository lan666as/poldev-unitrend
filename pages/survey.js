import Link from 'next/link';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import surveyData from '../assets/statics/Data_Survei.json'
import Image from 'next/future/image';
import getConfig from "next/config";
// import TableauReport from "tableau-react";


const { publicRuntimeConfig } = getConfig();

const Tableau = dynamic(() => import('../components/Tableau'), {
  ssr: false,
});

const options = {
  width: 400,
  height: 350,
  hideTabs: true,
  hideToolbar: true,
  debug: false,
  // All other vizCreate options are supported here, too
  // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
};

const filters = {
};

const parameters = {
};

export default function Survey() {

return (
  <>
    <Head>
      <title>Survey | UniTrend by PolDev UGM</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="min-h-screen bg-white">
      
      <div className="flex-1">
        <section className="flex flex-col justify-center items-center h-screen max-w-screen bg-[url('/assets/images/hero/hero-survey.png')] bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]">
          <Link href="/">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
          </Link>
          <div>
            <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
              Survey
            </h1>
          </div>
          {/* <Image
            src={heroImg}
            alt="Futuristic city"
            className="w-screen absolute h-[auto] contrast-[110%] brightness-[70%] saturate-0 hidden xl:block"
          ></Image> */}
        </section>
      </div>
      <div className="flex-1 max-w-[80%] mx-auto p-10">
        <section className="text-justify flex flex-col">
          {/* <h1 className="text-black text-[3em] md:text-[4em] font-bold">
            Survei
          </h1> */}
          {/* <p className="text-black text-base my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque turpis justo, et iaculis augue laoreet id. Aenean ut mauris tempor, sagittis est ut, gravida orci. Pellentesque rhoncus porta felis, eu ornare nunc interdum at. Fusce eget consequat quam. Nullam ultrices lacus eu laoreet posuere. Sed convallis ultrices neque sit amet dapibus. Sed vitae enim at orci dignissim suscipit.
          </p>
          <p className="text-black text-base my-2">
            Vivamus est massa, accumsan ut neque in, semper ullamcorper sapien. Sed at fringilla dolor. Sed viverra venenatis nibh in fermentum. Integer pretium interdum nisl, nec accumsan ligula. In hac habitasse platea dictumst. Suspendisse in lobortis dui. Maecenas sed iaculis justo, ut accumsan elit. Cras rutrum nibh vel tellus vulputate, ut iaculis dolor volutpat. Curabitur convallis molestie ligula a ullamcorper. Vivamus malesuada venenatis urna, sit amet molestie ante accumsan vel. Quisque ac justo velit. Cras pharetra rhoncus urna, eget sagittis ipsum egestas sit amet. Suspendisse potenti.
          </p> */}
        </section>
        <section className="text-justify my-16">
          {
            surveyData.map((sector, sector_index) => {
              return (
                <>
                  <div className='my-4'>
                    <h1 className="text-black text-[2rem] font-bold my-2">
                      {sector.name || "Sektor"}
                    </h1>
                    <ul className='list-none my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
                      {
                        sector.dashboard.map((dashboard, dashboard_index) => {
                          return (
                            <>
                              <li key={dashboard_index}>
                                <Tableau
                                  url={dashboard.url}
                                />
                              </li>
                            </>
                          )
                        })
                      }
                    </ul>
                  </div>
                </>
              )
            }
          )}
          <p className="text-gray-400 text-[0.875rem]">
            {/* Data terakhir diambil: {capresLatestUpdateDate.toISOString().slice(0, 10)} */}
          </p>
          {/* <p className="text-gray-400 text-[0.875rem]">
            Tren penelusuran dihitung berdasarkan perbedaan tren penelusuran di google trends selama 3 bulan terakhir. 
          </p> */}
          {/* <p className="text-gray-400 text-[0.875rem]">
            Data ini dihimpun xxx
          </p> */}
          {/* <p className="text-gray-400 text-[0.875rem]">
            Data ini berasal dari Google Trends, dan menunjukkan hasil tren pencarian seluruh kata kunci calon presiden 2024 yang kami lacak. Data pencarian merupakan indikasi keingintahuan pada subjek atau kandidat dan tidak menunjukkan indikasi niat pilihan pemberi suara.
          </p> */}
        </section>
      </div>
    </div>
  </>
);
}