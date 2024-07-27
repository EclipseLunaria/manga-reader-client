import React, { useEffect, useRef } from 'react';
import PageHeader from './header';
import Menu from './menu';
import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMenuToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };
  const closeMenu = () => setIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (
    <div className="flex flex-row relative justify-start w-1000px">
      <Menu ref={menuRef} closeMenu={closeMenu} isOpen={isOpen} />

      <div className="flex flex-col relative justify-start w-1000px p-5">
        <PageHeader isOpen={isOpen} onMenuToggled={handleMenuToggle} />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
