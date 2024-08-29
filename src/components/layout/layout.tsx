import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../menu';
import PageHeader from './layoutHeader';

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
    <div className="flex flex-row justify-start w-screen h-full z-50">
      <Menu ref={menuRef} closeMenu={closeMenu} isOpen={isOpen} />
      <div className="content-outer-container flex w-full">
        <div className="content-boxes flex flex-col w-[1200px] mx-auto">
          <PageHeader isOpen={isOpen} onMenuToggled={handleMenuToggle} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
