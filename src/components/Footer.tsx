import Logo from "./Logo";
import SchoodicLogo from "./SchoodicLogo";

export default function Footer() {
    return (
      

        <footer className="bg-onyx text-white">
        <div className="container mx-auto py-8 md:py-16">
          <div className="md:flex md:justify-center">
          
            <div className="md:w-1/2 md:px-4 pl-4">
              <Logo className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" /><br/>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                We Work On All Make/Model Of Trucks.<br />
                Give Us A Call When You Need Us.<br /> You'll
                Be Back On The Road In No Time.
              </p>
            </div>
  
          
            <div className="md:w-1/2 md:flex md:justify-between mt-6 md:mt-0">
             
              <div className="md:w-1/2 md:px-4 pl-4">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-4 text-left">General</h4>
                <ul className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
                  <li className="mb-4">Home</li>
                  <li className="mb-4">About</li>
                  <li className="mb-4">Products</li>
                  <li className="mb-4">Projects</li>
                </ul>
              </div>
  
         
              <div className="md:w-1/2 md:px-4 pl-4">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-4 text-left">Products</h4>
                <ul className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4">
                  <li className="mb-4">Stone</li>
                  <li className="mb-4">Gravel</li>
                  <li className="mb-4">Soil</li>
                  <li className="mb-4">Landscaping</li>
                  <li className="mb-4">Construction</li>
                </ul>
              </div>
            </div>
  
         
            <div className="mt-6 md:mt-0 md:w-1/2 md:px-4 pl-4">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-4 text-left">RECENT BLOGS</h4>
              <ul className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-0">
                <li className="mb-4">How to get easiest and cheapest quality of marble</li>
                <li className="mb-4">10 Ways to start the construction business in no time</li>
                <li className="mb-4">5 myths busters in Landscaping Service</li>
                <li className="mb-4">Top 11 ways to back out the old building</li>
              </ul>
            </div>
          </div>
        </div>
  
      
        <div id="copyright-banner" className="bg-black py-2.5">
          <p className="font-headings text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-fit m-auto flex items-center">
            Copyright &copy; 2023 Meadowbrook Materials LLC. |
            Designed by
            <a href="https://www.schoodic.io/">
              <SchoodicLogo className="inline-block h-4 ml-1 mb-1" />
            </a>
          </p>
        </div>
      </footer>

    )
}