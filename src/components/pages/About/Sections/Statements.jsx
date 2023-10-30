import React from 'react'
import { States } from '../../../../constants/About'

function Statements() {

    const style = ["flex items-center gap-x-8 md:gap-x-16 2xl:gap-x-20 flex-wrap md:flex-nowrap"]

    return (
        <>
            <section className='w-full h-full'>
                <div className='px-4 md:px-12 2xl:px-0 my-12 w-full max-w-[75rem] mx-auto pt-0 md:pt-5 text-white'>
                    <div className='w-full flex flex-col gap-y-8 sm:gap-y-14 md:gap-y-24'>
                        {States.map((state, index) => (
                            <div key={state.id} className={(index === 0 ? `${style} flex-row` : '') + ' ' + (index === 1 ? `${style} md:flex-row lg:flex-row-reverse` : '')}>
                                <div className='text-black text-center sm:text-left w-full max-w-[480px] pb-6 lg:pb-0'>
                                    <p className='text-black uppercase text-sm tracking-[0.3em] font-black'>{state.title}</p>
                                    <h1 className='font-black text-[30px] md:text-[36px] 2xl:text-[48px] leading-snug py-2 lg:py-3'>
                                        {state.head.split(' ').map((word, wordIndex) => (
                                            <span key={wordIndex} className={(index === 0 && (wordIndex === 1 || wordIndex === 3)) || (index === 1 && (wordIndex === 1)) ? 'text-cred' : ''}>
                                                {word}
                                                {' '}
                                            </span>
                                        ))}
                                    </h1>
                                    <p className='text-base sm:text-lg'>{state.detail}</p>
                                </div>
                                <div className='w-full sm:w-9/12 md:w-full 2xl:w-11/12 pointer-events-none select-none'>
                                    <img src={state.img} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statements
