import React from 'react';

const ClickPageNav = (props: {
  onPageNav: (nav: number | 'next' | 'prev') => void;
}) => {
  return (
    <div className="click-page-nav-box z-10 absolute h-screen w-full flex justify-between ">
      <div
        className="click-page-nav-button w-full cursor-pointer"
        onClick={() => props.onPageNav('prev')}
      ></div>
      <div
        className="click-page-nav-button w-full cursor-pointer"
        onClick={() => props.onPageNav('next')}
      ></div>
    </div>
  );
};

export default ClickPageNav;
