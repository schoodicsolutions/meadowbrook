import React, { useState } from 'react';
import Contact_Form from './Contact_Form';

function Popup_Form() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const openForm = () => {
        setIsFormVisible(true);
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    return (
        <>
            <div className='block 2xl:hidden fixed bottom-0 bg-cred w-full z-20 text-center h-auto left-0'>
                <h1 className='text-2xl text-white cursor-pointer font-bold py-3' onClick={openForm}>
                    Contact Us
                </h1>
            </div>
            <div className={`${isFormVisible === true ? "opacity-100 visible" : "opacity-0 invisible"} relative w-full transition-[opacity] duration-300 ease-out z-20 `}>
                {isFormVisible && (
                    <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-70">
                        <div className='relative w-full -mt-20'>
                            <Contact_Form />
                            <button className="bg-cred absolute top-20 right-6 text-white px-2 py-1" onClick={closeForm}>
                                <p className='font-bold'>X</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Popup_Form;
