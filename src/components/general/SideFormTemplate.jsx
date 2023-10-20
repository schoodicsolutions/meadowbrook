import React, { useState } from 'react';

function SideFormTemplate({ label, id, type, required }) {
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
        <div className='relative pb-6'>
            <label
                htmlFor={id}
                className={`absolute px-4 transition-all pointer-events-none ${isLabelFloating
                    ? '-top-2 left-0 text-[#5E6771] text-xs'
                    : 'top-3 left-0 text-[#343434] text-[15px]'
                    }`}
            >
                {label}{required && <span className='text-red-600'>*</span>}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    required={required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    rows="3"
                    className='w-full text-[15px] bg-white border rounded-md border-white outline-none p-3 transition-all duration-300'
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    required={required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className='w-full text-[15px] bg-white border rounded-md border-white outline-none p-3 transition-all duration-300'
                />
            )}
        </div>
    );
}

export default SideFormTemplate;
