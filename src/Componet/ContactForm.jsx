import React from 'react';
import car from '../assets/car.jpg';

const ContactForm = () => {
    return (
        <div className="bg-black text-white px-6 py-12 md:px-10 md:py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                
                {/* Image Section */}
                <div data-aos="zoom-in" className="w-full md:w-1/2">
                    <img src={car} alt="Car" className="w-full object-cover h-64 md:h-auto" />
                </div>

                {/* Form Section */}
                <div data-aos="fade-left" className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-left">Get in touch today</h2>
                    <form className="flex flex-col gap-4 border border-gray-700 p-6 md:p-8 rounded">
                        
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 text-left text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                className="px-2 bg-black border-b border-gray-500 focus:outline-none"
                            />
                        </div>
                        
                        {/* Email Field */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-2 text-left text-sm">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="px-2 bg-black border-b border-gray-500 focus:outline-none"
                            />
                        </div>
                        
                        {/* Company and Phone Fields */}
                        <div className="flex flex-col md:flex-row justify-between gap-2 w-full">
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="company" className="mb-2 text-left text-sm">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    className="px-2 bg-black border-b border-gray-500 focus:outline-none"
                                />
                            </div>
                            <div className='flex flex-col w-full md:w-1/2'>
                                <label htmlFor="phone" className="mb-2 text-left text-sm">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="px-2 bg-black border-b border-gray-500 focus:outline-none"
                                />
                            </div>
                        </div>
                        
                        {/* Message Field */}
                        <div className="flex flex-col bg-gray-600 p-2 rounded">
                            <label htmlFor="message" className="mb-2 text-left text-sm">
                                Describe
                            </label>
                            <textarea
                                id="message"
                                className="bg-gray-600 focus:outline-none h-32 md:h-48" 
                                placeholder="Hello, I wanted to inquire about the..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
