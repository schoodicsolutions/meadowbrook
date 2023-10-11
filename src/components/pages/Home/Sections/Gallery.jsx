import React from 'react'
import { Gallery1, Gallery2 } from '../../../../constants/home'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

function Gallery() {

    return (
        <>
            <section className='overflow-hidden'>
                <div className='px-4 md:px-12 2xl:px-0 mb-10 w-full max-w-[95rem] mx-auto'>
                    <div className='pb-2 text-center'>
                        <h1 className='text-[22px] md:text-[26px] lg:text-[28px] font-bold'>Check out our work</h1>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm sm:text-base'>
                            Discover Our Proven and Transparent Process, Unravel the Magic Behind Our Unmatched Work Ethic
                        </p>
                    </div>
                </div>
                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        loop={true}
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,

                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            500: {
                                slidesPerView: 2.5,
                            },
                            639: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 4
                            },
                        }}
                        speed={30000}
                        modules={[Autoplay]}
                        className='flex gap-2 w-full mySwiper overflow-hidden'>

                        {Gallery1.map((imagess) => (
                            <SwiperSlide className='w-full overflow-hidden' key={imagess.id} >
                                <img src={imagess.img} className='h-[200px] md:h-[250px] lg:h-[300px] w-full' alt={imagess.id} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={10}
                        loop={true}
                        freeMode={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                            },
                            500: {
                                slidesPerView: 2.5,
                            },
                            639: {
                                slidesPerView: 3,
                            },
                            865: {
                                slidesPerView: 3.5
                            },
                        }}
                        speed={30000}
                        modules={[Autoplay]}
                        className='flex gap-2 pt-2 w-full mySwiper overflow-hidden'>
                        {Gallery2.map((imagess) => (
                            <SwiperSlide className='w-full overflow-hidden'>
                                <img key={imagess.id} src={imagess.img} className='h-[180px] md:h-[240px] lg:h-[280px] w-full' alt={imagess.id} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        </>
    )
}

export default Gallery
