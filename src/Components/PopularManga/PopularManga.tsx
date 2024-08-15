import React from 'react';
import Carousel from './Carousel/Carousel';
import getSeriesListHook from '../../utils/hooks/getMangaList';
const PopularManga = () => {
  const  { seriesInfoList, loading } = getSeriesListHook('last_updated')
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(seriesInfoList);
  return (
    <div className="popular-manga-container bg-secondary rounded-xl p-4">
      <div className="popular-manga-body">
        {loading && <p>Loading...</p>}
        {!loading && seriesInfoList && <Carousel seriesList={seriesInfoList} />}
      </div>
    </div>
  );
};

export default PopularManga;
