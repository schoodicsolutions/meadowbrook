import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { navLinks } from '../../constants';
import { logo } from '../../assets';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

function Navbar() {
    const [active, setActive] = useState('');
    const navRef = useRef(null);

    return (
        <>
            <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.3 }}>
                <div className="flex w-full bg-cred justify-around text-base font-semibold sm:text-lg 2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-fit">
                    <div className="h-0 w-0 border-white border-b-scarlet border-r-scarlet 2xl:border-[22px]"></div>
                    <div className='flex justify-center 2xl:justify-between items-center px-2 sm:px-6 2xl:pr-[210px] gap-4 sm:gap-20 py-2 w-full'>
                        <a href="https://maps.apple.com/?address=Meadowbrook+Materials,888,Main+St,East+Machias,Maine" target='_blank'>
                            <div className='text-white flex justify-center items-center gap-1 sm:gap-2 '>
                                <Icon icon="fluent:location-20-regular" className='text-xl sm:text-2xl' />
                                <h5 className='text-[16px] sm:text-[18px] font-semibold flex items-center justify-center'> <span className='hidden md:block text-[18px] source pr-1' style={{ fontWeight: "600" }}>888 Main Street, </span> East Machias, ME 04630</h5>
                            </div>
                        </a>
                        <a href="tel:(207) 259-6068">
                            <div className='text-white flex justify-center items-center gap-1 sm:gap-3 '>
                                <Icon icon="teenyicons:phone-outline" className='text-md sm:text-xl' />
                                <h5 className=' text-[16px] sm:text-[18px] font-semibold'>(207) 259-6068</h5>
                            </div>
                        </a>
                    </div>
                </div>

                {/* NavBar Starts here */}

                <nav
                    className='px-4 md:px-12 w-full flex items-center sm:py-5 py-3 z-20 bg-primary'
                >
                    <div className='w-full flex justify-between items-center max-w-[95rem] mx-auto'>
                        <Link
                            to='/'
                            className='flex items-center gap-3'
                            onClick={() => {
                                setActive('');
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img
                                src={logo}
                                alt='Logo'
                                className='w-[10rem] sm:w-[12rem] md:w-full logo h-full object-contain transition-transform select-none'
                            />
                        </Link>
                        <ul className='list-none hidden 2xl:pt-9 sm:flex flex-row gap-6 md:gap-10'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.id ? 'text-[#F10D0C] font-semibold' : 'text-black'
                                        } hover:text-[#F10D0C] text-[14px] md:text-[16px] font-noraml transition`}
                                    onClick={() => setActive(link.id)}
                                >
                                    <Link to={`${link.id}`}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className='sm:hidden flex justify-end items-center flex-col' ref={navRef}>
                            <MobileNav/>
                        </div>
                    </div>
                </nav >
            </motion.header >
        </>
    )
}

export default Navbar
