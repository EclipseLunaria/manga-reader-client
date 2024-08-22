import React from 'react';
import Carousel from './Carousel';
const PopularMangaCarousel = () => (
  <Carousel carouselType="popular" titleText="Popular Manga" />
);
// 'last_updated' | 'popular' | 'newest'
const LatestUpdatesCarousel = () => (
  <Carousel carouselType="last_updated" titleText="Latest Updates" />
);

const LatestReleasesCarousel = () => (
  <Carousel carouselType="newest" titleText="Newest Releases" />
);

export { PopularMangaCarousel, LatestReleasesCarousel, LatestUpdatesCarousel };
