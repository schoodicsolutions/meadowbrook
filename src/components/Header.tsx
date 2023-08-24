import Logo from './Logo';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';

import Bars3 from '@heroicons/react/24/outline/Bars3Icon';

const LazyLoadTopStripe = dynamic(() => import('./TopStripe'), { ssr: false });

export default function Header() {
  return (
    <header className="h-[132px] 2xl:px-[167px] 2xl:pt-2.5 xl:pb-3 xl:relative">
      <LazyLoadTopStripe />
      <div className="flex justify-between items-center px-6 pt-5 2xl:pt-0 2xl:px-0 2xl:items-baseline">
        <Logo className="small sm:medium xl:large" />
        <Navbar className="2xl:pt-[55px] hidden sm:block" />
        <button className="rounded-md sm:hidden">
          <Bars3 className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
