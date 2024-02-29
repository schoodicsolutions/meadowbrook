import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { navLinks } from '../../Data';
import { logo } from '../../assets';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import MobileNav from './MobileNav';
import debounce from 'lodash/debounce';

function Navbar() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const navRef = useRef(null);
    const [sticky, stickyActive] = useState(false);
    const [ariaExpanded, setAriaExpanded] = useState(false);
    const { serviceName } = useParams();

    const updateAriaExpanded = (newAriaExpanded) => {
        setAriaExpanded(newAriaExpanded);
    };

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    const isProductPage = () => {
        // Check if the current path starts with any of the top-level product routes
        return ['/concrete', '/construction', '/materials'].some(route => active.startsWith(route));
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

    const handleLinkHover = (title) => {
        setHoveredLink(title);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };

    const scrollToContactForm = (id) => {
        const contactFormSection = document.getElementById(id.substring(1));

        if (contactFormSection) {
            const yOffset = contactFormSection.getBoundingClientRect().top + window.pageYOffset - 150; // Adjust the value (e.g., subtract 50px)
            contactFormSection.style.border = "2px solid red";

            setTimeout(() => {
                contactFormSection.style.border = "2px solid transparent";
            }, 4000);

            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    };
    const isMobileScreen = window.innerWidth < 600;

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

            <div className={` redBar relative z-[35] flex w-full bg-cred justify-around text-base font-semibold sm:text-lg 2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-fit`}>
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
            <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ transition: 0.3 }} className={`${sticky ? ' backdrop-blur-md bg-white/90 border-b-2 ' : ''} sticky top-0 w-full bg-white z-[24] border border-b-[1px]`}
            >

                {/* NavBar Starts here */}

                <nav
                    className={`${sticky ? "active" : ""} px-4 md:px-12 py-4 w-full flex items-center z-20 bg-primary`}
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
                                className={`${sticky ? "active" : ""} logo h-full w-[11rem] sm:w-[13rem] object-contain transition-transform select-none`}
                            />
                        </Link>

                        <ul className={`${sticky ? "active" : ""} list-none hidden lg:flex flex-row gap-4 md:gap-6 2xl:gap-10`}>
                            {navLinks.map((link) => (
                                <>
                                    <li
                                        key={link.id}
                                        className={`relative ${(link.id === '/' && active === '/') || // Check for the home link
                                            (active.startsWith(link.id) && link.id !== '/') // Check for other links
                                            ? 'text-cred font-semibold'
                                            : 'text-black'
                                            } text-[14px] md:text-[16px] transition font-normal pb-6 -mb-8`}
                                        onMouseEnter={() => handleLinkHover(link.title)}
                                        onMouseLeave={handleLinkLeave}
                                        onClick={() => {
                                            setActive(link.id);
                                            scrollToContactForm(link.id);
                                        }}
                                    >
                                        <Link to={`${link.id}`}
                                            className='flex items-center justify-center gap-[2px]  hover-textred'
                                            onClick={() => {
                                                setActive(link.id);
                                                scrollToContactForm(link.id);
                                            }}
                                        >
                                            {link.title}
                                            <span className={`${hoveredLink === link.title ? "rotate-0 pt-[2px]" : "rotate-180"} transition-transform duration-150 ease-linear`}>
                                                {link.submenu && <Icon icon="mi:chevron-up" />}
                                            </span>
                                        </Link>
                                        {link.submenu && hoveredLink === link.title && (
                                            <AnimatePresence>
                                                <motion.div
                                                    key={link.id}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.3, ease: easeOut }}
                                                >
                                                    <ul className="absolute -left-4 bg-white top-full w-[230px] -mt-2 transition-all rounded-xl duration-300 opacity-100 mx-2 my-2 scale-100 transform  origin-top" style={{
                                                        boxShadow: "0px 2px 6.8px 0px rgba(0, 0, 0, 0.25)"
                                                    }}>
                                                        {link.submenu.map((subLink) => (
                                                            <li key={subLink.id} className='w-full'>
                                                                <Link
                                                                    to={subLink.id}
                                                                    className={`${active.includes(subLink.id) ? 'text-cred font-semibold' : 'text-black '} block w-auto px-4 py-3 my-2 mx-2 hover:bg-[#F9F9F9] text-sm rounded-lg md:text-[16px] font-normal transition`}
                                                                    onClick={() => {
                                                                        setActive([link.id, subLink.id]);
                                                                        handleLinkLeave();
                                                                    }}
                                                                >
                                                                    {subLink.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            </AnimatePresence>
                                        )}
                                    </li>
                                </>
                            ))}
                        </ul>

                        <div className='lg:hidden flex justify-end items-center flex-col' ref={navRef}>
                            <MobileNav stickyActive={sticky} updateAriaExpanded={updateAriaExpanded} />
                        </div>
                    </div>
                </nav >
            </motion.header >
        </>
    )
}

export default Navbar
