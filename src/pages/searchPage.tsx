import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSeriesSearchApi } from '../utils/useSearchApi';
import MangaCard from '../Components/MangaCard';
const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const { data, loading } = useSeriesSearchApi(query);
  return (
    <div>
      <h1>Search Page</h1>
      <p>Search query: {query}</p>
      <MangaCard />
      <>
        DATA: {JSON.stringify(data)}
        {/* {loading && <p>Loading...</p>} */}
        {/* {error && <p>Error: {error}</p>} */}
      </>
    </div>
  );
};

export default SearchPage;
