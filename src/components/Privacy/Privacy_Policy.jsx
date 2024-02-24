import React from 'react'

function Privacy_Policy() {

    const OwnData = [
        {
            para: 'Welcome to Meadowbrook Materials! This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.'
        },
        {
            para: "By accessing or using Meadowbrook Materials, you agree to the terms outlined in this Privacy Policy. Please take a moment to familiarize yourself with our practices. If you do not agree with the terms, please refrain from using our website or services."
        },
        {
            head: "Information We Collect",
            list1: "*Personal* *Information*: We may collect personal information such as your name, email address, phone number, and mailing address when you register on our site, place an order, subscribe to our newsletter, or fill out a form.",
            list2: "*Usage* *Data*: We automatically collect information about how you interact with our website. This may include your IP address, browser type, operating system, referral URLs, pages viewed, and the date and time of your visit."
        },
        {
            head: "How We Use Your Information",
            list1: "*To* *Provide* *Services*: We use your personal information to fulfill orders, process payments, and provide customer support.",
            list2: "*Communications*: With your consent, we may send you promotional emails, newsletters, and other updates about Meadowbrook Materials. You can opt-out of these communications at any time.",
            list3: "*Improving* *User* *Experience*: We analyze usage data to enhance and personalize your experience on our website, improve our products and services, and optimize our marketing efforts."
        },
        {
            head: "Information Sharing",
            para: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as outlined in this Privacy Policy. We may share your information with trusted third parties who assist us in operating our website, conducting business, or servicing you."
        },
        {
            head: "Security",
            para: "We prioritize the security of your personal information and employ reasonable measures to protect it. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we continuously strive to protect your information."
        },
        {
            head: "Cookies",
            para: 'We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.',
        },
        {
            head: "Changes to Privacy Policy",
            para: "Meadowbrook Materials reserves the right to update and modify this Privacy Policy. Any changes will be posted on this page with the last updated date. Please review this Privacy Policy periodically to stay informed about how we are protecting and using your information."
        }
    ]

    return (
        <>
            <section className='w-full'>
                <div className='px-4 md:px-6 2xl:px-12 py-8 sm:py-8 md:my-10 w-full max-w-[75rem] mx-auto rounded-lg bg-[#fcfcfc]'>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='text-4xl font-bold'>Privacy Policy</h1>
                        <span className='font-semibold text-sm'>Last updated February 24, 2024</span>
                    </div>
                    <div className=' py-3 md:py-6'>
                        {OwnData.map((dataList, index) => (
                            <div key={index} className='py-2 md:py-4'>
                                {dataList.head && <h1 className='font-bold text-2xl pb-2'>{dataList.head}</h1>}
                                {dataList.para && <p className='text-base md:text-lg w-full'>{dataList.para}</p>}
                                {dataList.list1 && (
                                    <ul className='pt-4 md:pt-6 ml-8 list-disc flex flex-col gap-y-4'>
                                        <li dangerouslySetInnerHTML={{ __html: dataList.list1.replace(/\*(\w+)\*/g, '<span style="font-weight: 700">$1</span>') }} />
                                        {dataList.list2 && (
                                            <li dangerouslySetInnerHTML={{ __html: dataList.list2.replace(/\*(\w+)\*/g, '<span style="font-weight: 700">$1</span>') }} />
                                        )}
                                        {dataList.list3 && (
                                            <li dangerouslySetInnerHTML={{ __html: dataList.list3.replace(/\*(\w+)\*/g, '<span style="font-weight: 700">$1</span>') }} />
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Privacy_Policy
