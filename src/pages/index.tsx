import dynamic from "next/dynamic";


export default function Home() {

  const FlexText = dynamic(() => import('../components/FlexText'), { ssr: false });
  
  return (
    <>
      <section
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0.47) 100%), url("/img/truck-flipped.jpg"), lightgray -209px -77.204px / 110.885% 135.324% no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className="hero text-white"
      >
        <FlexText />
        <div className="flex pt-2.5 px-0 items-stretch md:items-center md:justify-center lg:justify-normal lg:pt-0 gap-4 lg:gap-5 flex-col md:flex-row">
          <button className="contained">
            Contact Us
          </button>
          <button className="outlined">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
