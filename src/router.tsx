import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from './Components/Layout';
import { SearchPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'titles',
        element: <div>Advanced Search</div>,
      },
      {
        path: 'titles/recent',
        element: <div>Recent Titles</div>,
      },
      {
        path: 'titles/latest',
        element: <div>Latest Titles</div>,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
]);
