import dynamic from 'next/dynamic';

export default function Home() {
  const FlexText = dynamic(() => import('../components/FlexText'), {
    ssr: false,
  });

  return (
    <>
      <section
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url("/img/truck-flipped.jpg"), gray no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="hero text-white"
      >
        <FlexText />
        <div className="flex flex-col items-stretch gap-4 px-0 pt-2.5 md:flex-row md:items-center md:justify-center lg:justify-normal lg:gap-5 lg:pt-0">
          <button className="contained">Contact Us</button>
          <button className="outlined">Learn More</button>
        </div>
      </section>
      <section>
        <h3>Check Out The List Of Benefits We Offer To Our Clients</h3>
      </section>
    </>
  );
}
