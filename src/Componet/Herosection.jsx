import React from "react";
import img2 from "../assets/img2.jpg";
import car from "../assets/car.jpg";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="w-full bg-blue-600 flex flex-col lg:flex-row">
      {/* Text Section */}
      <div  className="w-full lg:w-1/2 text-white text-left py-10 lg:py-20 px-6 lg:px-10">
        <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold mb-4">Yalla Drive</h1>
        <h2 data-aos="fade-up"  className="text-4xl lg:text-5xl font-bold mb-4">On Demand</h2>
        <h3 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold">Chauffeur Service</h3>
        <p data-aos="fade-up" data-aos-delay="300" className="mt-3 text-lg lg:text-xl">On Demand Chauffeur Service</p>

        <div className="mt-6 space-y-3">
          <div className="flex flex-wrap">
            <button data-aos="fade-up" data-aos-delay="400" className="border border-white text-white px-4 py-2 mb-3 mr-3 rounded text-sm lg:text-base">
              Per Minute
            </button>
            <button data-aos="fade-up" data-aos-delay="500" className="border border-white text-white px-4 py-2 mb-3 mr-3 rounded text-sm lg:text-base">
              Per Hour
            </button>
            <button data-aos="fade-up" data-aos-delay="600" className="border border-white text-white px-4 py-2 mb-3 mr-3 rounded text-sm lg:text-base">
              Per Day
            </button>
            <button data-aos="fade-up" data-aos-delay="700" className="border border-white text-white px-4 py-2 mb-3 mr-3 rounded text-sm lg:text-base">
              Per Week
            </button>
            <button data-aos="fade-up" data-aos-delay="300" className="border border-white text-white px-4 py-2 rounded text-sm lg:text-base">
              Per Month
            </button>
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <button data-aos="fade-up" data-aos-delay="300" className="bg-white text-black px-4 py-2 rounded flex items-center text-sm lg:text-base">
            <FaApple className="mr-1" /> Apple Store
          </button>
          <button data-aos="fade-up" data-aos-delay="300" className="bg-white text-black px-4 py-2 rounded flex items-center text-sm lg:text-base">
            <FaGooglePlay className="mr-1" /> Google Play
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div data-aos="zoom-in" data-aos-delay="500" className="hidden md:flex relative w-full lg:w-1/2 items-center justify-center py-10 lg:py-0">
        {/* First image: Positioned at the top left */}
        <div className="absolute top-10 left-6 lg:left-20">
          <img
            src={img2}
            alt="First"
            className="w-[250px] h-[150px] lg:w-[400px] lg:h-[250px] object-cover shadow-lg"
          />
        </div>

        {/* Second image: Positioned at the bottom right */}
        <div className="absolute bottom-10 right-6 lg:bottom-20 lg:right-20">
          <img
            src={car}
            alt="Second"
            className="w-[250px] h-[150px] lg:w-[400px] lg:h-[250px] object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
