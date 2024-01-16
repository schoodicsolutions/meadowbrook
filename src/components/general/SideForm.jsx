import React from 'react'
import SideFormTemplate from './SideFormTemplate'

function SideForm() {
    return (
        <>
            <div className='hidden 2xl:block sticky top-28 bg-[#F8F8F8] px-4 md:px-12 2xl:px-0 pt-5 mb-10 w-full max-w-[400px] rounded-2xl sm:ml-auto' id='ContactUs'>
                <div className='pb-4'>
                    <div className='text-center'>
                        <h1 className='text-[18px] lg:text-[22px] font-bold capitalize'>Book a Call Now !</h1>
                    </div>
                </div>
                <div className='w-full max-w-full sm:max-w-full m-auto pb-8'>
                    <form className='w-full'>
                        <div className='w-full sm:px-5'>
                            <SideFormTemplate label="Full Name" id="name" type="text" required />
                            <SideFormTemplate label="Phone Number" id="number" type="number" required />
                            <SideFormTemplate label="Email Address" id="email" type="email" required />
                            <SideFormTemplate label="Message" id="message" type="textarea" required />
                            <input type="submit" value='SUBMIT' className='-mt-2 sm:-mt-0 w-full rounded-[57px] bg-cred text-white py-[14px] cursor-pointer hover:bg-red-700 transition-colors' />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SideForm
