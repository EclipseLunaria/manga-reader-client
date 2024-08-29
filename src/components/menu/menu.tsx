import React, { forwardRef } from 'react';
import { MenuProps } from './types';
import MenuConfiguration from './config';
import MenuSection from './menuSection';
import MenuHeader from './menuHeader';

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      props.closeMenu();
    }
  };
  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`menu transition-transform w-96 h-full origin-top-left mr-4 bg-secondary text-white z-100 ${
        props.isOpen ? 'scale-x-100 relative' : 'scale-x-0 absolute'
      } `}
    >
      <MenuHeader closeMenu={props.closeMenu} />
      <div className="menu-body">
        {MenuConfiguration.map((section, index) => (
          <MenuSection
            key={index}
            title={section.title}
            icon={section.icon}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
});

export default Menu;
