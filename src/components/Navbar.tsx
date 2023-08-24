import { useRouter } from 'next/router';
import { NAV_ITEMS } from '~/constants/Navbar';

import { memo } from 'react';

export interface NavbarProps {
  className?: string;
}

export default memo(function Navbar({ className }: NavbarProps) {
  const { pathname: currentPath } = useRouter();

  return (
    <nav className={className}>
      <ul className="flex gap-[35px]">
        {NAV_ITEMS.map(({ label, path, key }) => {
          const classes = ['navlink'];

          if (path === currentPath) {
            classes.push('active');
          }

          const className = classes.join(' ');
          return (
            <li className={className} key={key}>
              <a href={path}>{label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});
