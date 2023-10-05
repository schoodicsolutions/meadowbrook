import React from 'react';

function ContactForm() {
    return (
  <div className="p-12 max-w-[720px] m-auto rounded-lg text-black flex flex-col gap-14 items-center" style={{ backgroundColor: '#f8f8f8' }}>
    <div>
      <h3 className="no-stripe text-center">Contact Us Now</h3>
      <p className="text-center" style={{ fontSize: '16px' }}>We work on all makes/models of trucks. Give us a call when you need us. You'll be back on the road in no time.</p>
    </div>
  
    <form>
      <div className="mb-4 form-input">
        <input type="text" id="name" name="name" placeholder="Name" required />
      </div>
  
      <div className="mb-4 form-input">
        <input type="number" id="number" name="number" placeholder="Phone Number" required/>
      </div>
  
      <div className="mb-4 form-input">
        <input type="email" id="email" name="email" placeholder="Email" required />
      </div>
  
      <div className="mb-6 form-input">
        <textarea id="message" name="message" rows="1" placeholder="Message" required></textarea>
      </div>
  
      <button className="contained red uppercase py-2" style={{ fontSize: '16px', paddingLeft: '150px', paddingRight: '150px' }}>Book Your Slot</button>
    </form>
  </div>
  );
  }
  export default ContactForm;