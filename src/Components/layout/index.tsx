"use client";

import React, { forwardRef, useEffect, useRef } from 'react';
const Layout: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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
    <nav className="">
      <Menu ref={menuRef} closeMenu={closeMenu} isOpen={isOpen}/>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16 w-screen flex flex-row">
        
        <div className='dropdown-menu-icon flex flex-col' >
        <button
            onClick={() => setIsOpen(!isOpen)}
              className="text-white font-bold justify-end ml-auto pr-5 text-3xl"
            >
              ☰
            </button>
        </div>
      </div>
    </nav>
  );
};
type MenuProps = {
    isOpen: boolean;
    closeMenu: () => void;
  };

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
    const handleClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          props.closeMenu();
        }
        
        
    }
    return (
        <div
          ref={ref}
          onClick={handleClick}
          className={`menu transition-transform w-56 h-screen absolute origin-top-left bg-secondary ${
            props.isOpen ? 'scale-x-100' : 'scale-x-0'
          }`}
        >
          <div className="menu-header h-16 flex flex-row bg-primary">
            <button
              onClick={props.closeMenu}
              className="text-white font-bold justify-end ml-auto pr-5 text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      );
    });
Menu.displayName = 'Menu';
const Menu2 = (props: {isOpen: boolean, closeMenu: ()=>void}) => {
    const handleClick = (e: React.MouseEvent) => {
        if( e.target === e.currentTarget) {
            props.closeMenu();
        }
    }
    return (
        <div onClick={handleClick} className={`menu transition-transform w-32 h-screen fixed origin-top-left bg-green-500 ${props.isOpen ? "scale-x-100" : 'scale-x-0'}`}>
            <div className='menu-header h-16 bg-green-400 flex flex-row'>
                <button onClick={props.closeMenu} className='text-gray-700 font-bold justify-end ml-auto pr-5 text-3xl'>✕</button>
            </div>
        </div>
    );
}

export default Layout;
