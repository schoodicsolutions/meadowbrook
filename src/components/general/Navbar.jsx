import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { navLinks } from '../../Data';
import { logo } from '../../assets';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

function Navbar() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const navRef = useRef(null);
    const [sticky, stickyActive] = useState(false);
    const [ariaExpanded, setAriaExpanded] = useState(false);

    const updateAriaExpanded = (newAriaExpanded) => {
        setAriaExpanded(newAriaExpanded);
    };

    useEffect(() => {

        setActive(location.pathname);

    }, [location.pathname]);

    const isProductPage = () => {

        return active.startsWith('/products');

    };

    const CloseNav = () => {
        setAriaExpanded(false);
    }

    useEffect(() => {

        const handleScroll = () => {
            if (window.innerWidth < 600 && window.scrollY > 200) {
                stickyActive(true);
            } else if (window.innerWidth >= 600 && window.scrollY > 50) {
                stickyActive(true);
            } else {
                stickyActive(false);
            };
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [hoveredLink, setHoveredLink] = useState(null);

    const handleLinkHover = (id) => {
        setHoveredLink(id);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };

    return (
        <>
            {ariaExpanded === true ?
                <>
                    <div className="backdrop-blur-[1px] fixed inset-0 z-[22] h-screen w-full flex items-center justify-center bg-black bg-opacity-60" onClick={CloseNav}>
                    </div>
                </>
                :
                <>

                </>
            }

            <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.3 }} className={`${sticky ? 'sticky top-0 backdrop-blur-md bg-white/90 border-b-2 ' : ''} w-full relative bg-white z-[24]`}
            >
                <div className={`${sticky ? "hidden" : "block"} flex w-full bg-cred justify-around text-base font-semibold sm:text-lg 2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-fit`}>
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
                    className={`${sticky ? "sm:py-3" : "sm:py-5"} px-4 md:px-12 w-full flex items-center py-3 z-20 bg-primary`}
                >
                    <div className='w-full flex justify-between items-center max-w-[95rem] mx-auto'>
                        <Link
                            to='/'
                            className='flex items-center gap-3'
                            onClick={() => {
                                setActive('/');
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img
                                src={logo}
                                alt='Logo'
                                className={`${sticky ? " w-[12rem] md:w-[80%]" : "md:w-full w-[10rem]"} sm:w-[12rem] logo h-full object-contain transition-transform select-none`}
                            />
                        </Link>
                        <ul className={`${sticky ? "2xl:pt-0" : "2xl:pt-9"} list-none hidden sm:flex flex-row gap-6 md:gap-10`}>
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`relative ${active === link.id ? 'text-cred font-semibold' : 'text-black'
                                        } hover-textred text-[14px] md:text-[16px] transition font-normal w-fit pb-6 -mb-8`}
                                    onMouseEnter={() => handleLinkHover(link.id)}
                                    onMouseLeave={handleLinkLeave}
                                    onClick={() => setActive(link.id)}
                                >
                                    <Link to={`${link.id}`}
                                        data-submenu={link.submenu ? true : false}
                                    >
                                        {link.title} {link.submenu && "\u25BE"}
                                    </Link>
                                    {link.submenu && hoveredLink === link.id && (
                                        <ul className="absolute -left-2 bg-white border shadow-md w-48 top-full -mt-2 transition-all duration-300 opacity-100 scale-100 transform origin-top">
                                            {link.submenu.map((subLink) => (
                                                <li key={subLink.id} className='w-full'>
                                                    <Link
                                                        to={subLink.id}
                                                        data-submenu="sublink"
                                                        className={`${active === subLink.id ? 'text-cred' : 'text-black hover-textred text-[14px] md:text-[16px] font-normal transition'} block w-full px-2 py-2 border-0 border-b-2 border-b-[#f0f0f0]`}
                                                    >
                                                        {subLink.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className='sm:hidden flex justify-end items-center flex-col' ref={navRef}>
                            <MobileNav stickyActive={sticky} updateAriaExpanded={updateAriaExpanded} />
                        </div>
                    </div>
                </nav >
            </motion.header >
        </>
    )
}

export default Navbar
