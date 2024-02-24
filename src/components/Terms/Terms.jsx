import { data } from 'jquery'
import React from 'react'

function Terms() {

    const Data = [
        {
            para: "Welcome to Meadowbrook!",
        },
        {
            para: "These terms and conditions outline the rules and regulations for the use of Meadowbrook's Website."
        },
        {
            para: "By accessing this website we assume you accept these terms and conditions. Do not continue to use Meadowbrook if you do not agree to take all of the terms and conditions stated on this page."
        },
        {
            para: 'The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Clients needs in respect of provision of the Company stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.'
        },
        {
            head: 'Cookies',
            para: "We employ the use of cookies. By accessing Meadowbrook, you agreed to use cookies in agreement with the Meadowbrook's Privacy Policy."
        },
        {
            para: "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
        },
        {
            head: "License",
            para: "Unless otherwise stated, Meadowbrook and/or its licensors own the intellectual property rights for all material on Meadowbrook. All intellectual property rights are reserved. You may access this from Meadowbrook for your own personal use subjected to restrictions set in these terms and conditions."
        },
        {
            para: "You must not:",
            list1: "Republish material from Meadowbrook",
            list2: "Sell, rent or sub-license material from Meadowbrook",
            list3: "Reproduce, duplicate or copy material from Meadowbrook",
            list4: "Redistribute content from Meadowbrook"
        },
        {
            para: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Meadowbrook does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Meadowbrook,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Meadowbrook shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.",
        },
        {
            para: "Meadowbrook reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions."
        },
        {
            para: "You warrant and represent that:",
            list1: "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
            list2: "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
            list3: "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
            list4: "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity."
        },
        {
            head: "Reservation of Rights",
            para: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions."
        },
        {
            para: "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."
        }
    ]

    return (
        <section className='w-full'>
            <div className='px-4 md:px-6 2xl:px-12 py-8 sm:py-8 md:my-10 w-full max-w-[75rem] mx-auto rounded-lg bg-[#fcfcfc]'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-4xl font-bold'>Terms and Conditions</h1>
                    <span className='font-semibold text-sm'>Last updated February 24, 2024</span>
                </div>
                <div className=' py-3 md:py-6'>
                    {Data.map((dataList, index) => (
                        <div key={index} className='py-2 md:py-4'>
                            {dataList.head && <h1 className='font-bold text-2xl pb-2'>{dataList.head}</h1>}
                            <p className='text-base md:text-lg w-full'>{dataList.para}</p>
                            {dataList.list1 && (
                                <ul className='pt-4 md:pt-6 ml-8 list-disc flex flex-col gap-y-4'>
                                    <li>{dataList.list1}</li>
                                    <li>{dataList.list2}</li>
                                    <li>{dataList.list3}</li>
                                    <li>{dataList.list4}</li>
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Terms
