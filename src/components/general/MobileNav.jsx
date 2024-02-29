import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { navLinks } from '../../Data'
import { motion, AnimatePresence, easeInOut, easeOut } from 'framer-motion';;

function MobileNav({ stickyActive, updateAriaExpanded }) {
    const [ariaExpanded, setAriaExpanded] = useState(false);
    const [isHamburgerToggled, setHamburgerToggled] = useState(false);
    const [linkClicked, setLinkClicked] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    const isProductPage = () => {
        return active.startsWith('/products');
    };

    const closeNavigation = () => {
        setAriaExpanded(false);
        setHamburgerToggled(false);
        setLinkClicked(false);
        setHoveredLink(null);
        updateAriaExpanded(false);
    };

    useEffect(() => {
        if (ariaExpanded === true) {
            document.documentElement.classList.add('disable-scroll');
        } else {
            document.documentElement.classList.remove('disable-scroll');
        }
    }, [ariaExpanded]);


    const handleLinkHover = (title) => {
        setHoveredLink(title);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };

    const HandleSubMenu = (title) => {
        if (hoveredLink === title) {
            setHoveredLink(null);
        } else {
            setHoveredLink(title);
        }
    }

    const handleLinkClick = (link) => {
        setActive(link.id);
        handleLinkHover(link.title);
        setLinkClicked(true);

        if (link.id === "/#") {
            updateAriaExpanded(true);
        } else if (link.submenu) {
            updateAriaExpanded(false);
            closeNavigation();
        } else {
            updateAriaExpanded(false);
            closeNavigation();
        }
    };

    const filteredNavLinks = navLinks.filter(link => link.title !== 'Contact Us');

    return (
        <>
            {ariaExpanded === true ? (
                <>
                    <div
                        className='fixed inset-0 z-[9] h-screen w-full flex items-center justify-center'
                        onClick={() => {
                            closeNavigation();
                            updateAriaExpanded(false);
                        }}
                    ></div>
                </>
            ) : (
                ''
            )}

            <Hamburger
                rounded
                distance='sm'
                size={26}
                easing='ease'
                duration={0.3}
                onToggle={(toggled) => {
                    setAriaExpanded(toggled);
                    setHamburgerToggled(toggled);
                    updateAriaExpanded(toggled);
                    setLinkClicked(false);
                }}
                aria-expanded={ariaExpanded}
                toggled={isHamburgerToggled}
            />

            <div
                className={`${ariaExpanded
                    ? '-right-[1px] opacity-100'
                    : '-right-[100%] opacity-0'
                    } py-6 navBar z-10 backdrop-blur-md bg-white absolute ${stickyActive ? 'top-[5.8rem] sm:top-[6.4rem]' : 'top-[5.8rem] sm:top-[6.5rem]'
                    } mx-auto w-[101%] transition-right duration-300 ease-in-out`}
            >
                <ul className='list-none flex justify-end items-start flex-col gap-6 py-4'>
                    {filteredNavLinks.map((link) => (
                        <li
                            key={link.id}
                            onMouseLeave={handleLinkLeave}
                            className='w-full'
                        >
                            <Link
                                to={`${link.id}`}
                                className={`${(link.id.endsWith('#')) ? 'text-black font-normal' :
                                    (active === link.id) ||
                                        (link.id === '/products' && isProductPage()) ? 'text-cred font-semibold' :
                                        'text-black'
                                    } hover-textred text-[16px] font-normal transition px-6`}
                                onClick={() => {
                                    handleLinkClick(link);
                                    HandleSubMenu(link.title); // Pass the link.id to HandleSubMenu
                                }}
                            >
                                {link.title} {link.submenu && '\u25BE'}
                            </Link>
                            {link.submenu && hoveredLink === link.title && (
                                <motion.div
                                    key={link.id}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: easeOut }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <ul className='w-full top-full'>
                                        {link.submenu.map((subLink) => (
                                            <li
                                                key={subLink.id}
                                                className='w-full border-0 border-b-2 border-b-[#f0f0f0]'

                                            >
                                                <Link
                                                    to={subLink.id}
                                                    data-submenu='sublink'
                                                    className={`${active === subLink.id
                                                        ? 'text-cred'
                                                        : 'text-black hover-textred text-[16px] font-normal transition'
                                                        } block w-full ml-2 py-2 pt-3 px-8`}
                                                    onClick={() => {
                                                        closeNavigation();
                                                    }}
                                                >
                                                    {subLink.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MobileNav;
