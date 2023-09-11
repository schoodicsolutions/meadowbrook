import dynamic from 'next/dynamic';
import ContactForm2 from '../../components/Form2';

export default function Contact() {
  const ProductFlex = dynamic(() => import('../../components/FlexText'), {
    ssr: false,
  });
  return (
    <>
      <section
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url("../../../public/img/aa.webp"), gray no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="hero text-white"
      >
        {/* <ProductFlex /> */}
        <div className="flex flex-col items-stretch gap-4 px-0 pt-2.5 md:flex-row md:items-center md:justify-center lg:justify-normal lg:gap-5 lg:pt-0">

        </div>
      </section>

      <section>

        <div className="container mx-auto p-4">

          <div className="flex">

            <div className="w-2/3 pr-4">
          


           

              <div className="container mx-auto p-4">
                <div className="w-full">
                  {/* Content for the single column (100%) */}
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 style={{ fontSize: '24px' }}>Stump Grinding Overview</h3>
                    <p>At meadowbrook,  we're dedicated to enhancing your outdoor space, and our specialized stump grinding services are designed to revitalize your landscape and make way for new possibilities. With our meticulous approach and state-of-the-art equipment, we eliminate unsightly stumps, ensuring your property is not only safe but exudes an air of pristine elegance.</p>
                    <br />
                    <p>Why Choose Our Stump Grinding Services?</p>
                    <br />
                    <h4 style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-12px', top: '10px', width: '6px', height: '6px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>
                      Precision Removal:
                    </h4>
                    <p>Our expert technicians employ advanced stump grinding techniques to meticulously remove stumps of any size, leaving your landscape smooth and ready for its next transformation.</p>

                    <br />
                    <h4 style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-12px', top: '10px', width: '6px', height: '6px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>
                      Enhanced Aesthetics:
                    </h4>
                    <p>Say goodbye to awkwardly protruding stumps that detract from the beauty of your yard. Our stump grinding service seamlessly eradicates these eyesores, instantly refreshing the visual appeal of your outdoor space.</p>


                    <h4 style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-12px', top: '10px', width: '6px', height: '6px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>
                      Safety First:
                    </h4>
                    <p>Stumps can pose tripping hazards and attract pests. Our thorough removal process ensures that your property becomes a safer haven for you, your family, and your guests.</p>
                    <br />
                    <h4 style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-12px', top: '10px', width: '6px', height: '6px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>
                      Eco-Friendly Approach:
                    </h4>
                    <p>We care for the environment as much as you do. By choosing us, you're opting for a sustainable solution that allows you to repurpose the mulch generated during the grinding process to enrich your soil.</p>
                    <br />
                    <h4 style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-12px', top: '10px', width: '6px', height: '6px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>
                      Landscape Reimagined:      </h4>
                    <p>Once the stump is gone, your creative possibilities are limitless. Reclaim that space to create a garden oasis, extend your patio, or embark on any landscaping project you've been envisioning.</p>
                    <br />
                    <h4 style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '-12px', top: '10px', width: '6px', height: '6px', backgroundColor: 'red', borderRadius: '50%', display: 'inline-block' }}></span>
                      Experienced Professionals:      </h4>
                    <p>With over a decade of experience, our skilled team has the expertise to navigate complex stump removal challenges with finesse, ensuring a smooth and hassle-free process.</p>





                  </div>
                </div>
              </div>



              {/* Content for the first column (65%) */}
              <h2 style={{ fontSize: '24px' }}>Related Services</h2>


              <div className="container mx-auto p-4">

                <div className="flex">
                  <div className="w-2/4 pr-4">
                    {/* Content for the first column (65%) */}
                    <div className="bg-white p-4 rounded shadow">
                      <p>Column 1 Content (65%)</p>
                    </div>
                  </div>
                  <div className="w-2/4">
                    {/* Content for the second column (35%) */}
                    <div className="bg-white p-4 rounded shadow">
                      <p>Column 2 Content (35%)</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container mx-auto p-4">
                <div className="flex">
                  <div className="w-2/4 pr-4">
                    {/* Content for the first column (65%) */}
                    <div className="bg-white p-4 rounded shadow">
                      img src={'img1.jpg'}
                    </div>
                  </div>
                 
                </div>
              </div>


            </div>

            <div className="w-1/3">
              {/* Content for the second column (35%) */}

              <ContactForm2 />
           

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

