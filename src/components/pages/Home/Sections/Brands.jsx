import React from 'react'
import { C_images } from '../../../../constants/home'

function Brands() {


    return (
        <>
            <section>
                <div className='px-4 md:px-12 2xl:px-0 pt-5 my-10 w-full max-w-[95rem] mx-auto'>
                    <div className='pb-2 text-center'>
                        <h1 className='text-[22px] md:text-[26px] lg:text-[28px] font-bold'>Brands we have worked with</h1>
                    </div>
                    <div className='text-center'>
                        <p className='text-sm sm:text-lg'>
                            "Trusted by Top Brands with Our Impressive Portfolio of Collaborations"
                        </p>
                    </div>

                    <div className='flex flex-wrap lg:flex-nowrap justify-center items-center pt-10 gap-10 lg:gap-16'>
                        {C_images.map((logos) => (
                            <div key={logos.id}>
                                <img src={logos.images} alt="" className='grayscale w-full max-w-[100px] md:max-w-[150px]' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands
