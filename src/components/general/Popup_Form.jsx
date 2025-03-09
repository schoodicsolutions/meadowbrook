import React, { useState, useEffect, useRef } from 'react';
import Contact_Form_Container from './Contact_Form_Container';
import { Icon } from '@iconify/react';

function Popup_Form({ openPopupForm }) {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const formRef = useRef(null);
    const buttonRef = useRef(null);

    const openForm = () => {
        setIsFormVisible(true);
        document.documentElement.classList.add('disable-scroll');
    };

    const closeForm = () => {
        setIsFormVisible(false);
        document.documentElement.classList.remove('disable-scroll');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setIsFormVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (openPopupForm) {
            openForm();
        }
    }, [openPopupForm]);

    return (
        <>
            <div className='block 2xl:hidden fixed bottom-0 bg-cred w-full z-20 text-center h-auto left-0'>
                <h1 className='text-xl text-white flex justify-center items-center gap-x-3 cursor-pointer font-bold py-2' onClick={openForm} ref={buttonRef}>
                    <Icon icon="material-symbols:mail-outline" className='text-2xl' /> <span>Contact Us</span>
                </h1>
            </div>
            <div
                className={`popup-form-container ${isFormVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} relative w-full transition-[opacity] duration-300 ease-out z-20`}
                ref={formRef}
            >
                <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-70" onClick={closeForm}>
                </div>
                {isFormVisible && (
                    <div className="fixed w-full flex items-center justify-center">
                        <div className='relative w-full -mt-10'>
                            <Contact_Form />
                            <button className="bg-cred absolute flex items-center justify-center top-20 right-6 text-white w-8 h-8 rounded-md" onClick={closeForm}>
                                <p className='font-bold w-min align-middle flex items-center justify-center'>X</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Popup_Form;
