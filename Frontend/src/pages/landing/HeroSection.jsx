import React, { useState, useEffect } from 'react';
import "../../App.css"

const HeroSection = () => {
  const images = [
    'https://english.news.cn/20240126/e3b2c81dfc8346968767e5cf9cd0c647/Az9CNRfnMZGht8pG.jpg',
    'https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/GCANOCXgAAkGVI-1704360815.jpg&w=900&height=601',
    'https://cdn.who.int/media/images/default-source/nepal/health-topics_nepal/water_nepal/img_0195.jpg?sfvrsn=bb10e95_3'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <header>

        {/* above animation look the animation css to the   */}
        <nav className="p-4 shadow-md">
          <div className="container mx-auto justify-center ">
            <h1 className="text-xl font-bold text-red-600 animate-marquee ">
              Welcome to the School Voting System
            </h1>
          </div>
        </nav>

        <div
          className="w-full bg-center bg-cover h-[800px]"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                Politics of <span className="text-blue-400 underline">Nepal</span>
              </h1>
              <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Start Vote
              </button>
            </div>
          </div>
        </div>

        {/* below animation */}
        <nav className="p-4 shadow-md ">
          <div className="container mx-auto justify-center ">
            <h1 className="text-xl font-bold text-red-600 animate-marquee">
              Welcome to the School Voting System
            </h1>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeroSection;
