import React from 'react'
import Hero from './Sections/Hero'

const jobs = [
    {
        title: 'Heavy Equipment/Truck Mechanic',
        description: 'Meadowbrook Materials is searching for a heavy equipment/truck mechanic.',
        duties: [
            'Diagnosis and repair of heavy equipment and trucks on site and in the field.',
        ],
        requirements: [
            'Your own set of tools',
            'A good work ethic',
            'Being on time',
        ],
        about: 'If you have what it takes to work in the fast-paced business of redi-mix concrete, forestry, and earthwork, apply today!',
    },
    {
        title: 'Concrete Pump Operator',
        description: 'Meadowbrook Materials is searching for a Concrete Pump Operator to operate our redi-mix pump.',
        duties: [
            'Operation of the pump and other jobs deemed necessary to accomplish our daily schedule.',
        ],
        requirements: [
            'Class B license',
            'Clean driving record',
            'A good work ethic',
        ],
        about: 'Experience is preferred, but we are willing to put the time into the right individual to assure you are the proper fit for our company. If you have what it takes to work in the fast-paced business of redi-mix concrete, apply today!',
    },
]

function Careers() {
    return (
        <>
            <Hero />
            <div className='text-center mt-16 md:mt-24 mb-10 text-[#040508] px-4'>
                <h1 className='text-3xl md:text-4xl'>Current Openings</h1>
                <p className='text-[#858585] text-base sm:text-lg w-full max-w-[850px] m-auto pt-2'>
                    We're hiring! Join our team and help us keep things moving.
                </p>
            </div>
            <div className='px-4 md:px-12 max-w-[1000px] mx-auto mb-24 flex flex-col gap-8'>
                {jobs.map((job) => (
                    <div key={job.title} className='border border-gray-200 rounded-2xl p-8 shadow-sm text-[#040508]'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-2'>{job.title}</h2>
                        <p className='text-[#858585] mb-6'>{job.description}</p>

                        <div className='mb-4'>
                            <h3 className='font-semibold text-lg mb-2'>Job Duties</h3>
                            <ul className='list-disc list-inside text-[#444] space-y-1'>
                                {job.duties.map((d) => <li key={d}>{d}</li>)}
                            </ul>
                        </div>

                        <div className='mb-4'>
                            <h3 className='font-semibold text-lg mb-2'>Requirements</h3>
                            <ul className='list-disc list-inside text-[#444] space-y-1'>
                                {job.requirements.map((r) => <li key={r}>{r}</li>)}
                            </ul>
                        </div>

                        <p className='text-[#444] mb-6'>{job.about}</p>

                        <div className='bg-gray-50 rounded-xl p-4 text-sm text-[#555]'>
                            <p className='font-semibold mb-1'>Contact Us</p>
                            <p>888 Main Street, East Machias, ME 04630</p>
                            <p>
                                <a href='tel:2072596068' className='text-blue-600 hover:underline'>207-259-6068</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Careers
