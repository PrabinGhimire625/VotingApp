import React from 'react';
import Home from '../home/Home';
import Navbar from '../../globals/navbar/Navbar';

const Landing = () => {
  return (
  <>
    <Navbar/>
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden ">
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span className="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-3/4 lg:w-5/6 relative">
  <img
    src="https://c8.alamy.com/comp/KX38GH/indian-group-school-students-friends-arms-crossed-standing-together-KX38GH.jpg"
    className="w-full max-w-2xl h-auto m-auto"
  />
</div>

        </div>
    </div>
    </main>

    <Home/>
    



     
    </>
  );
};

export default Landing;
