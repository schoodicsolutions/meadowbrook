import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon';
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon';
import { useBreakpoint } from '~/hooks/useBreakpoint';

export default function TopStripe() {
  const isSm = useBreakpoint('sm');

  const PhoneBadge = () => (
    <div className="flex shrink-0 items-center gap-1 sm:gap-3.5">
      <PhoneIcon className="inline h-6 w-6" />
      <span>(207) 259-6068</span>
    </div>
  );

  return (
    <div className="flex w-full justify-around font-headings text-base font-semibold sm:text-lg 2xl:absolute 2xl:right-0 2xl:top-0 2xl:w-fit">
      <div className="h-0 w-0 border-transparent border-b-scarlet border-r-scarlet 2xl:border-[22px]" />
      <div className="flex h-[44px] grow items-center gap-12 bg-scarlet px-2 text-white sm:px-6 2xl:px-[44px]">
        <div className="m-auto flex gap-4 sm:gap-11 2xl:gap-24 2xl:pr-40">
          <a href="https://maps.apple.com/?address=Meadowbrook+Materials,888,Main+St,East+Machias,Maine">
            <div className="flex shrink-0 items-center gap-1 sm:gap-3.5">
              <MapPinIcon className="inline h-6 w-6" />
              <div>
                <span className="a11y-hidden sm:a11y-visible">
                  888 Main Street,&nbsp;
                </span>
                <span>East Machias, ME 04630</span>
              </div>
            </div>
          </a>
          {isSm ? (
            <PhoneBadge />
          ) : (
            <a href="tel:+12072596068">
              <PhoneBadge />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
