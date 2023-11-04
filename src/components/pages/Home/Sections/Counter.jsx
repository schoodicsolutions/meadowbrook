import React, { useEffect, forwardRef } from "react";
import CountUp from 'react-countup';

const Counter = forwardRef(({ number, title }, ref) => {

    useEffect(() => {
        if (ref && ref.current) {
            ref.current.start();
        }
    }, [ref]);
    
    return (
        <div className="source flex justify-center items-center flex-col">
            <CountUp duration={3} suffix="+" enableScrollSpy scrollSpyOnce className="text-[34px] md:text-[48px] font-bold" end={number} ref={ref} />
            <h4 className="text-sm lg:text-base font-normal">{title}</h4>
        </div>
    );
})

export default Counter

