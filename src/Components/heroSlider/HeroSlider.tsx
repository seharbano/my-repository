"use client"
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import FirstImg from "@/assets/pngs/tigeraim-grid-banner.jpg";
import SecondImg from "@/assets/pngs/analytics-and-AI-powered-certainty-home-banner-desktop.png";
import ThirdImg from "@/assets/pngs/great-work-place-banner.jpg";
import FourthImg from "@/assets/pngs/tiger-home-steps-bnr-mob.png";
import TopImg from "@/assets/pngs/work-badge.webp";
import TopFirstImg from "@/assets/pngs/peak-matrix-star.webp";
import TopSecondImg from "@/assets/pngs/peak-matrix-leader-2.webp";
import AimtToCross from "@/assets/pngs/aims_to_cross-_home_banner.jpg";
import AimLogo from "@/assets/pngs/aim-logo.jpg";
import Image from 'next/image';
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const PrevArrow = ({ onClick }: any) => (
  <button className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-white text-[#f7901e] p-2 border border-[#948c89] rounded-full shadow-md" onClick={onClick}>
    <svg className='w-[20px] h-[20px] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#f7901e] border border-[#948c89] p-2 rounded-full shadow-md" onClick={onClick}>
    <svg className='w-[20px] h-[20px] ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19l7-7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const HeroSlioder = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => {
      setAnimating(true);
      setSlideIndex(next);
    },
    afterChange: () => {
      setAnimating(false);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  useEffect(() => {
    if (animating) {
      document.querySelectorAll('.animate-fadeInUp').forEach((el) => {
        const element = el as HTMLElement;
        element.classList.remove('animate-fadeInUp');
        void element.offsetWidth;
        element.classList.add('animate-fadeInUp');
      });
    }
  }, [animating]);

  useEffect(() => {
    if (animating) {
      document.querySelectorAll('.animate-slideInLeft').forEach((el) => {
        const element = el as HTMLElement;
        element.classList.remove('animate-slideInLeft');
        void element.offsetWidth;
        element.classList.add('animate-slideInLeft');
      });
    }
  }, [animating]);

  return (
    <div className="relative w-full h-[100vh]">
      <Slider {...settings}>

        <div className="relative w-full h-[95vh] flex items-center justify-center " >
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${slideIndex === 0 ? 'scale-in' : ''}`}
            style={{ backgroundImage: `url(${ThirdImg.src}) `, backgroundSize: 'cover', backgroundPosition: 'center center', objectFit: "contain", objectPosition: "center center" }}
          />
          <div

            className="relative z-10 h-full  flex flex-col justify-center items-left text-left pl-32 gap-y-6 max-[900px]:pl-14 max-[900px]:px-12  max-[900px]:gap-y-3 "
          >
            <Image src={TopImg} alt='banner' className='animate-fadeInUp delay-500 opacity-0' />
            <h1 className="text-white text-wrap text-4xl max-[900px]:text-[20px] font-bold opacity-0 animate-fadeInUp delay-700">Our Tribe Makes All the Difference</h1>
            <p className="text-white text-wrap text-lg  max-[900px]:text-[14px] opacity-0 animate-fadeInUp delay-700">We are certified as a Great Place to Work® for yet another year.</p>
            <button className='bg-black text-white text-wrap rounded-[5px] flex justify-between items-center w-[130px] text-[15px] px-3 py-3 gap-1 opacity-0 animate-slideInLeft delay-1000'><span>Now More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 22.828 22.828">
                <g id="shp-arrow-topright-large" transform="translate(1.414 1.414)">
                  <path id="Path_63" data-name="Path 63" d="M6127,153l20-20" transform="translate(-6127 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                  <path id="Path_64" data-name="Path 64" d="M6135,133h15.95v15.806" transform="translate(-6130.95 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                </g>
              </svg>

            </button>
          </div>
        </div>

        <div className="relative w-full h-[95vh] flex items-center justify-center  "
        >
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${slideIndex === 1 ? 'scale-in' : ''}`}
            style={{ backgroundImage: `url(${FourthImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div

            className="relative z-10 h-full  flex flex-col justify-center items-left text-left pl-32 gap-y-6 max-[900px]:pl-14 max-[900px]:px-12  max-[900px]:gap-y-3 ">

            <div className='flex justify-start items-center gap-6'>
              <Image src={TopFirstImg} alt='' className='animate-fadeInUp delay-500 opacity-0' />
              <Image src={TopSecondImg} alt='' className='animate-fadeInUp delay-500 opacity-0' />
            </div>
            <h1 className="text-white text-wrap text-4xl max-[900px]:text-[20px] font-bold animate-fadeInUp delay-700 opacity-0">Ranked a Leader and Star Performer in
              <br />Everest Group PEAK Matrix® Assessment
              <br />2024
              <br />Ranked for Our strong</h1>
            <p className="text-white text-wrap text-lg  max-[900px]:text-[14px]  animate-fadeInUp delay-700 opacity-0">Ranked for Our strong IP, robust partnerships, and innovative solutions</p>
            <button className='bg-black text-white text-wrap rounded-[5px] flex justify-between items-center w-[180px] text-[15px] px-4 py-3 gap-1 opacity-0 animate-slideInLeft delay-1000'><span>Download Report</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 22.828 22.828">
                <g id="shp-arrow-topright-large" transform="translate(1.414 1.414)">
                  <path id="Path_63" data-name="Path 63" d="M6127,153l20-20" transform="translate(-6127 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                  <path id="Path_64" data-name="Path 64" d="M6135,133h15.95v15.806" transform="translate(-6130.95 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                </g>
              </svg>

            </button>
          </div>
        </div>

        <div className="relative w-full h-[95vh] flex items-center justify-center  ">
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${slideIndex === 2 ? 'scale-in' : ''}`}
            style={{ backgroundImage: `url(${SecondImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div

            className="relative z-10 h-full  flex flex-col justify-center items-left text-left pl-32 gap-y-6 max-[900px]:pl-14 max-[900px]:px-12  max-[900px]:gap-y-3 "
          >
            <h1 className="text-black text-wrap text-4xl max-[900px]:text-[20px] font-bold animate-fadeInUp delay-500 opacity-0">Unlock Progress With Analytics And Al-<br />
              Powered Certainty</h1>
            <p className="text-black text-wrap text-lg  max-[900px]:text-[14px]  animate-fadeInUp delay-500 opacity-0">End-to-end solutions that open up a breadth of possibilities for your
              business</p>
            <button className='bg-black text-white text-wrap rounded-[5px] flex justify-between items-center w-[300px] text-[15px] px-4 py-3 gap-1 animate-slideInLeft delay-700 opacity-0'><span>See how we deliver value at scale</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 22.828 22.828">
                <g id="shp-arrow-topright-large" transform="translate(1.414 1.414)">
                  <path id="Path_63" data-name="Path 63" d="M6127,153l20-20" transform="translate(-6127 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                  <path id="Path_64" data-name="Path 64" d="M6135,133h15.95v15.806" transform="translate(-6130.95 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                </g>
              </svg>

            </button>
          </div>
        </div>

        <div className="relative w-full h-[95vh] flex items-center justify-center  ">
          <div className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${slideIndex === 3 ? 'scale-in' : ''}`}
            style={{
              backgroundImage: `url(${FirstImg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',

            }}
          />
          <div

            className="relative z-10 h-full   flex flex-col justify-center items-left text-left pl-32 gap-y-6 max-[900px]:pl-14 max-[900px]:px-12  max-[900px]:gap-y-3 "
          >
            <Image src={AimLogo} alt='aim' className='aanimate-fadeInUp delay-500 opacity-0 ' />
            <h1 className="text-white text-wrap text-4xl max-[900px]:text-[20px] font-bold animate-fadeInUp delay-700 opacity-0">We're among 50 Best Firms for Data<br />
              Scientists to Work 2024</h1>
            <p className="text-white text-wrap text-lg  max-[900px]:text-[14px]  animate-fadeInUp delay-700 opacity-0">The AIM report recognized us among the Top 10 firms where data
              <br /> scientists thrive.</p>
            <button className='bg-black text-white text-wrap rounded-[5px] flex justify-between items-center w-[130px] text-[15px] px-3 py-3 gap-1 animate-slideInLeft delay-1000 opacity-0'><span>Now More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 22.828 22.828">
                <g id="shp-arrow-topright-large" transform="translate(1.414 1.414)">
                  <path id="Path_63" data-name="Path 63" d="M6127,153l20-20" transform="translate(-6127 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                  <path id="Path_64" data-name="Path 64" d="M6135,133h15.95v15.806" transform="translate(-6130.95 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                </g>
              </svg>

            </button>
          </div>
        </div>

        <div className="relative w-full h-[95vh] flex items-center justify-center  "
        >
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out  ${slideIndex === 4 ? 'scale-in' : ''}`}
            style={{ backgroundImage: `url(${AimtToCross.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div

            className="relative z-10 h-full  flex flex-col justify-center items-left text-left pl-32 gap-y-6 max-[900px]:pl-14 max-[900px]:px-12  max-[900px]:gap-y-3 ">

            <div className='flex justify-start items-center gap-6'>
              <Image src={TopFirstImg} alt='' className='aanimate-fadeInUp delay-500 opacity-0' />
              <Image src={TopSecondImg} alt='' className='aanimate-fadeInUp delay-500 opacity-0' />
            </div>
            <h1 className="text-white text-wrap text-4xl max-[900px]:text-[20px] font-bold animate-fadeInUp delay-700 opacity-0">SOur Tribe Makes All the Difference</h1>
            <p className="text-white text-wrap text-lg  max-[900px]:text-[14px]  animate-fadeInUp delay-700 opacity-0">We are certified as a Great Place to Work®️ for yet another year.</p>
            <button className='bg-black text-white text-wrap rounded-[5px] flex justify-between items-center w-[130px] text-[15px] px-4 py-3 gap-1 animate-slideInLeft delay-1000 opacity-0'><span>Now More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 22.828 22.828">
                <g id="shp-arrow-topright-large" transform="translate(1.414 1.414)">
                  <path id="Path_63" data-name="Path 63" d="M6127,153l20-20" transform="translate(-6127 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                  <path id="Path_64" data-name="Path 64" d="M6135,133h15.95v15.806" transform="translate(-6130.95 -133)" fill="none" stroke="#ef8d34" stroke-linecap="round" stroke-width="2"></path>
                </g>
              </svg>

            </button>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default HeroSlioder;
