import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/future/image';
import LogoPoldev from '../public/logo-poldev.png';

export default function about() {
  return (
    <>
      <Head>
        <title>Methodology | UniTrend by PolDev UGM</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen bg-white">
        <div className="flex-1 max-w-5xl mx-auto p-10">
          <section className="my-16">
            <Link href="/">
              <p className="text-black text-bold text-[1.0rem] hover:cursor-pointer">
                &#60; Back
              </p>
            </Link>
          </section>
          <section className="text-justify flex flex-col">
            <h1 className="text-black text-5xl font-bold my-2">
              Metodologi
            </h1>
            <p className="text-black text-base my-2">
              Pengambil kebijakan membutuhkan data yang mewakili populasi nasional. Sayangnya, data resmi pemerintah seringkali hanya dikumpulkan 1 atau 2 kali dalam setahun. Disisi lain, dinamika sosial, ekonomi dan politik berjalan dengan cepat dalam hitungan hari. Maka langkah yang harus dilakukan adalah menganalisis sebanyak mungkin alternatif data, sehingga dapat memberikan gambaran yang jelas, apa langkah kebijakan ang harus diambil. Mengatasi hal ini, UniTrend mengintegrasikan berbagai data dengan mengoptimalkan pendekatan big data analytics guna mendukung kemutakhiran informasi secara real-time dan aktual. Big data adalah data dengan ciri berukuran besar, sangat variatif, sangat cepat pertumbuhannya dan sebagian besar tidak terstruktur yang perlu diolah khusus dengan teknologi inovatif sehingga mendapatkan informasi yang mendalam dan dapat membantu pengambilan keputusan yang lebih baik. UniTrend mengkombinasikan pengolahan big data yang dikumpulkan dari Google Trends, Twitter, dan digital survey.
            </p>
            <h2 className="text-black text-2xl font-semibold my-2">
              Google Trends
            </h2>
            <p className="text-black text-base my-2">
              Google Trends adalah salah satu tools yang dimanfaatkan sebagai alat analisis big data dalam internet (Rumata, 2016). Google dikenal sebagai pintu masuk dunia maya karena menghadirkan big data berdasarkan halaman pencarian Google mengenai isu-isu populer yang sedang terjadi. Berbasis tren penggunaan kata kunci tertentu, google trend dapat mengukur popularitas istilah pencarian dalam rentang waktu dan wilayah tertentu. Pengguna dapat melihat di mana titik perubahan tren terjadi dan dapat dimanfaatkan sebagai bahan analisis. 
            </p>
            <p className="text-black text-base my-2">
              Bagi peneliti, Google Trends dapat memberikan lensa informatif karena peneliti dapat meninjau pergeseran minat pencarian Google yang berkaitan dengan kebutuhan variabel penelitian. Pada sektor bisnis, Google Trends berperan dalam menciptakan nilai melalui fitur berbasis AI untuk membantu membangun platform Business to Business (B2B) yang efektif. Hal ini bertujuan untuk mengotomatisasi sebagian besar riset pasar yang digunakan untuk memilih produk dan menentukan strategi. Data tren yang disediakan oleh Google Trends dapat digunakan untuk mengukur permintaan sehingga bisa dijadikan acuan untuk mengembangkan model pasar. Para investor misalnya, memanfaatkan Google Trends untuk melihat variasi harga aset global dan kemudian menentukan diversifikasi portofolio, dengan asumsi bahwa popularitas saham yang diukur dengan permintaan dan  penawaran berkorelasi dengan risiko saham.
            </p>
            <p className="text-black text-base my-2">
              Data tren yang dikumpulkan melalui Google Trends juga dapat dimanfaatkan untuk mengukur kesejahteraan sosial. Salah satunya adalah data heterogenitas sosial ekonomi penduduk, yang memfasilitasi estimasi perubahan kesejahteraan yang dibedakan berdasarkan status sosial dan ekonomi. Penelitian yang mungkin dilakukan dari data tersebut dapat menjadi alternatif peringatan dini suatu wilayah atau bahkan negara untuk menentukan langkah yang akan dicapai dalam meningkatkan kesejahteraan penduduk. 
            </p>
            <p className="text-black text-base my-2">
              Dalam lanskap ekonomi, Google Trends berperan secara efektif dalam memprediksi tren terkait perekonomian. Dalam penelitian sebelumnya, Google Trends dipakai untuk memprediksi tingkat pengangguran terbuka baik di tingkat regional di Provinsi Jawa Barat maupun nasional dengan tingkat akurasi yang baik (Widyarsi dan Hardius, 2021). Selain itu, penelitian yang dilakukan oleh Permatasari (2020) berhasil menggunakan Google Trends sebagai prediktor yang tergolong akurat dalam memprediksi jumlah wisatawan di sebuah taman rekreasi di Jawa Timur pada tahun 2020. Lebih menarik lagi, sebuah penelitian berhasil menggunakan Google Trends untuk memprediksi pemilihan umum di Amerika Serikat dan Kanada. Penelitian ini menunjukkan tren linier bahwa terdapat hubungan antara pencarian dan suara voters dalam tiga interval waktu yang terdiri dari 1 bulan, 2 bulan, dan 3 bulan sebelum pemilihan. Di samping itu, Google Trends juga menjadi salah satu elemen yang berkontribusi mengevaluasi SDGs (Hassani et al, 2021). 
            </p>
            <p className="text-black text-base my-2">
              Dengan kemampuan menampilkan data secara real-time, Google Trends dapat dimaksimalkan untuk memprediksi pertumbuhan PDB suatu negara bersamaan dengan indikator ekonomi makro lainnya seperti pertumbuhan ekonomi dan inflasi sebagai dasar pengambilan keputusan atau evaluasi kebijakan. 
            </p>
            <h2 className="text-black text-2xl font-semibold my-2">
              Analisis Data Media Sosial : Twitter
            </h2>
            <p className="text-black text-base my-2">
              UniTrend juga memanfaatkan big data melalui media sosial Twitter untuk mengetahui sentimen publik. Twitter telah menjadi fenomena global yang membingkai segala situasi dan merespon arus informasi dengan cepat. Meskipun terdapat berbagai platform lain yang memiliki fungsi serupa, namun tidak ada yang secara konsisten memberikan arus informasi secara real-time seperti Twitter (Rosenberg et al., 2020). Twitter berfungsi sebagai platform yang memberikan ruang bagi pemerintah untuk menjaring suara atau aspirasi publik. Twitter telah lama digunakan oleh peneliti, akademisi, hingga pemangku kebijakan untuk memahami dinamika yang dapat diamati di jejaring sosial, mulai dari penyebaran informasi, hingga pengaruh bot dan misinformasi (Chen et al., 2020). 
            </p>
            <p className="text-black text-base my-2">
              Proses analisis dilakukan dengan metode penambangan data (scraping) menggunakan kata kunci tertentu yang telah ditentukan.  Metode dalam analisis big data adalah dengan klasifikasi text mining, yang sangat berguna dalam melihat gagasan dan narasi yang terjadi di sosial media, sehingga bisa tergambarkan interaksi apa yang sedang berkembang di masyarakat berdasarkan kata kunci yang diinginkan. Analisis juga menggunakan sentimen dengan pendekatan Lexicon-based approach. Analisis sentimen digunakan untuk memperoleh informasi dengan mengekstrak, memahami, dan mengolah data secara otomatis (Akbari et al., 2017). Lexicon-based approach adalah salah satu pendekatan dalam analisis sentimen dimana analisis akan dilakukan dengan berpedoman pada dataset yang telah diklasifikasikan sebelumnya.
            </p>
            <h1 className="text-black text-5xl font-bold my-2">
              Metodologi Survei
            </h1>
            <p className="text-black text-base my-2">
              Melengkapi analisis big data, UniTrend juga menyelenggarakan survei untuk menganalisis isu sosial, ekonomi dan politik. UniTrend melaksanakan survei dengan representasi nasional dengan menggunakan pendekatan pengumpulan data secara digital dengan dukungan Facebook dan Instagram Ads. Saat ini Ads tidak lagi hanya digunakan sebagai media strategi pemasaran berbasis iklan, namun peneliti hingga pemangku kebijakan juga dapat menggunakan Ads untuk memetakan isu publik yang berkembang  dengan target serta sasaran yang lebih jelas dan tepat. 
            </p>
            <h2 className="text-black text-2xl font-semibold my-2">
              Bagaimana proses pengumpulan data survei via ads?
            </h2>
            <p className="text-black text-base my-2">
              UniTrend menghimpun data survei berbasis web melalui responden yang berasal dari pengguna Facebook maupun Instagram. Melalui fitur Facebook dan Instagram ads, pengguna UniTrend menargetkan responden berbasis kategorisasi pada topik atau kata kunci, lokasi, minat, usia, dan jenis kelamin. Facebook dan Instagram Ads memberikan estimasi sebaran audiens yang akan terpapar oleh survei, dan akan menampilkan survei terkait pada Facebook news feed, Instagram feed, facebook marketplace, facebook video feeds, facebook right column, Instagram explore, messenger inbox, Instagram stories, facebook stories, hingga instant articles. Saat iklan survei ditanyangkan di platform Facebook dan Instagram, calon responden dapat melihat poster, dan mengunjungi tautan yang berisi list pertanyaan survei. Facebook dan Instagram secara otomatis akan menayangkan iklan terkait kepada pengguna yang relevan. Facebook juga menyediakan informasi sosiodemografi pengguna dan pengguna dapat mengatur iklan sesuai dengan kebutuhan. Core audiences pada Facebook dan Instagram akan menyediakan audiens berdasarkan umur, jenis kelamin, ketertarikan/minat, geografi/lokasi, dan lainnya. 
            </p>
            <p className="text-black text-base my-2">
              Facebook Ads akan merangkum tindakan yang diambil oleh calon responden ke dalam kolom metrik pada Ads Manager. Kinerja iklan dapat ditinjau melalui total tayangan (impressions) dan jangkauan (reach) yang menghasilkan frekuensi tertentu. Frekuensi membantu dalam memantau relevansi iklan dan memastikan bahwa orang yang sama tidak terlalu sering melihat iklan guna menghindari kejenuhan calon responden.
            </p>
            <h2 className="text-black text-2xl font-semibold my-2">
              Mengapa melakukan survei via Ads?
            </h2>
            <p className="text-black text-base my-2">
              Survei melalui Facebook Ads dan Instagram Ads memungkinkan peneliti menemukan target responden berdasarkan sosiodemografi, sehingga peneliti dapat mengumpulkan data yang representatif secara nasional. Untuk mendapatkan data yang representatif nasional, UniTrend mengambil responden yang mewakili populasi dalam hal usia, jenis kelamin, pendapatan dan pendidikan. Kelebihan lain dalam menggunakan survei via ads adalah efisiensi waktu dalam pengumpulan data, efisiensi biaya, snowballing effects, serta membantu peneliti untuk menjangkau partisipan yang potensial. 
            </p>
            <p className="text-black text-base my-2">
              Penelitian yang dilakukan oleh Potzschke & Michael (2017) mengenai penduduk migran Polandia di Irlandia, Swiss, Inggris, dan Austria berhasil dilakukan dengan menggunakan Facebook Ads dan Instagram Ads. Penelitian tersebut berhasil mengumpulkan sampel sebanyak 1.103 orang dalam jangka waktu yang relatif singkat yaitu selama 4 minggu (1.100 dalam waktu 4 minggu iklan dipasang). Dengan anggaran sebesar €500 (US$557), metode ini dapat dianggap akurat dan hemat biaya dalam mengumpulkan sampel dari populasi sasaran.
            </p>
            <h2 className="text-black text-2xl font-semibold my-2">
              Bagaimana menganalisis data survei via Ads?
            </h2>
            <p className="text-black text-base my-2">
              Setelah pengumpulan data, data akhir kemudian dibobotkan secara statistik ke populasi nasional semua orang dewasa berusia 18+. Metode pengolahan data survei yang paling umum dilakukan adalah dengan melakukan pembobotan dan di UniTrend kami melakukan pembobotan berdasarkan usia, jenis kelamin, pendapatan dan pendidikan. Pembobotan dilakukan dengan menggunakan basis data Survei Sosial dan Ekonomi Nasional (SUSENAS) yang dipublikasikan oleh Badan Pusat Statistik (BPS). 
            </p>
            <p className="text-black text-base my-2">
              Meskipun terdapat limitasi bahwa tidak semua orang memiliki akses internet, data terbaru menunjukkan bahwa 74 persen masyarakat Indonesia telah mengakses internet  pada tahun 2022 atau mencapai 205 juta pengguna (We Are Social, 2022). Berdasarkan laporan We Are Social, jumlah pengguna aktif media sosial di Indonesia sebanyak 191 juta orang pada Januari 2022, atau mencapai 69 persen dari total jumlah penduduk. 
            </p>
            <p className="text-black text-base my-2">
              Memperoleh sampel yang berkualitas merupakan tantangan pada semua metodologi penelitian. Tentu saja, ada beberapa limitasi pengumpulan data secara online dan kami sangat menyadari hal ini. Namun, tidak tepat juga untuk mengatakan bahwa pengumpulan data secara online bersifat &apos;bias&apos; dibandingkan data yang dikumpulkan secara offline. Penggunaan data secara offline juga memiliki berbagai kelemahan. Tidak hanya soal waktu dan biaya tetapi juga hasil penelitian yang berpotensi bias karena adanya interaksi secara langsung dengan enumerator.  
            </p>
            <p className="text-black text-base my-2">
              Pada akhirnya, berbagai bias tetap harus diperhitungkan oleh semua metodologi. UniTrend berkomitmen untuk selalu melakukan penelitian yang independen, benar secara akademik dan terus berupaya mengurangi berbagai potensi bias. Lebih penting lagi, data yang dikumpulkan oleh UniTrend tidak berniat untuk menggantikan data survei resmi pemerintah seperti BPS yang memiliki kekuatan metodologi yang lebih baik dan cakupan sampel yang lebih besar, melainkan untuk dijadikan alternatif data yang dapat dianalisis secara reguler, dengan titik waktu pengumpulan data yang lebih banyak, sehingga dapat membantu pengambil kebijakan dalam mengambil keputusan dengan cepat dan terukur. 
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
