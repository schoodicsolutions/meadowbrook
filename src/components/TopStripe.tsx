

import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon';
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon';
import { useBreakpoint } from '~/hooks/useBreakpoint';

export default function TopStripe() {
    const isSm = useBreakpoint('sm');

    const PhoneBadge = () => (<div className="flex gap-1 sm:gap-3.5 items-center shrink-0">
        <PhoneIcon className="h-6 w-6 inline"/>
        <span>(207) 259-6068</span>
    </div>)

    return (
        <div className="flex w-full 2xl:absolute 2xl:top-0 2xl:right-0 2xl:w-fit text-base sm:text-lg font-headings font-semibold justify-around">
            <div className="border-transparent border-b-scarlet border-r-scarlet 2xl:border-[21px] w-0 h-0" />
            <div className="bg-scarlet h-[42px] px-2 sm:px-6 2xl:px-[44px] flex gap-12 text-white font-bold items-center grow">
                <div className="flex m-auto gap-4 sm:gap-11 2xl:gap-24 xl:pr-40">
                    <a href="https://maps.apple.com/?address=Meadowbrook+Materials,888,Main+St,East+Machias,Maine">
                        <div className="flex gap-1 sm:gap-3.5 items-center shrink-0">
                            <MapPinIcon className="h-6 w-6 inline"/>
                            <div>
                                <span className="a11y-hidden sm:a11y-visible">888 Main Street,&nbsp;</span>
                                <span>East Machias, ME 04630</span>
                            </div>
                        </div>
                    </a>
                    { isSm ? (
                        <PhoneBadge />
                    ) : (
                        <a href="tel:+12072596068"><PhoneBadge /></a>
                    )}
                </div>
            </div>
        </div>
    )
}