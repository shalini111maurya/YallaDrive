import React from 'react';
import img3 from '../assets/img3.jpg';

const About = () => {
    return (
        <div  className="container mx-auto px-4 py-8 md:py-16">
            <div className="flex flex-col md:flex-row items-left justify-between">
                {/* Left Section */}
                <div data-aos="fade" className='w-full md:w-2/5 bg-[#F6FAFF] p-6 md:p-4'>
                    <div className="flex justify-start md:justify-left  mb-4">
                        <div className="w-[15%] md:w-[20%] h-1 bg-blue-500 rounded-full"></div>
                        <p className="text-blue-500 font-bold text-xs md:text-sm ml-2 mr-2">About us</p>
                        <div className="w-[15%] md:w-[20%] h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="w-full md:w-5/6">
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                            Yalla Manages the Drive, So You Can Savor Every Moment
                        </h1>
                        <p className="text-gray-600 mb-4 md:mb-6 text-center md:text-left">
                            Yalla handles driving, parking, and traffic, so you can focus on what truly matters. Let us manage the road while you enjoy life.
                        </p>
                        <ul className="text-gray-600 text-center md:text-left list-none">
                            <li className="mb-2 md:mb-4">
                                <span className='text-[10px] md:text-[8px] mr-2'>01</span> Available 24/7
                            </li>
                            <li className="mb-2 md:mb-4">
                                <span className='text-[10px] md:text-[8px] mr-2'>02</span> Easy to Book a Ride
                            </li>
                            <li className='mb-2 md:mb-4'>
                                <span className='text-[10px] md:text-[8px] mr-2'>03</span> Hassle Free Chauffeur Rental
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div data-aos="zoom-out" data-aos-delay="500" className='w-full md:w-3/5 mt-8 md:mt-0'>
                    <div className="w-full md:w-5/6">
                        <div className="hidden md:flex w-[400px] items-center mb-16 ml-4 md:ml-8">
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-blue-500 w-4 h-4 md:w-6 md:h-6"></div>
                                <div className="ml-4 text-xs md:text-sm font-medium absolute top-3 md:top-4 left-[-30px]">Trustworthy Chauffeurs</div>
                            </div>
                            <div className="flex-grow h-px bg-gray-200"></div>
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-blue-500 w-4 h-4 md:w-6 md:h-6"></div>
                                <div className="ml-4 text-xs md:text-sm font-medium absolute top-3 md:top-4 left-[-30px]">Guaranteed Punctuality</div>
                            </div>
                            <div className="flex-grow h-px bg-gray-200"></div>
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-blue-500 w-4 h-4 md:w-6 md:h-6"></div>
                                <div className="ml-4 text-xs md:text-sm font-medium absolute top-3 md:top-4 left-[-30px]">Commitment to Safety</div>
                            </div>
                        </div>
                        <img
                            src={img3}
                            alt="Child in a car seat"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
