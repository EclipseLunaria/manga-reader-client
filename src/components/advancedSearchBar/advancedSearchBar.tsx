import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchInputBox from './searchInputBox';
import FilterToggle from './filterToggle';
import FilterPlaceholder from '../../assets/FilterPlaceholder.png';
import SearchResults from '../searchResults/searchResults';

const AdvancedSearchBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const navigator = useNavigate();

  const handleSearch = (query: string) => {
    navigator(`/titles?q=${query}`);
  };

  const handleToggle = (isOpen: boolean) => {
    setIsFilterOpen(isOpen);
  };

  return (
    <div className="adv-search-bar">
      <div className="flex flex-row w-full mt-12">
        <SearchInputBox handleSearch={handleSearch} />
        <FilterToggle setToggle={handleToggle} />
      </div>
      <div
        className={`filters-box w-full overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ height: isFilterOpen ? '700px' : '0' }} // Adjust '200px' to the desired height
      >
        <img
          src={FilterPlaceholder}
          alt="Filter Placeholder"
          className="w-full h-full object-cover rounded-xl"
        />
        {/* TODO: Make Filter menu and Input Box common components*/}
      </div>
      <div className="flex flex-row justify-end text-xl w-full p-4">
        <Button className="bg-red-500" onClick={() => handleToggle(false)}>
          Clear Filters
        </Button>
        <Button className="bg-secondary">I'm Feeling Lucky</Button>
        <Button className="bg-orange-500">
          <i className="fa-solid fa-magnifying-glass pr-2" />
          Search
        </Button>
      </div>
      {query && <SearchResults searchQuery={query} />}
    </div>
  );
};

export default AdvancedSearchBar;

const Button = (props: {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <div
    className={`${props.className} h-12 p-2 mx-2 rounded-md cursor-pointer`}
    onClick={props.onClick}
  >
    {props.children}
  </div>
);
