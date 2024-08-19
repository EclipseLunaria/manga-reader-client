import React from 'react';
import PopularMangaCarousel from '../Components/Carousel/PopularMangaCarousel';
import HomepageCourasel from '../Components/Carousel/HomepageHeader';

const HomePage = () => {
  return (
    <div className="home-page-container w-full h-full p-2">
      <div className="home-page-header">
        <h1>Home Page</h1>
      </div>
      <div className="home-page-body">
        <HomepageCourasel />
        {/* <PopularMangaCarousel /> */}
      </div>
    </div>
  );
};

export default HomePage;
