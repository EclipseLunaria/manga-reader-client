import React from 'react';
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

export default MenuHeader;
