import React from 'react';
import Top5Series from '../components/seriesDisplays/top5Manga';
import { getSeriesList } from '../api/search.api';
import { PopularMangaCarousel } from '../components/carousel';
import TopXManga from '../components/seriesDisplays/top100Manga';

const PopularSeriesPage = () => {
  const { seriesResults } = getSeriesList('popular', 100);
  if (!seriesResults) return null;
  return (
    <div className="popular-series-page">
      <div className="pt-16">
        <PopularMangaCarousel />
      </div>
      <div className="h-fit">
        <Top5Series seriesData={seriesResults?.slice(0, 5)} />
      </div>
      <div className="mt-12">
        <TopXManga series={seriesResults} start={5} />
      </div>
    </div>
  );
};

export default PopularSeriesPage;
