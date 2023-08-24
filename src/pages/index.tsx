
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <section
        style={{
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0.47) 100%), url("/img/truck-flipped.jpg"), lightgray -209px -77.204px / 110.885% 135.324% no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-cover py-[175px] text-white"
      >
        <h1 className="font-bold text-[64px] leading-normal">
          Your Trusted Redi-Mix Concrete <br />
          And Aggregate Supplier
        </h1>
        <h2 className="font-body font-normal">
          <em className="font-bold">Excellence for Generations.</em> Building Washington County With <br/>
          Superior Concrete And Unparalleled Service
        </h2>
        <div className="flex gap-5">
          <button className="bg-scarlet text-white border-transparent border-2 px-[70px] py-5 rounded-full">
            Contact Us
          </button>
          <button className="bg-transparent text-white border-white border-2 px-[70px] py-5 rounded-full">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}
