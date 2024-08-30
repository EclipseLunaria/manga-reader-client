import React from 'react';
import Top5Series from '../components/seriesDisplays/top5Manga';
import TopXManga from '../components/seriesDisplays/top100Manga';
import { getSeriesList } from '../api/search.api';
import Carousel, {
  LatestReleasesCarousel,
  LatestUpdatesCarousel,
  PopularMangaCarousel,
} from '../components/carousel';
import { SearchCategory } from '../utils/types';

const MangaListPage = (props: { type: SearchCategory }) => {
  const { seriesResults } = getSeriesList(props.type, 100);
  const NAMEMAP = {
    newest: <LatestReleasesCarousel />,
    latest: <LatestUpdatesCarousel />,
    popular: <PopularMangaCarousel />,
  };
  if (!seriesResults) return null;
  return (
    <div className="popular-series-page">
      <div className="pt-16">{NAMEMAP[props.type]}</div>
      <div className="h-fit">
        <Top5Series seriesData={seriesResults?.slice(0, 5)} />
      </div>
      <div className="mt-12">
        <TopXManga series={seriesResults} start={5} />
      </div>
    </div>
  );
};

export default MangaListPage;
