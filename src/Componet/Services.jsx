import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { MdCorporateFare } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section className="py-6 md:py-12 px-4 md:px-6">
        <div className='flex flex-col sm:flex-row w-full'>
          {/* Left Section */}
          <div data-aos="fade" className='w-3/5 sm:w-1/2 mb-8'>
            <div className="flex justify-start items-center mb-5">
              <div className="w-[10%] h-1 bg-blue-500 rounded-full"></div>
              <p className="text-blue-500 font-bold text-xl md:text-2xl ml-2 mr-2">Our Services</p>
              <div className="w-[10%] h-1 bg-blue-500 rounded-full"></div>
            </div>
            <div className='text-left text-2xl sm:text-3xl md:text-4xl font-bold'>
              <h2>Luxury Redefined: Chauffeur <br /> Services Beyond Compare</h2>
            </div>
          </div>

          {/* Right Section */}
          <div data-aos="fade" className='w-2/5 sm:w-1/2 md:w-5/6'>
            <div className="w-full h-1 bg-blue-500 rounded-full items-center mb-5"></div>
            <p className='text-xl sm:text-2xl md:text-3xl text-left'>
              With Yalla, ditch the car hassles and focus on what matters—opportunities, loved ones, or relaxation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 bg-[#F6FAFF]">
          <div data-aos="fade-right" data-aos-delay="300" className="p-6 rounded-md text-left">
            <div className='flex'>
              <p className='text-lg px-3 py-1 w-10 mb-4 bg-black text-white'>01</p>
              <p className='w-1.5 h-8 mt-0.5 bg-primary'></p>
            </div>
            <IoPersonSharp className='h-8 w-8 mb-4 mt-4' />
            <div className="text-lg md:text-xl font-bold mb-4">Personalized Service</div>
            <p className='text-lg md:text-2xl'>Book a luxury service with a dedicated chauffeur to meet your specific needs.</p>
            <p className='flex items-center mt-6 text-lg font-bold'><FaAnglesRight className='mr-2' /> Learn more</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="400" className="p-6 rounded-md text-left">
            <div className='flex'>
              <p className='text-lg px-3 py-1 w-10 mb-4 bg-black text-white'>02</p>
              <p className='w-1.5 h-8 mt-0.5 bg-primary'></p>
            </div>
            <SlPlane className='h-8 w-8 mb-4 mt-4' />
            <div className="text-lg md:text-xl font-bold mb-4">Airport Transfers</div>
            <p className='text-lg md:text-2xl'>Arrive on time and in style with our reliable transportation services.</p>
            <p className='flex items-center mt-6 text-lg font-bold'><FaAnglesRight className='mr-2' /> Learn more</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="500" className="p-6 rounded-md text-left">
            <div className='flex'>
              <p className='text-lg px-3 py-1 w-10 mb-4 bg-black text-white'>03</p>
              <p className='w-1.5 h-8 mt-0.5 bg-primary'></p>
            </div>
            <MdCorporateFare className='h-8 w-8 mb-4 mt-4' />
            <div className="text-lg md:text-xl font-bold mb-4">Corporate Services</div>
            <p className='text-lg md:text-2xl'>Travel with business lovers with our professional drivers.</p>
            <p className='flex items-center mt-6 text-lg font-bold'><FaAnglesRight className='mr-2' /> Learn more</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="600" className="p-6 rounded-md text-left">
            <div className='flex'>
              <p className='text-lg px-3 py-1 w-10 mb-4 bg-black text-white'>04</p>
              <p className='w-1.5 h-8 mt-0.5 bg-primary'></p>
            </div>
            <MdCorporateFare className='h-8 w-8 mb-4 mt-4' />
            <div className="text-lg md:text-xl font-bold mb-4">City Tours</div>
            <p className='text-lg md:text-2xl'>Attractive trips for your special travel needs.</p>
            <p className='flex items-center mt-6 text-lg font-bold'><FaAnglesRight className='mr-2' /> Learn more</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="700" className="p-6 rounded-md text-left">
            <div className='flex'>
              <p className='text-lg px-3 py-1 w-10 mb-4 bg-black text-white'>05</p>
              <p className='w-1.5 h-8 mt-0.5 bg-primary'></p>
            </div>
            <MdCorporateFare className='h-8 w-8 mb-4 mt-4' />
            <div className="text-lg md:text-xl font-bold mb-4">Event Transportation</div>
            <p className='text-lg md:text-2xl'>Enjoy events effortlessly with expert chauffeurs.</p>
            <p className='flex items-center mt-6 text-lg font-bold'><FaAnglesRight className='mr-2' /> Learn more</p>
          </div>

          <div data-aos="fade-right" data-aos-delay="800" className="p-6 rounded-md text-left">
            <div className='flex'>
              <p className='text-lg px-3 py-1 w-10 mb-4 bg-black text-white'>06</p>
              <p className='w-1.5 h-8 mt-0.5 bg-primary'></p>
            </div>
            <MdCorporateFare className='h-8 w-8 mb-4 mt-4' />
            <div className="text-lg md:text-xl font-bold mb-4">VIP Service</div>
            <p className='text-lg md:text-2xl'>Experience the ultimate in service with our luxury VIP offers.</p>
            <p className='flex items-center mt-6 text-lg font-bold'><FaAnglesRight className='mr-2' /> Learn more</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;
