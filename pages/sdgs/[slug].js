import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import DetailCard from '../../components/DetailCard';
// import BarCharts from '../components/BarCharts';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';
import trendsData from '../../data/Data_SDGs.json';
import deskripsiData from '../../data/Deskripsi_SDGs.json';
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
  latestDate,
  latestDateNextWeek,
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
      <div className="flex-1 max-w-7xl mx-auto p-10">
        <section className="my-16">
          <Link href="/">
            <p className="text-black text-[1.0rem] hover:cursor-pointer">
              &#60; Back
            </p>
          </Link>
        </section>
        <section className="my-16">
          <h1 className="text-black text-[3em] md:text-[4em] font-bold">
            {trendsData[slug]?.name}
          </h1>
          <p className="text-black text-base">
            {deskripsiData[slug]}
          </p>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Bagaimana tren topik {trendsData[slug]?.name.toLowerCase()} saat ini dibandingkan dengan tahun lalu?
          </h1>
          <p className="text-black text-base my-2">
            Data ini berasal dari Google Trends, dan menunjukkan tren rata-rata untuk semua kata kunci, dan topik umum terkait {trendsData[slug]?.name.toLowerCase()}. Berikut hasilnya 
          </p>
          <LineCharts
            trendsData2021={
              selectedTrendsData &&
              Object.values(
                selectedTrendsData['biannually_combined_trends_mean']['2021']
              )
            }
            trendsData2022={
              selectedTrendsData &&
              Object.values(
                selectedTrendsData['biannually_combined_trends_mean']['2022']
              )
            }
          />
        </section>
        <section className="my-16 columns-1">
          <div className="flex flex-col items-center justify-center border border-solid border-black p-8">
            <p className="text-black text-base">
              Pencarian topik umum meningkat sebesar
            </p>
            <h2 className="text-black text-[2rem] font-bold">
              {selectedTrendsData &&
                selectedTrendsData['word_trends_mean_change'].toFixed(1)}
              %
            </h2>
          </div>
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[3rem] font-bold">Topik Umum</h1>
          <h1 className="text-black text-[2rem] font-bold">
            Topik umum tentang {trendsData[slug]?.name.toLowerCase()} yang mengalami kenaikan pencarian adalah
          </h1>
          <p className="text-black text-base my-2">
            Data ini diambil dari Google Trends, menunjukkan persentase peningkatan dibandingkan periode yang sama pada tahun sebelumnya
          </p>
          <p className="text-gray-400 text-[0.875rem]">
                Membandingkan :{" "}
                {`${lastYearDate.slice(
                  0,
                  10
                )} hingga ${lastYearDateNextWeek.slice(0, 10)}`}{" "}
                dengan{" "}
                {`${latestDate.slice(0, 10)} hingga ${latestDateNextWeek.slice(
                  0,
                  10
                )}`}
              </p>
              <p className="text-gray-400 text-[0.875rem]">
                Data terakhir diambil: {latestDate.slice(0, 10)}
          </p>
          <BarCharts
            sector={positiveWordTrendSorted}
            series={positiveWordTrendSortedData}
            fillColor="#07B0F8"
          />
        </section>
        <section className="text-justify my-16">
          <h1 className="text-black text-[2rem] font-bold">
            Topik umum tentang {trendsData[slug]?.name.toLowerCase()} yang mengalami penurunan adalah
          </h1>
          <p className="text-black text-base my-2">
            Data ini diambil dari Google Trends, menunjukkan persentase penurunan dibandingkan periode yang sama pada tahun lalu.
            </p>
                          <p className="text-gray-400 text-[0.875rem]">
                Membandingkan :{" "}
                {`${lastYearDate.slice(
                  0,
                  10
                )} hingga ${lastYearDateNextWeek.slice(0, 10)}`}{" "}
                dengan{" "}
                {`${latestDate.slice(0, 10)} hingga ${latestDateNextWeek.slice(
                  0,
                  10
                )}`}
              </p>
              <p className="text-gray-400 text-[0.875rem]">
                Data terakhir diambil: {latestDate.slice(0, 10)}
              </p>
            <BarCharts
              sector={negativeWordTrendSorted}
              series={negativeWordTrendSortedData}
              fillColor="#F84F07"
            />
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
    var sunday = new Date(y, 0, 1 + (w - 1) * 7);
    while (sunday.getDay() !== 0) {
      sunday.setDate(sunday.getDate() - 1);
    }
    return sunday;
  };

  const getNextWeekDate = (dt) =>
    new Date(dt.getTime() + 7 * 24 * 60 * 60 * 1000);

  const _latestDate = getDateOfWeek(
    Object.keys(selectedTrendsData["biannually_combined_trends_mean"]["2022"])
      .length,
    2022
  );
  const latestDate = _latestDate.toISOString();
  const latestDateNextWeek = getNextWeekDate(_latestDate).toISOString();
  const _lastYearDate = getDateOfWeek(
    Object.keys(selectedTrendsData["biannually_combined_trends_mean"]["2022"])
      .length,
    2021
  );
  const lastYearDate = _lastYearDate.toISOString();
  const lastYearDateNextWeek = getNextWeekDate(_lastYearDate).toISOString();

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
      latestDate,
      latestDateNextWeek,
    },
  };
}

export default Sector;
