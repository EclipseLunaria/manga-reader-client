import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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

export default MenuItem;
