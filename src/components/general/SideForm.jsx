
function SideForm() {
    return (
        <>
            <div className='hidden 2xl:block sticky top-28 bg-[#F8F8F8] px-4 md:px-12 2xl:px-0 pt-5 mb-10 w-full max-w-[400px] rounded-2xl sm:ml-auto overflow-hidden' id='ContactUs'>
                <div className='pb-4'>
                    <div className='text-center'>
                        <h1 className='text-[18px] lg:text-[22px] font-bold capitalize'>Book a Call Now !</h1>
                    </div>
                </div>
                <div className='w-full max-w-full sm:max-w-full m-auto'>
                <div style={{position: 'relative', overflow: 'hidden'}} className="h-[860px] sm:h-[840px]">
                    <iframe
      id="JotFormIFrame-241405445661150"
      title="General Inquiry Contact Form"
      src="https://form.jotform.com/241405445661150"
      scrolling="no"
      onLoad="window.parent.scrollTo(0,0)"
      style={{minWidth: '100%', maxWidth: '100%', height: '1000px', border: 'none', outline: 'none', top: '-60px', position: 'absolute', overflow: 'hidden'}}></iframe>
    
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideForm
