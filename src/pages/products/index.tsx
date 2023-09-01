export default function Products() {
  return (
    <>
      <div className="flex h-[435px] items-center justify-center bg-orange-500">
        <h1 className="text-white">Landscaping Service</h1>
      </div>
      <div className="flex flex-col justify-evenly px-40 py-10 xl:flex-row">
        <div className="flex flex-col">
          <h2 className="py-1 pb-5">The Landscaping Service Includes</h2>
          {/* divs are placeholders for images here as well */}
          <div className="flex max-w-7xl flex-wrap gap-6">
            <a className="flex h-[297px] w-[482px] flex-col justify-end bg-green-800 p-8 text-white">
              <p>LANDSCAPING SERVICE</p>
              <h3>Stump Grinding</h3>
            </a>
            <a className="flex h-[297px] w-[482px] flex-col justify-end bg-blue-800 p-8 text-white">
              <p>LANDSCAPING SERVICE</p>
              <h3>Tree Removal</h3>
            </a>
            <a className="flex h-[297px] w-[482px] flex-col justify-end bg-purple-800 p-8 text-white">
              <p>LANDSCAPING SERVICE</p>
              <h3>Land / Lot Clearing</h3>
            </a>
            <a className="flex h-[297px] w-[482px] flex-col justify-end bg-red-800 p-8 text-white">
              <p>LANDSCAPING SERVICE</p>
              <h3>Retaining Walls</h3>
            </a>
          </div>
        </div>
        <div className="mt-28 flex h-[539px] w-[449px] flex-shrink-0 flex-col items-center justify-center gap-4 rounded border-solid border-[#E9E9E9] bg-[#F8F8F8]">
          <h3>Book a Call Now !</h3>

          {/* 
            width: 383px;
            height: 57px;
            flex-shrink: 0; 
          */}

          <input
            placeholder="Full Name"
            className="h-[57px] w-[383px] flex-shrink-0 px-4 text-sm font-normal text-black"
          />
          <input
            placeholder="Phone Number *"
            className="h-[57px] w-[383px] flex-shrink-0 px-4 text-sm font-normal text-black"
          />
          <input
            placeholder="Email Address *"
            className="h-[57px] w-[383px] flex-shrink-0 px-4 text-sm font-normal text-black"
          />
          <input
            placeholder="Message"
            className="flex h-[123px] w-[383px] flex-shrink-0 items-start justify-start px-4 text-sm font-normal text-black"
          />
          <button className="flex h-[48px] items-center justify-center rounded-full bg-[#F10D0C] text-lg font-bold text-white">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
