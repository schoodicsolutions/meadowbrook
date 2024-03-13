import React from 'react'
import Erik from "../../../../assets/About/erik-profile.jpg"
function Info() {
    return (
        <>
            <section className='w-full h-full'>
                <div className='px-4 md:px-12 2xl:px-0 my-12 w-full max-w-[80rem] mx-auto pt-0 md:pt-5 text-white'>
                    <div className='flex flex-wrap lg:flex-nowrap justify-start lg:justify-center items-center gap-x-3'>
                        <div>
                            <div className='mb-6'>
                                <h1 className='text-cred font-extrabold text-4xl lg:text-[44px]'>Erik Guptill</h1>
                                <p className='text-[#13171B] font-bold text-base sm:text-lg pt-2'>CEO of Meadowbrook Materials LLC</p>
                            </div>
                            <div className='text-[#13171B]'>
                                <p className='font-normal text-base sm:text-lg mb-4'>
                                    A Washington County native, Erik Guptill, earned his degree in Environmental Science through Unity Environmental University in Maine. He opened his first business, Twin Lakes Forest, in 2012 which is based in Wesley, Maine. Prior to Erik opening this business, he purchased a Mack truck which he used for hauling wood for his father, Lyle “Chi” Guptill. This prompted Erik to open Twin Lakes Forest.
                                </p>
                                <p className='font-normal text-base sm:text-lg mb-4'>
                                    In 2017, he purchased and opened his second business, Meadowbrook Materials in East Machias,
                                    Maine. At that time, he had 2 employees and 5 concrete mixers. With the small dedicated team and a lot
                                    of hard work, he grew his business to 10 employees and 7 concrete mixers in just a few years.
                                    Additional equipment was later purchased creating additional services offered under categories of construction which include land leveling for blueberry fields, grinding services and precast with plans
                                    of expansion.
                                </p>
                                <p className='font-normal text-base sm:text-lg'>
                                    Erik, his wife, Erin, and their four children all reside in Washington County.
                                </p>
                            </div>
                        </div>
                        <div className='flex-shrink-0 lg:ml-12 lg:pt-0 pt-6 '>
                            <img src={Erik} alt="Erik Profile Picture" className='w-[300px] sm:max-w-full max-w-[300px]'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info
