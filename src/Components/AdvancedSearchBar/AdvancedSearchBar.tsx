import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchInputBox from './searchInputBox';
import FilterToggle from './FilterToggle';

const AdvancedSearchBar = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';
  const navigator = useNavigate();

  const handleSearch = (query: string) => {
    navigator(`/titles?q=${query}`);
  };

  const handleToggle = () => {};

  return (
    <div className="adv-search-bar">
      <div className="flex flex-row w-full mt-12">
        <SearchInputBox handleSearch={handleSearch} />
        <FilterToggle onToggle={handleToggle} />
      </div>
      <div className="flex flex-row justify-end text-xl w-full p-4">
        <Button className="bg-red-500">Clear Filters</Button>
        <Button className="bg-secondary">I'm Feeling Lucky</Button>
        <Button className="bg-orange-500">
          <i className="fa-solid fa-magnifying-glass  pr-2" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default AdvancedSearchBar;

const Button = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => (
  <div className={`${className} h-12 p-2 mx-2 rounded-md cursor-pointer`}>
    {children}
  </div>
);
