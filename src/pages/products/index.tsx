import dynamic from 'next/dynamic';
import ContactForm2 from '../../components/Form2';
import SliceHero from '~/components/SliceHero';

export default function Product() {
  const ProductFlex = dynamic(() => import('../../components/FlexText'), {
    ssr: false,
  });
  return (
    <>
      <SliceHero />

      <section>
     
      <div className="container mx-auto p-4">
        <div className="flex">

          <div className="w-2/3 pr-4">
            {/* Content for the first column (65%) */}
            <h2 style={{ fontSize: '30px' }}>The landscaping service includes</h2>
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
          <div className="w-2/4">
            {/* Content for the second column (35%) */}
            <div className="bg-white p-4 rounded shadow">
              <p>Column 2 Content (35%)</p>
            </div>
          </div>        
        </div>
      </div>

            
          </div>
          <div className="w-1/3">
          
            
           <ContactForm2 />
        
           
          </div>
        </div>
      </div>       
      </section>
    </>
  );
}
