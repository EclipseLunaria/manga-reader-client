import React from 'react';
import Carousel from './carousel';
const PopularMangaCarousel = () => (
  <Carousel
    carouselType="popular"
    titleText="Popular Manga"
    navDestination="/titles/popular"
  />
);
// 'last_updated' | 'popular' | 'newest'
const LatestUpdatesCarousel = () => (
  <Carousel
    carouselType="latest"
    titleText="Latest Updates"
    navDestination="/titles/latest"
  />
);

const LatestReleasesCarousel = () => (
  <Carousel
    carouselType="newest"
    titleText="Newest Releases"
    navDestination="/titles/recent"
  />
);

export { PopularMangaCarousel, LatestReleasesCarousel, LatestUpdatesCarousel };
