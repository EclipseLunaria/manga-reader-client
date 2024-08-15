import React from 'react';
import PopularManga from '../Components/PopularManga';

const HomePage = () => {
  return (
    <div className="home-page-container w-full h-full p-2">
      <div className="home-page-header">
        <h1>Home Page</h1>
      </div>
      <div className="home-page-body">
        <PopularManga />
      </div>
    </div>
  );
};

export default HomePage;
