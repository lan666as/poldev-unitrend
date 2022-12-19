import { useState, useRef, Fragment, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import SectorButton from './SectorButton';
import Link from 'next/link';
// import LogoPoldev from '../public/logo-poldev.png';
import LogoPoldev from '../public/logo-poldev.png';
import Image from 'next/future/image';
import trendsData from '../assets/data/Data_GT.json';

export default function Navbar() {
  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [ref]);

    return ref;
  };
  const [isShown, setIsShown] = useState(false);
  const handleClickOutside = () => {
    setIsShown(!isShown);
  };
  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      <Transition
        className="fixed top-0 left-0 right-0 bg-[#FFFFFF] px-[10%] z-20 pb-4"
        show={isShown}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        // as={Fragment}
        ref={ref}
      >
        <div>
          <svg
            className="cursor-pointer my-4"
            onClick={() => setIsShown(!isShown)}
            width={15}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.51L13.49 0 7.5 5.99 1.51 0 0 1.51 5.99 7.5 0 13.49 1.51 15 7.5 9.01 13.49 15 15 13.49 9.01 7.5 15 1.51z"
              fill="#06283D"
            />
          </svg>
          {/* <div className="my-2">Semua Sektor</div> */}
          <hr className="border-1 mb-2 mt-1"></hr>

          <div className="flex flex-wrap">
            {Object.keys(trendsData).map((sector, index) => {
              return (
                <>
                  <SectorButton
                    href={`/sector/${sector}`}
                    name={`${trendsData[sector]['name']}`}
                  />
                </>
              );
            })}
          </div>
        </div>
      </Transition>
      <div className="fixed top-0 left-0 right-0 z-[10]">
        <div className="flex bg-[#DFF6FF] h-[60px] items-center justify-between font-medium px-[10%]">
          <Link href={'/'}>
            <Image
              src={LogoPoldev}
              alt="Poldev UGM"
              className="hover:cursor-pointer h-[40px] w-auto"
            />
          </Link>
          <div className="flex">
            <div className="mx-5 cursor-pointer hidden md:block">
              <Link href="/about">About Us</Link>
            </div>
            <div className="mx-5 cursor-pointer hidden md:block">
              <Link href="/survey">Survey</Link>
            </div>
            <div className="mx-5 cursor-pointer hidden md:block">
              <Link href="/economic-development">Economic Development</Link>
            </div>
            <div className="mx-5 cursor-pointer hidden md:block">
              <Link href="/indonesian-election">Indonesian Election</Link>
            </div>
            {/* <div className="mx-5 flex items-center">
              <div  className="hover:cursor-pointer mr-1 flex flex-row items-center" onClick={() => setIsShown(!isShown)}>
                <span className="mr-1">
                Sektor Data
                </span>
                <svg
                  width={10}
                  height={8}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0l5 8 5-8H0z" fill="#06283D" />
                </svg>
              </div>
            </div> */}
            <div className="mx-5 cursor-pointer hidden md:block">
              <Link href="/methodology">Methodology</Link>
            </div>
            <div className="mx-5 cursor-pointer hidden md:block">
              <Link href="/teams">Our Teams</Link>
            </div>
          </div>
          {/* <div className="flex items-center">
            <div className="mr-1">ID</div>
            <svg
              width={10}
              height={8}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0l5 8 5-8H0z" fill="#06283D" />
            </svg>
          </div> */}
        </div>
      </div>
      <div
        className={
          isShown
            ? 'bg-black fixed top-0 left-0 right-0 min-h-[100vh] min-w-full opacity-90 z-[1]'
            : ''
        }
      ></div>
    </>
  );
}
