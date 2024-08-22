import React from 'react';
import AdvancedSearchBar from '../Components/AdvancedSearchBar';

const AdvancedSearchPage = () => {
  return (
    <div className="advanced-search-page">
      <div className="page-header">
        <a href="/" className="text-2xl font-bold">
          <i className="fas fa-arrow-left mr-12"></i> Advanced Search
        </a>
      </div>
      <AdvancedSearchBar />
    </div>
  );
};

export default AdvancedSearchPage;
