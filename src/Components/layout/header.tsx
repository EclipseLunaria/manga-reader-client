import React from 'react';
import '../../globals.css';
const PageHeader = (props: {
  onMenuToggled: (menuOpen: boolean) => void;
  isOpen: boolean;
}) => {
  return (
    <div className="navbarmain flex flex-row w-1440px">
      <div className="font-anime flex flex-col justify-center">
        MANGA DOKUSHA
      </div>
      <div className={`dropdown-menu-icon`}>
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
