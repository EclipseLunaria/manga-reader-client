import React from 'react';
import {
  LatestReleasesCarousel,
  LatestUpdatesCarousel,
  PopularMangaCarousel,
} from '../components/carousel';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';

const HomePage = () => {
  return (
    <div className="home-page-container w-full h-full p-2">
      <div className="home-page-header">
        <div className="h-24 w-24">
          <LoadingSpinner />
        </div>
      </div>
      <div className="home-page-body">
        <PopularMangaCarousel />
        <LatestUpdatesCarousel />
        <LatestReleasesCarousel />
      </div>
    </div>
  );
};

export default HomePage;
