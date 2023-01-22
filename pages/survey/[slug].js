import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import DetailCard from '../../components/DetailCard';
// import BarCharts from '../components/BarCharts';
import Footer from '../../components/Footer';
import styles from '../../styles/Home.module.css';
import surveyData from '../../assets/statics/Data_Survei.json';
import Link from 'next/link';
import getConfig from "next/config";

const BarCharts = dynamic(() => import('../../components/BarCharts'), {
  ssr: false,
});
const LineCharts = dynamic(() => import('../../components/LineCharts'), {
  ssr: false,
});

const { publicRuntimeConfig } = getConfig();

const Tableau = dynamic(() => import('../../components/Tableau'), {
    ssr: false,
  });

function Sector({
  slug,
  selectedSurveyData
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
        <title>{selectedSurveyData?.name} | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-1">
        <section
          className="flex flex-col justify-center items-center h-screen max-w-screen bg-cover shadow-[inset_0_0_0_1920px_rgba(0,0,0,0.75)]"
          style={{backgroundImage: `url('/assets/images/hero/hero-survey.png')`}}
          >
          <Link href="/economic-development">
              <p className="text-white text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
          </Link>
          <div>
            <h1 className="text-white text-[4rem] text-center font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]">
                {selectedSurveyData?.name}
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
      <section className="text-justify my-16">
        <div className='my-4'>
            <ul className='list-none my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2'>
                {
                    selectedSurveyData?.dashboard.map((dashboard, dashboard_index) => {
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

        {/* <section className="my-16">
          <Link href="/">
            <p className="text-black text-[1.0rem] hover:cursor-pointer">
              &#60; Back
            </p>
          </Link>
        </section> */}
       
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
  var selectedSurveyData = slug && surveyData[slug];
  return {
    props: {
      slug,
      selectedSurveyData
    },
  };
}

export default Sector;
