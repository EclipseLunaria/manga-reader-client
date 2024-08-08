import React from 'react';
import ConstructionImage from '../assets/construction.png';
const ConstructionPage: React.FC = () => {
  return (
    <div>
      <img
        src={ConstructionImage}
        alt="Under Construction"
        className="absolute z-20 rounded-3xl shadow-2xl "
      />
      <img
        src={ConstructionImage}
        alt="Under Construction"
        className="animated-blur absolute rounded-3xl shadow-2xl"
      />
    </div>
  );
};

export default ConstructionPage;
