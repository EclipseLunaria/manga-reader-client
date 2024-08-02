import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSeriesSearchApi } from '../utils/hooks';
import MangaCard, { MangaCardProps } from '../Components/MangaCard';

const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const { data, loading } = useSeriesSearchApi<MangaCardProps[]>(query);
  return (
    <div>
      <h1>Search Page</h1>
      <p>Search query: {query}</p>
      {loading && <p>Loading...</p>}
      {!loading &&
        data &&
        data.map((manga, index) => <MangaCard {...manga} key={index} />)}
    </div>
  );
};

export default SearchPage;
