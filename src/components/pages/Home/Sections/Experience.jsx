import React from 'react'
import Counter from './Counter'
import CounterImage from '../../../../assets/counter-sec-image.png'

function Experience() {
    return (
        <section style={{
            backgroundImage: `url(${CounterImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <div className='px-4 md:px-12 2xl:px-0 my-16 w-full max-w-[95rem] mx-auto pt-0 md:pt-5 text-white'>
                <div className='pt-10 pb-8'>
                    <div className='relative mb-2'>
                        <h1 className='text-[26px] md:text-[28px] lg:text-[42px] text-center font-bold'>Our Experience at a Glance</h1>
                    </div>
                    <div className='text-center w-full'>
                        <p className='text-sm sm:text-base w-full max-w-xl m-auto'>
                            Experience the Unmatched Power of Tailored Redi-Mix Deliveries, Backed by Decades of Expertise and Cutting-Edge Technology.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap sm:flex-nowrap gap-5 md:gap-20 lg:gap-44 items-center pb-20'>
                    <div className="" >
                        <Counter number={200} title="Projects Completed" />
                    </div>
                    <div>
                        <Counter number={40} title="Clients Served" className="before:absolute" />
                    </div>
                    <div>
                        <Counter number={10000} title="Hours Worked" className="before:absolute" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
