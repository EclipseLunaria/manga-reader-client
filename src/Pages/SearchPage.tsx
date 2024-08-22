import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSeriesSearchApi } from '../hooks';
import MangaCard from '../Components/MangaCard';
import { SeriesInfo } from '../utils/types';

const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const { data, loading } = useSeriesSearchApi<SeriesInfo[]>(query);
  return (
    <div>
      <h1>Search Page</h1>
      <p>Search query: {query}</p>
      {loading && <p>Loading...</p>}
      {!loading &&
        data &&
        data.map((manga: SeriesInfo, index: number) => (
          <MangaCard {...manga} key={index} />
        ))}
    </div>
  );
};

// title: string;
//   link: string;
//   image: string;
//   author: string;
//   rating: string;
//   seriesId: string;

export default SearchPage;
