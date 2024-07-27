import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from './Components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'search',
        element: <div>Search Page</div>,
      },
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
    ],
  },
]);
