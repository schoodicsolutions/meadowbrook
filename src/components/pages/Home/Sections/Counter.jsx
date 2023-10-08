import React from "react";
import CountUp, { useCountUp } from 'react-countup';

export default function Counter({ number, title }) {
    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyOnce: true,
        scrollSpyDelay: 1000,
    });
    return (
        <div className="source flex justify-center items-center flex-col">
            <CountUp duration={3} suffix="+" enableScrollSpy scrollSpyOnce className="text-[34px] md:text-[48px] font-bold" end={number} />
            <h4 className="text-sm lg:text-base font-normal">{title}</h4>
        </div>
    );
}
