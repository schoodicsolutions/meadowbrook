import dynamic from 'next/dynamic';
import ExperienceStatement from '~/components/ExperienceStatement';
import ContactForm from '../components/Form1';



export default function Home() {
  const FlexText = dynamic(() => import('../components/FlexText'), {
    ssr: false,
  });

  return (
    <>
      <section
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url("/img/truck_flipped.webp"), gray no-repeat',
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
      <section>
        <h2>Our Services</h2>
        <p>We take pride in offering a wide range of construction and landscaping services that can take your projects to the next level.</p>
      </section>
      <section>
        <h2>Materials We Provide</h2>
        <p>Our offerings encompass a diverse range of locally sourced stone, gravel, and soil products, to fill every need in your projects.</p>
      </section>
      <section
        style={{
          background:
            'url("/img/east_grand_lake_autumn_sm.webp"), gray no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="py-12"
      >
        <div className="bg-black/50 p-12 max-w-[780px] m-auto rounded-lg text-white flex flex-col gap-14 items-center">
          <div>
            <h2 className="no-stripe text-center font-bold">Our Experience At A Glance</h2>
            <p className="text-center">Experience the Unmatched Power of Tailored Redi-Mix Deliveries, Backed By Decades of Expertise and Cutting-Edge Technology.</p>
          </div>
          <div className="flex gap-8 lg:gap-16 justify-center flex-col lg:flex-row">
            <ExperienceStatement value={200} caption="projects completed" />
            <ExperienceStatement value={40} caption="clients served" />
            <ExperienceStatement value={10000} caption="hours worked" />
          </div>
          <button className="contained white uppercase py-4">View More</button>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
