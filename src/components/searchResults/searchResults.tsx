import React, { useEffect, useState } from 'react';
import { SeriesInfo } from '../../utils/types';
import { SearchView } from './viewButton';
import ViewButtonGroup from './viewButtonGroup';
import ListViewResults from './listViewResults';
import { useSeriesSearchApi } from '../../hooks';
import CoverView from './coverView';

const VIEWS = {
  list: ViewButtonGroup,
  cover: CoverView,
};

const SearchResults = (props: { searchQuery: string }) => {
  const { searchQuery } = props;
  const { data, error, loading } =
    useSeriesSearchApi<SeriesInfo[]>(searchQuery);

  const [searchResults, setSearchResults] = useState<SeriesInfo[]>([]);
  const [selectedView, setSelectedView] = useState<SearchView>('list');
  const renderView = (view: SearchView) => {
    switch (view) {
      case 'list':
        return <ListViewResults results={searchResults} />;
      case 'cover':
        return <CoverView results={searchResults} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data]);

  return (
    <div className="search-results-container">
      <ViewButtonGroup
        onClick={(type: SearchView) => {
          console.log(type);
          setSelectedView(type);
        }}
      />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && renderView(selectedView)}
    </div>
  );
};

export default SearchResults;
