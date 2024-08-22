import React, { useState } from 'react';
import { SeriesInfo } from '../../utils/types';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState<SeriesInfo[]>([]);
  
  return (
    <div className="search-results-container">
      <div className="search-results">Search Result</div>
    </div>
  );
};

export default SearchResults;
