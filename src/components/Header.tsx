import Logo from './Logo';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';

import Bars3 from '@heroicons/react/24/outline/Bars3Icon';

const LazyLoadTopStripe = dynamic(() => import('./TopStripe'), { ssr: false });

export default function Header() {
  return (
    <header>
      <LazyLoadTopStripe />
      <div className="flex justify-between items-center px-6 lg:px-12 py-5 2xl:py-0 2xl:px-0">
        <Logo className="small sm:medium xl:large" />
        <Navbar className="hidden sm:block 2xl:pt-10" />
        <button className="icon sm:hidden">
          <Bars3 className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
