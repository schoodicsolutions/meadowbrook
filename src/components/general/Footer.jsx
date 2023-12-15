import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../../assets/LogoWhite.svg'
import { Icon } from '@iconify/react';
import { Blogs, ProductLinks, navLinks } from '../../Data';

function Footer() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    useEffect(() => {
        // Update the active state when the URL changes
        setActive(location.pathname);
    }, [location.pathname]);

    // Function to check if the current route is a "Products" page or under "Products"
    const isProductPage = () => {
        console.log(active)
        return active.startsWith('/products');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <>
            <section className='bg-[#13171B] text-white'>
                <div className='px-4 md:px-6 2xl:px-0 py-8 sm:py-10 w-full max-w-[95rem] mx-auto'>
                    <div className='py-8 sm:flex lg:flex-nowrap flex-wrap lg:justify-around justify-start gap-x-24 gap-y-12 lg:gap-0 items-start'>
                        {/* First Col */}
                        <div className='sm:pb-0 pb-8'>
                            <div>
                                <Link to='/'>
                                    <img src={logoWhite} alt="MeadowBrook Logo" className='w-full max-w-[250px] sm:w-auto sm:max-w-auto' />
                                </Link>
                            </div>
                            <div className='px-4 py-4 sm:py-6'>
                                <p className='text-base w-full max-w-xs'>
                                    We work on all make/model of trucks. Give us a call when you need us. You'll be back on the road in no time.
                                </p>
                            </div>
                            <div className='flex justify-start items-center px-4 gap-4'>
                                <span><Icon icon="ic:baseline-facebook" className='text-[20px] cursor-pointer hover-textred transition' /></span>
                                <span><Icon icon="entypo-social:linkedin-with-circle" className='text-[20px] cursor-pointer hover-textred transition' /></span>
                                <span><Icon icon="mdi:github" className='text-[20px] cursor-pointer hover-textred transition' /></span>
                            </div>
                        </div>

                        {/* Second Col */}
                        <div className='lg:px-0 px-4 sm:pb-0 pb-8'>
                            <div>
                                <h1 className='text-[20px] sm:text-[22px] font-semibold'>General</h1>
                            </div>
                            <ul className='list-none flex flex-col pt-4 sm:pt-6 gap-5 sm:gap-6'>
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${active === link.id || link.id === '/products' && isProductPage()
                                            ? 'text-cred font-semibold'
                                            : 'text-white'} hover-textred w-fit text-sm font-noraml transition`
                                        }
                                    >
                                        <Link to={`${link.id}`}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Third Col */}
                        <div className='px-4 lg:px-0 sm:pb-0 pb-8'>
                            <div>
                                <h1 className='text-[20px] sm:text-[22px] font-semibold'>Services</h1>
                            </div>
                            <ul className='list-none flex flex-col pt-4 sm:pt-6 gap-5 sm:gap-6'>
                                {ProductLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${(active === link.id || (active.startsWith(`/products/${link.id}`) && isProductPage()))
                                            ? 'text-cred font-semibold'
                                            : 'text-white'} hover-textred w-fit text-sm font-noraml transition`
                                        }
                                    >
                                        <Link to={`/products/${link.id}`}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Third Col */}
                        <div className='px-4 lg:px-0 sm:pb-0 pb-8'>
                            <div>
                                <h1 className='text-[20px] sm:text-[22px] font-semibold'>Products</h1>
                            </div>
                            <ul className='list-none flex flex-col pt-4 sm:pt-6 gap-5 sm:gap-6'>
                                {ProductLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${(active === link.id || (active.startsWith(`/products/${link.id}`) && isProductPage()))
                                            ? 'text-cred font-semibold'
                                            : 'text-white'} hover-textred w-fit text-sm font-noraml transition`
                                        }
                                    >
                                        <Link to={`/products/${link.id}`}>{link.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='bg-black'>
                    <p className='text-sm sm:text-base py-2 text-center w-full'>Copyright © 2023 Meadow Brook | <Link to='/' className='hover-textred'>Privacy Policy</Link> | <Link to='/' className='hover-textred'>Terms and Conditions</Link> </p>
                </div>
            </section >

        </>
    )
}

export default Footer
