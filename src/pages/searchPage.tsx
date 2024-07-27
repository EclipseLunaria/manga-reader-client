import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  return (
    <div>
      <h1>Search Page</h1>
      <p>Search query: {query}</p>
    </div>
  );
};

export default SearchPage;
