import Link from 'next/link';
import arrowUp from '../public/arrow-up.svg';
import arrowUp2 from '../public/arrow-up-2.svg';
import arrowDown from '../public/arrow-down.svg';
import arrowDown2 from '../public/arrow-down-2.svg';
import Image from 'next/future/image';
import DataGT from '../assets/data/Data_GT.json';
import DataSDGS from '../assets/data/Data_SDGs.json';

export default function DetailCard(props) {
  return (
    <Link href={props.href}>
      <div
        className="rounded-xl h-[10rem] hover:cursor-pointer flex flex-col justify-center items-center bg-cover drop-shadow-lg shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.65)]"
        style={{
          backgroundImage:
              `url(/assets/images/sectors/${props.slug}.jpg)`
        }}
      >
        <div className="text-center text-white text-base">
          {props.sector ? props.sector : 'Pariwisata'}
        </div>
        <div className="flex justify-center items-center">
          {props.trendsChange > 0.0 ? (
            <Image
              src={props.type == 'Sector' ? arrowUp : arrowUp2}
              className="h-[3.2rem] w-[3.2rem] mx-1"
              alt="arrow up"
              layout="fill"
            />
          ) : (
            <Image
              src={props.type == 'Sector' ? arrowDown : arrowDown2}
              className="h-[3.2rem] w-[3.2rem] mx-1"
              alt="arrow up"
              layout="fill"
            />
          )}
          {props.trendsChange > 0.0 ? (
            <span
              className={
                props.type == 'Sector'
                  ? 'text-[#07B0F8] mx-1 text-[3rem] font-bold'
                  : 'text-[#F84F07] mx-1 text-[3rem] font-bold'
              }
            >
              {props.trendsChange ? props.trendsChange.toFixed(1) : '0.0%'}%
            </span>
          ) : (
            <span
              className={
                props.type == 'Sector'
                  ? 'mx-1 text-[3rem] font-bold text-[#F84F07]'
                  : 'mx-1 text-[3rem] font-bold text-[#07B0F8]'
              }
            >
              {props.trendsChange ? -1 * props.trendsChange.toFixed(1) : '0.0%'}
              %
            </span>
          )}
          {/* <span className="mx-1 text-[3rem] font-bold text-[#07B0F8]">{props.trendsChange ? props.trendsChange.toFixed(1) : "0.0%"}</span> */}
        </div>
      </div>
    </Link>
  );
}
