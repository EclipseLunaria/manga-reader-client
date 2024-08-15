import React from 'react';
import { useSeriesSearchApi } from '../../utils/hooks';
import { SeriesInfo } from '../../utils/types';
import Carousel from './Carousel/Carousel';
const PopularManga = () => {
  const { data, loading } = useSeriesSearchApi<SeriesInfo[]>('fuufu');
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className="popular-manga-container bg-secondary rounded-xl p-4">
      <div className="popular-manga-body">
        {loading && <p>Loading...</p>}
        {!loading && data && <Carousel seriesList={data} />}
      </div>
    </div>
  );
};

export default PopularManga;
