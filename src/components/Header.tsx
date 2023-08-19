import Logo from './Logo';
import TopStripe from './TopStripe';

export default function Header() {
  return (
    <header className="h-[132px] lg:px-[167px] pt-2.5 pb-3 lg:relative">
      <TopStripe />
      <Logo />
    </header>
  );
}
