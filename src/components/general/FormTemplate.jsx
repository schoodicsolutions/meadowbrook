import React, { useState } from 'react';

function Form({ label, id, type, required }) {
    const [isLabelFloating, setIsLabelFloating] = useState(false);

    const handleFocus = () => {
        setIsLabelFloating(true);
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            setIsLabelFloating(false);
        }
    };

    return (
        <div className='relative pb-8'>
            <label
                htmlFor={id}
                className={`absolute px-4 transition-all pointer-events-none ${isLabelFloating
                    ? '-top-4 left-0 text-[#5E6771] text-xs'
                    : 'top-0 left-0 text-[#343434] text-[15px]'
                    }`}
            >
                {label}{required && <span className='text-cred'>*</span>}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    required={required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    rows="1"
                    className='w-full text-[15px] bg-transparent border border-x-0 border-t-0 border-b-[#5E6771] outline-none px-4 py-1 sm:py-1 transition-all duration-300'
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    required={required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className='w-full text-[15px] bg-transparent border border-x-0 border-t-0 border-b-[#5E6771] outline-none px-4 pb-2 transition-all duration-300'
                />
            )}
        </div>
    );
}

export default Form;
