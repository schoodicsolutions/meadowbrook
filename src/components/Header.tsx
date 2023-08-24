import Link from 'next/link'

import Logo from './Logo';
import Navbar from './Navbar';
import dynamic from 'next/dynamic';

import Bars3 from '@heroicons/react/24/outline/Bars3Icon';

const LazyLoadTopStripe = dynamic(() => import('./TopStripe'), { ssr: false });

export default function Header() {
  return (
    <header>
      <LazyLoadTopStripe />
      <div className="flex items-center justify-between px-6 py-5 lg:px-12 2xl:px-0 2xl:py-0">
        <Link href="/">
          <Logo className="small sm:medium xl:large" />
        </Link>
        <Navbar className="hidden sm:block 2xl:pt-10" />
        <button className="icon sm:hidden">
          <Bars3 className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
