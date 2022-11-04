import Link from 'next/link';
import Image from 'next/future/image';
import PoldevImg from '../public/logo-poldev.png';

export default function about() {
  return (
    <>
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
            <h1 className="text-black text-[3em] md:text-[4em] font-bold">
              About Us
            </h1>
            <Image
              src={PoldevImg}
              alt="Poldev UGM"
              className="my-6 self-center"
            ></Image>
            <p className="text-black text-base indent-10">
              Institute for Policy Development (PolDev) merupakan lembaga penelitian di Universitas Gadjah Mada dan turut berperan dalam mendukung perumusan kebijakan berbasis data. Melalui UniTrend, PolDev berusaha menyajikan dan menganalisis data terkait isu-isu aktual yang sedang diperbincangkan oleh masyarakat Indonesia. Data yang digunakan didapatkan dari survey, data Google Trends, data dari media sosial, dan platform sumber data lainnya. 
            </p>
            <p className="text-black text-base indent-10">
              Data berperan signifikan tidak hanya dalam proses perumusan kebijakan tetapi juga untuk menganalisa kondisi di masa kini dan memprediksi masa depan. Namun demikian, disaat proses pengambilan kebijakan harus dilakukan dengan cepat dan akurat, seringkali terdapat lag, dimana data-data resmi yang tersedia diambil di masa lalu, atau beberapa bulan dan beberapa tahun sebelumnya. UniTrend berusaha untuk mengintegrasikan data berbasis survey secara real-time. Data-data tersebut diharapkan dapat menjadi alternatif data selain data-data official yang dirilis oleh pemerintah dan instansi publik lainnya.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
