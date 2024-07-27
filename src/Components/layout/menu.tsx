import React, { forwardRef } from 'react';
type MenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

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
      className={`menu transition-transform w-56 h-screen origin-top-left bg-secondary ${
        props.isOpen ? 'scale-x-100 relative' : 'scale-x-0 absolute'
      } `}
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

export default Menu;
