import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuProps, MenuSectionProps } from './types';

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
      className={`menu transition-transform w-64 h-screen origin-top-left mr-4 bg-secondary text-white ${
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

// Subcomponents
const MenuHeader = (props: { closeMenu: () => void }) => {
  return (
    <div className="menu-header h-16 flex flex-row mx-2">
      <button
        onClick={props.closeMenu}
        className="text-white font-bold justify-end ml-auto text-3xl"
      >
        ✕
      </button>
    </div>
  );
};

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

const MenuItem = (props: { text: string; link: string }) => {
  const locater = useLocation();

  return (
    <div
      className={`
        menu-item  rounded-lg
        pl-6 cursor-pointer text-lg leading-7 font-main m-2
        flex flex-col justify-center
        ${
          locater.pathname === props.link
            ? 'bg-orange-500 hover:bg-orange-600 font-bold'
            : 'hover:bg-accentBackground'
        }
        `}
    >
      <Link to={props.link}>{props.text}</Link>
    </div>
  );
};

const MenuConfiguration: MenuSectionProps[] = [
  {
    title: 'Titles',
    icon: '🕮',
    items: [
      { text: 'Advanced Search', link: '/titles' },
      { text: 'Recently Added', link: '/titles/recent' },
      { text: 'Latest Update', link: '/titles/latest' },
      { text: 'Random', link: '/title/random' },
    ],
  },
  {
    title: 'Library',
    icon: '📚',
    items: [
      { text: 'Manga', link: '/library/manga' },
      { text: 'Anime', link: '/library/anime' },
    ],
  },
  {
    title: 'Profile',
    icon: '👤',
    items: [
      { text: 'Settings', link: '/profile/settings' },
      { text: 'Logout', link: '/logout' },
    ],
  },
  {
    title: 'Help',
    icon: '❓',
    items: [
      { text: 'FAQ', link: '/help/faq' },
      { text: 'Contact', link: '/help/contact' },
    ],
  },
];
