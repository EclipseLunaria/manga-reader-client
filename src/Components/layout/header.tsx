import React from 'react';
import '../../globals.css';
const PageHeader = (props: {
  onMenuToggled: (menuOpen: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <div className="navbarmain ">
      <div className={`dropdown-menu-icon flex flex-row `}>
        <div className="font-anime">MANGA DOKUSHA</div>
        <button
          onClick={() => {
            const { isOpen } = props;
            props.onMenuToggled(!isOpen);
          }}
          className={`text-white font-bold justify-end mr-auto p-5 text-3xl ${
            props.isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
