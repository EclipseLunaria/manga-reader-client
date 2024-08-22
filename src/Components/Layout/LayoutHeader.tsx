import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/globals.css';
import UserInfo from '../UserInfo';

const PageHeader = (props: {
  onMenuToggled: (menuOpen: boolean) => void;
  isOpen: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div className="navbarmain flex flex-row w-1200px">
      <div
        className="font-anime flex flex-col justify-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        MANGA DOKUSHA
      </div>
      <div className={`dropdown-menu-icon`}>
        <button
          onClick={() => {
            const { isOpen } = props;
            props.onMenuToggled(!isOpen);
          }}
          className={`text-white font-bold justify-end p-5 text-3xl ${
            props.isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          ☰
        </button>
      </div>
      <SearchBar />
      <UserInfo />
    </div>
  );
};

export default PageHeader;

// helper components

const SearchBar = () => {
  const Navigator = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const searchManga = (query: string) => {
    Navigator(`/search?q=${query}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('searching for manga', searchQuery);
      searchManga(searchQuery);
    }
  };
  return (
    <div className="search-bar-container ml-auto flex flex-col justify-center">
      <div className="search-box bg-accent p-2 rounded">
        <input
          type="text"
          placeholder="Search for manga"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input transition-width duration-300 ease-in-out w-40 focus:w-96 bg-transparent decoration-none focus:outline-none text-white "
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};
