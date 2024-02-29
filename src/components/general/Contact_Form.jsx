import React, { useState } from 'react';
import Form from './FormTemplate';

function Contact_Form() {



    return (
        <>
            <section className='mx-2 pt-16 mb-10'>
                <div className=' bg-[#F8F8F8] px-4 md:px-12 2xl:px-0 pt-5 w-full max-w-[560px] rounded-2xl sm:mx-auto' id='ContactUs'>
                    <div className='pb-8'>
                        <div className='pt-4 pb-2 text-center'>
                            <h1 className='text-[22px] md:text-[26px] lg:text-[28px] font-bold capitalize'>contact us now</h1>
                        </div>
                        <div className='text-center w-full'>
                            <p className='text-base sm:text-lg w-full max-w-[12rem] sm:max-w-[22rem] mx-auto'>
                               Reach out to us by filling the form below.
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-full sm:max-w-[450px] m-auto pb-8'>
                        <form className='w-full'>
                            <div className='w-full sm:px-5'>
                                <Form label="Name" id="name" type="text" required />
                                <Form label="Email" id="email" type="email" required />
                                <Form label="Phone Number" id="number" type="number" required />
                                <Form label="Your Message" id="message" type="textarea" required />
                                <input type="submit" value='Book Your Slot' className='-mt-2 sm:-mt-0 w-full rounded-[57px] bg-cred text-white py-4 cursor-pointer hover:bg-red-700 transition-colors' />
                            </div>
                        </form>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Contact_Form
