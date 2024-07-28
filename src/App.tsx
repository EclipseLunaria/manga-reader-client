import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/globals.css';

const App = () => {
  return (
    <div id="manga-reader-app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
