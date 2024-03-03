import React, { useRef, useEffect } from 'react';
import { Carousel } from 'flowbite-react';

const Banner = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 relative ">
      <div className=" relative sm:h-screen h-72  overflow-x-hidden overflow-y-hidden">
        <Carousel ref={carouselRef} className="carousel-inner h-full">
          <div className="carousel-item relative h-full" style={{ backgroundImage: "url('https://www.sourcesol.co.in/demo/siteb/assets/images/bg1.jpg')",backgroundSize: 'cover' }}>
            <div className="absolute inset-0 flex items-center justify-left ">
              <h1 className="text-white text-left text-4xl md:text-5xl  lg:text-6xl xl:text-6xl font-bold px-5">
                OUR COMMITMENT <br />BUILDING AN <br />ADAPTIVE ENVIRONMENT
              </h1>
            </div>
          </div>
          <div className="carousel-item relative h-full" style={{ backgroundImage: "url('https://www.sourcesol.co.in/demo/siteb/assets/images/bg2.jpg')",backgroundSize: 'cover' }}>
            <div className="absolute inset-0 flex items-center justify-left">
              <h1 className="text-white text-left text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold px-5">
                OUR COMMITMENT <br />TEAM WORK
              </h1>
            </div>
          </div>
          <div className="carousel-item relative h-full" style={{ backgroundImage: "url('https://www.sourcesol.co.in/demo/siteb/assets/images/bg3.jpg')",backgroundSize: 'cover'  }}>
            <div className="absolute inset-0 flex items-center justify-left">
              <h1 className="text-white text-4xl text-left md:text-5xl lg:text-6xl xl:text-6xl font-bold px-5">
                OUR COMMITMENT <br />IMPROVE PRODUCTIVITY
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-blue-500" onClick={handlePrev}>
        {/* Left Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-blue-500" onClick={handleNext}>
        {/* Right Arrow SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
