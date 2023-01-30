import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import DetailCard from '../../components/DetailCard';
// import BarCharts from '../components/BarCharts';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';
import trendsData from '../../assets/data/Data_SDGs.json';
import deskripsiData from '../../assets/statics/Deskripsi_SDGs.json';
import Link from 'next/link';

const BarCharts = dynamic(() => import('../../components/BarCharts'), {
  ssr: false,
});
const LineCharts = dynamic(() => import('../../components/LineCharts'), {
  ssr: false,
});

function Sector({
  slug,
  selectedTrendsData,
  positiveWordTrendSorted,
  positiveWordTrendSortedData,
  negativeWordTrendSorted,
  negativeWordTrendSortedData,
  lastYearDate,
  lastYearDateNextWeek,
  lastYearDate2NextWeek,
  latestDate,
  latestDateNextDay,
  latestDateNextWeek,
  latestDate2NextWeek,
}) {
  return (
    // <div>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <h1>Hello World</h1>
    // </div>
    <div className="min-h-screen bg-white">
      <Head>
        <title>{trendsData[slug]?.name} | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-1">
        <section
          className="flex flex-col justify-center items-center h-screen max-w-screen bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]"
          style={{backgroundImage: `url('/assets/images/sectors/${encodeURIComponent(slug)}.jpg')`}}
          >
          <Link href="/economic-development">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
          </Link>
          <div>
            <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
              {trendsData[slug]?.name}
            </h1>
          </div>
          {/* <Image
            src={heroImg}
            alt="Futuristic city"
            className="w-screen absolute h-[auto] contrast-[110%] brightness-[70%] saturate-0 hidden xl:block"
          ></Image> */}
        </section>
      </div>
      <div className="flex-1 max-w-7xl mx-auto p-10">
        {/* <section className="my-16">
          <Link href="/">
            <p className="text-black text-[1.0rem] hover:cursor-pointer">
              &#60; Back
            </p>
          </Link>
        </section> */}
        <section className="text-justify">
          {/* <h1 className="text-black text-left text-[3em] md:text-[4em] font-bold">
            {trendsData[slug]?.name}
          </h1> */}
          {
            deskripsiData[slug].map((content, index) => (
              <>
                <p className="text-black text-base my-2">{content}</p>
              </>
            ))
          }
          {/* <p className="text-black text-base">{deskripsiData[slug]}</p> */}
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Tren {trendsData[slug]?.name.toLowerCase()} saat ini dibandingkan
            dengan tahun lalu?
          </h1>
          <LineCharts
            trendsDatalast_year={
              selectedTrendsData &&
              Object.values(
                selectedTrendsData['biannually_combined_trends_mean']['last_year']
              )
            }
            trendsDatanow={
              selectedTrendsData &&
              Object.values(
                selectedTrendsData['biannually_combined_trends_mean']['now']
              )
            }
          />
          <p className="text-gray-400 text-[0.75rem]">
            Data ini berasal dari Google Trends, dan menunjukkan tren rata-rata
            untuk semua kata kunci dan topik umum terkait{' '}
            {trendsData[slug]?.name.toLowerCase()}
          </p>
        </section>
        <section className="my-16 columns-1">
          <div className="flex flex-col items-center justify-center border border-solid border-black p-8">
            <p className="text-black text-base">Pencarian berubah sebesar</p>
            <h2 className="text-black text-[2rem] font-bold">
              {selectedTrendsData &&
                selectedTrendsData['word_trends_mean_change'].toFixed(1)}
              %
            </h2>
          </div>
        </section>
        <section className="text-justify my-16">
          {/* <h1 className="text-black text-[3rem] font-bold">Topik Umum</h1> */}
          <h1 className="text-black text-[2rem] font-bold">
            Isu tentang {trendsData[slug]?.name.toLowerCase()} yang mengalami
            kenaikan pencarian
          </h1>
          {/* <p className="text-black text-base my-2">
            Data ini diambil dari Google Trends, menunjukkan persentase
            peningkatan dibandingkan periode yang sama pada tahun sebelumnya
          </p> */}
          {
            positiveWordTrendSorted.length > 0 ? 
            (
              <>
                <BarCharts
                  sector={positiveWordTrendSorted}
                  series={positiveWordTrendSortedData}
                  fillColor="#07B0F8"
                />
              </>
            )
            :
            (
              <>
              <p className="text-black text-base my-2">Tidak ada isu tentang {trendsData[slug]?.name.toLowerCase()}{' '}
              yang mengalami kenaikan pencarian.</p>
              </>
            )
          }
          <p className="text-gray-400 text-[0.75rem]">
            Membandingkan :{' '}
            {`${lastYearDateNextWeek.slice(0, 10)} hingga ${lastYearDate2NextWeek.slice(0, 10)}`}{' '}
            dengan{' '}
            {`${latestDateNextWeek.slice(0, 10)} hingga ${latestDate2NextWeek.slice(
              0,
              10
            )}`}
          </p>
          <p className="text-gray-400 text-[0.75rem]">
            Data terakhir diambil: {latestDateNextDay.slice(0, 10)}
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Isu tentang {trendsData[slug]?.name.toLowerCase()} yang mengalami
            penurunan
          </h1>
          {/* <p className="text-black text-base my-2">
            Data ini diambil dari Google Trends, menunjukkan persentase
            penurunan dibandingkan periode yang sama pada tahun lalu.
          </p> */}
          {
            negativeWordTrendSorted.length > 0 ?
            (
              <>
                <BarCharts
                  sector={negativeWordTrendSorted}
                  series={negativeWordTrendSortedData}
                  fillColor="#F84F07"
                />
              </>
            )
            :
            (
              <>
              <p className="text-black text-base my-2">Tidak ada isu tentang {trendsData[slug]?.name.toLowerCase()}{' '}
              yang mengalami penurunan.</p>
              </>
            )
          }
          <p className="text-gray-400 text-[0.75rem]">
            Membandingkan :{' '}
            {`${lastYearDateNextWeek.slice(0, 10)} hingga ${lastYearDate2NextWeek.slice(0, 10)}`}{' '}
            dengan{' '}
            {`${latestDateNextWeek.slice(0, 10)} hingga ${latestDate2NextWeek.slice(
              0,
              10
            )}`}
          </p>
          <p className="text-gray-400 text-[0.75rem]">
            Data terakhir diambil: {latestDateNextDay.slice(0, 10)}
          </p>
        </section>
        {/* <hr className="mt-10 border-[#555]" /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  var selectedTrendsData = slug && trendsData[slug];

  const positiveWordTrendSorted =
    selectedTrendsData &&
    Object.keys(selectedTrendsData['word_data'])
      .filter((word) => trendsData[slug]['word_data'][word] > 0.0)
      .sort(
        (a, b) =>
          -(trendsData[slug]['word_data'][a] - trendsData[slug]['word_data'][b])
      );

  const positiveWordTrendSortedData = positiveWordTrendSorted?.map(
    (word) => trendsData[slug]['word_data'][word]
  );

  const negativeWordTrendSorted =
    selectedTrendsData &&
    Object.keys(selectedTrendsData['word_data'])
      .filter((word) => trendsData[slug]['word_data'][word] < 0.0)
      .sort(
        (a, b) =>
          -(trendsData[slug]['word_data'][a] - trendsData[slug]['word_data'][b])
      );

  const negativeWordTrendSortedData = negativeWordTrendSorted?.map(
    (word) => trendsData[slug]['word_data'][word]
  );

  const getDateOfWeek = (w, y) => {
    var sunday = new Date(y, 0, 1 + w * 7);
    while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
    }
    return sunday;
  };
  
  const getNextWeekDate = (dt) =>
    new Date(dt.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  const getNextDayDate = (dt) =>
    new Date(dt.getTime() + 1 * 24 * 60 * 60 * 1000);
  
  const year_now = new Date().getFullYear();
  const last_year = year_now-1;

  const _latestDate = getDateOfWeek(
    Object.keys(selectedTrendsData['biannually_combined_trends_mean']['now'])
      .length,
    year_now
  );
  const latestDate = _latestDate.toISOString();
  const latestDateNextDay = getNextDayDate(getNextWeekDate(_latestDate)).toISOString();
  const latestDateNextWeek = getNextDayDate(_latestDate).toISOString();
  const latestDate2NextWeek = getNextWeekDate(_latestDate).toISOString();
  const _lastYearDate = getDateOfWeek(
    Object.keys(selectedTrendsData['biannually_combined_trends_mean']['now'])
      .length,
    last_year
  );
  const lastYearDate = _lastYearDate.toISOString();
  const lastYearDateNextWeek = getNextDayDate(getNextWeekDate(_lastYearDate)).toISOString();
  const lastYearDate2NextWeek = getNextWeekDate(getNextWeekDate(_lastYearDate)).toISOString();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      slug,
      selectedTrendsData,
      positiveWordTrendSorted,
      positiveWordTrendSortedData,
      negativeWordTrendSorted,
      negativeWordTrendSortedData,
      lastYearDate,
      lastYearDateNextWeek,
      lastYearDate2NextWeek,
      latestDate,
      latestDateNextDay,
      latestDateNextWeek,
      latestDate2NextWeek,
    },
  };
}

export default Sector;
