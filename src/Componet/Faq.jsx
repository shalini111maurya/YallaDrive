import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const Faq = () => {
    return (
        <>
            <section className="bg-black w-full py-12 px-6">
                {/* Header Section */}
                <div className='container'>
                    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row justify-between">
                        <div  data-aos="fade-right"  className="text-center md:text-left md:w-1/2 mb-6 md:mb-0">
                            <h1 className="text-4xl md:text-7xl font-semibold mb-4 text-white">
                                Frequently Asked Questions.
                            </h1>
                        </div>
                        <div data-aos="fade-left"  className="mt-4 md:w-2/5">
                            <div className="w-full h-1 bg-blue-500 rounded-full"></div>
                            <p className="mt-4 text-lg md:text-2xl text-white text-center md:text-left">
                                Everything you need to know about us. Can't find the answer you're looking for? Get In Touch.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div data-aos ="fade" data-aos-delay="200" className="w-full mt-6 px-4">
                    <hr className='opacity-20' />
                    <div className="py-4">
                        <h3 className="text-lg md:text-4xl text-white mt-5 mb-4 text-left">
                            How Do I Book A Ride With Yalla Drive?
                        </h3>
                        <p className="text-white text-base md:text-xl mb-6 text-left">
                            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the
                            appropriate classes that we use to style each element.
                        </p>
                    </div>
                    <hr className='opacity-20' />
                    <div className="py-4 mb-5 text-left">
                        <h3 className="text-lg md:text-4xl text-white mt-5 mb-4 opacity-20">
                            + Can I Schedule A Ride In Advance?
                        </h3>
                    </div>
                </div>

                {/* Contact Section */}
                <div className='container mx-auto'>
                    <div className='bg-[#1f1f1f] flex flex-col md:flex-row py-6 px-20 justify-between items-center'>
                        <div data-aos="fade-right" className='md:w-1/2 space-y-4 mb-6 md:mb-0'>
                            <h1 className='text-2xl md:text-3xl text-white text-left'>Still Have Questions?</h1>
                            <p className='text-lg md:text-xl text-[#868686] text-left'>
                                Can't find the answer you are looking for? Please chat with our friendly team.
                            </p>
                        </div>
                        <div data-aos="fade-left"  className='md:w-1/2 flex justify-center md:justify-end'>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md flex items-center'>
                                <MdArrowOutward className="text-white text-lg mr-2" /> Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;
