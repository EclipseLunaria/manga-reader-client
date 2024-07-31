import React from 'react';
import { useParams } from 'react-router-dom';
import { getSeriesInfoHook } from '../utils/getSeriesInfoHook';
const TitlePage = () => {
  const { titleId } = useParams();
  if (!titleId) {
    return <div>Invalid Title</div>;
  }
  const { seriesInfo, loading } = getSeriesInfoHook(titleId);
  return (
    <div className="manga-title-page">
      {loading && <div>Loading...</div>}
      {seriesInfo && (
        <div>
          <h1>{seriesInfo.title}</h1>
          <img src={seriesInfo.image} alt={seriesInfo.title} />
          <p>{seriesInfo.description}</p>
        </div>
      )}
    </div>
  );
};

export default TitlePage;
