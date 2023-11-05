import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { navLinks } from '../../Data';

function MobileNav({ stickyActive, updateAriaExpanded }) {
    const [ariaExpanded, setAriaExpanded] = useState(false);
    const [isHamburgerToggled, setHamburgerToggled] = useState(false);

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
    };

    useEffect(() => {
        if (ariaExpanded === true) {
            document.documentElement.classList.add('disable-scroll');
        } else {
            document.documentElement.classList.remove('disable-scroll');
        }
    });

    return (
        <>

            {ariaExpanded === true
                ? <> <div className='fixed inset-0 z-[9] h-screen w-full flex items-center justify-center' onClick={() => {
                    closeNavigation();
                    updateAriaExpanded(false);
                }}></div> </>
                :
                ""
            }

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
                }}
                aria-expanded={ariaExpanded}
                toggled={isHamburgerToggled}
            />

            <div
                className={`${ariaExpanded
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
                    } p-6 navBar z-10 backdrop-blur-md bg-white rounded-md absolute ${stickyActive ? "top-[88px]" : "top-[7.5rem]"} left-0 right-0 mx-auto my-2 w-[98%] transition-all`}
            >

                <ul className='list-none flex justify-end items-center flex-col gap-6'>

                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.id || link.id === '/products' && isProductPage() ? 'text-cred font-semibold' : 'text-black'
                                } hover-textred text-[14px] md:text-[16px] font-noraml transition`}
                            onClick={() => {
                                setActive(link.id);
                                closeNavigation();
                                updateAriaExpanded(false);
                            }}
                        >
                            <Link to={`${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default MobileNav
