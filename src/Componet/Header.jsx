import React, { useState, useEffect } from 'react'
import app_logo from '../assets/app_logo.png';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.png'
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div data-aos="fade" className='flex items-center justify-between text-sm py-4 mb-4'>
            <img className='w-28' src={app_logo} alt="logo image" />

            <ul className='hidden md:flex items-center gap-20 text-2xl font-medium'>
                <li>About</li>
                <li>Services</li>
                <li>FAQ's</li>
            </ul>
            <button className='bg-primary text-white p-4 rounded-md flex justify-between w-32'> <MdArrowOutward className="text-white text-lg" /> Get in Touch</button>


            <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={menu_icon} alt="" />
            {/* ######## Mobile View ######### */}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-28' src={app_logo} alt="logo image" />
                    <img className='w-7' onClick={() => setShowMenu(false)} src={cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <li>About</li>
                    <li>Services</li>
                    <li>FAQ's</li>
                </ul>
                {/* <button className='bg-primary text-white p-4 rounded-md flex justify-between w-32 md:w-full'> <MdArrowOutward className="text-white text-lg" /> Get in Touch</button> */}
            </div>
        </div>
    )
}

export default Header
