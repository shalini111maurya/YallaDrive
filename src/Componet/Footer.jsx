import React from 'react';
import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4 md:py-8 md:px-8">
            <div data-aos="fade-down" className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                
                {/* Subscription Section */}
                <div className="text-center lg:text-left lg:w-1/2 mb-6 lg:mb-0">
                    <h3 className="text-lg md:text-xl mb-4">
                        Lorem ipsum dolor sit amet consectetur. Enim est.
                    </h3>
                    <p className="text-sm mb-4">
                        We've created the product that will help your startup look even better.
                    </p>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-start">
                        <input
                            type="email"
                            className="w-full lg:w-auto bg-black border border-gray-600 text-white rounded-md px-4 py-2 mb-2 lg:mb-0 lg:mr-2"
                            placeholder="Your email"
                        />
                        <button className="w-full lg:w-auto bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* About Section */}
                <div className="text-center lg:text-left lg:w-1/5 mb-6 lg:mb-0 lg:pl-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4">About</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Education</a></li>
                        <li><a href="#" className="hover:underline">Telematics</a></li>
                        <li><a href="#" className="hover:underline">Integrations</a></li>
                        <li><a href="#" className="hover:underline">Agriculture</a></li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div className="text-center lg:text-left lg:w-1/5 mb-6 lg:mb-0 lg:pl-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">FAQ</a></li>
                        <li><a href="#" className="hover:underline">Support</a></li>
                        <li><a href="#" className="hover:underline">API</a></li>
                    </ul>
                </div>

                {/* Get in Touch Section */}
                <div className="text-center lg:text-left lg:w-1/5 mb-6 lg:mb-0 lg:pl-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4">Get in touch</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">hello@example.com</a></li>
                        <li><a href="#" className="hover:underline">+1 (123) 456 7890</a></li>
                        <li><a href="#" className="hover:underline">123 Street, New York, NY 10001</a></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="text-center lg:text-left lg:w-1/5 mb-6 lg:mb-0 lg:pl-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4">Follow us</h3>
                    <ul>
                        <li className="mb-4">
                            <a href="#" className="flex items-center justify-center lg:justify-start">
                                <FaTwitter className="text-xl mr-2" /> 
                                <span className="text-sm">Twitter</span>
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="flex items-center justify-center lg:justify-start">
                                <FaFacebookF className="text-xl mr-2" /> 
                                <span className="text-sm">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center lg:justify-start">
                                <FaGooglePlusG className="text-xl mr-2" /> 
                                <span className="text-sm">Google</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-8">
                <hr className="border border-gray-600 mb-4" />
                <div  className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
                    <div   className="flex gap-4 mb-4 lg:mb-0">
                        <p className="text-sm cursor-pointer hover:underline">Terms of service</p>
                        <p className="text-sm cursor-pointer hover:underline">Privacy Policy</p>
                    </div>
                    <p  className="text-sm">© Copyright 2024 direct All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
