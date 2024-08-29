import React from 'react';
import MenuItem from './menuItem';
import { MenuSectionProps } from './types';

const MenuSection = (props: MenuSectionProps) => {
  return (
    <div className="menu-section p-4 ">
      <div className="menu-header flex flex-row text-xl">
        <div className="menu-icon">{props.icon}</div>
        <div className="menu-title font-bold ml-2">{props.title}</div>
      </div>
      <div className="menu-items">
        {props.items.map((item, index) => (
          <MenuItem text={item.text} link={item.link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
