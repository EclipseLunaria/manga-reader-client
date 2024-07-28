import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSeriesSearchApi } from '../utils/useSearchApi';
const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const { data, loading } = useSeriesSearchApi(query);
  return (
    <div>
      <h1>Search Page</h1>
      <p>Search query: {query}</p>
      <div>
        DATA: {JSON.stringify(data)}
        {/* {loading && <p>Loading...</p>} */}
        {/* {error && <p>Error: {error}</p>} */}
      </div>
    </div>
  );
};

export default SearchPage;
