"use client"

import ContactForm from "./ContactForm"

function Contact_Form_Container() {
  return (
    <>
      <section className="mx-2 pt-16 mb-10">
        <div
          className="bg-[#F8F8F8] px-4 md:px-12 2xl:px-0 pt-5 w-full max-w-[560px] rounded-2xl sm:mx-auto"
          id="ContactUs"
        >
          <div className="pb-8">
            <div className="pt-4 pb-2 text-center">
              <h1 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold capitalize">contact us now</h1>
            </div>
            <div className="text-center w-full">
              <p className="text-base sm:text-lg w-full max-w-[12rem] sm:max-w-[22rem] mx-auto">
                Reach out to us by filling the form below.
              </p>
            </div>
          </div>
          <div className="w-full max-w-full sm:max-w-[450px] m-auto pb-8">
            {/* Replace the iframe with our custom form */}
            <div className="h-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact_Form_Container;

