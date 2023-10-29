import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { navLinks } from '../../constants';

function MobileNav() {
    const [ariaExpanded, setAriaExpanded] = useState(false);
    const [isHamburgerToggled, setHamburgerToggled] = useState(false);

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        // Update the active state when the URL changes
        setActive(location.pathname);
    }, [location.pathname]);

    // Function to check if the current route is a "Products" page or under "Products"
    const isProductPage = () => {
        return active.startsWith('/products');
    };

    const closeNavigation = () => {
        setAriaExpanded(false);
        setHamburgerToggled(false);
    };

    return (
        <>
            <Hamburger
                rounded
                distance='sm'
                size={26}
                easing='ease'
                duration={0.3}
                onToggle={(toggled) => {
                    setAriaExpanded(toggled);
                    setHamburgerToggled(toggled);
                }}
                aria-expanded={ariaExpanded}
                toggled={isHamburgerToggled}
            />

            <div
                className={`${ariaExpanded
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
                    } p-6 navBar z-10 backdrop-blur-md bg-white/80 rounded-md absolute top-28 left-0 right-0 mx-auto my-2 w-[95%] transition-all`}
                onClick={() => {
                    closeNavigation();
                }}

            >
                <ul className='list-none flex justify-end items-center flex-col gap-6'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.id || link.id === '/products' && isProductPage() ? 'text-[#F10D0C] font-semibold' : 'text-black'
                                } hover:text-[#F10D0C] text-[14px] md:text-[16px] font-noraml transition`}
                            onClick={() => {
                                setActive(link.id);
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
