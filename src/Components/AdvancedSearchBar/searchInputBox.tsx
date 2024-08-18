import React, { useState } from 'react';

const SearchInputBox = (props: { handleSearch: (query: string) => void }) => {
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  const [searchString, setSearchString] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && searchString) props.handleSearch(searchString);
  };
  return (
    <div
      className={`searchbar-box relative flex flex-row bg-secondary caret-green-600  mx-2 text-xl w-full
         rounded-md group border-2 transition-all hover:border-green-600 hover:shadow-green-900 hover:shadow ${
           searchBarFocus
             ? 'border-green-600 shadow-green-900 shadow '
             : 'border-transparent'
         }`}
    >
      <i className="fa-solid fa-magnifying-glass my-auto p-2"></i>
      <input
        type="text"
        className="bg-transparent w-full mx-2 focus:outline-none text-green-700"
        onFocus={() => setSearchBarFocus(true)}
        onBlur={() => setSearchBarFocus(false)}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInputBox;
