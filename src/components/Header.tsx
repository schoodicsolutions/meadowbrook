import Logo from './Logo';
import Navbar from './Navbar';
import TopStripe from './TopStripe';

export default function Header() {
  return (
    <header className="h-[132px] lg:px-[167px] lg:pt-2.5 lg:pb-3 lg:relative">
      <TopStripe />
      <div className="flex justify-between">
        <Logo />
        <Navbar className="pt-[55px]" />
      </div>
    </header>
  );
}
