import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSeriesInfoHook } from '../utils/getSeriesInfoHook';
import { MangaTitleInfo } from '../Components/MangaTitleInfo';
import { SeriesInfo } from '../utils/getSeriesInfoHook';
const TitlePage = () => {
  const { titleId } = useParams();
  if (!titleId) {
    return <div>Invalid Title</div>;
  }

  const { loading, seriesInfo } = getSeriesInfoHook(titleId);

  return (
    <div className="manga-title-page">
      {loading && <div>Loading...</div>}
      {seriesInfo && <MangaTitleInfo {...seriesInfo} />}
    </div>
  );
};

export default TitlePage;
