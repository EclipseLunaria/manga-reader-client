import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
    ],
  },
]);
