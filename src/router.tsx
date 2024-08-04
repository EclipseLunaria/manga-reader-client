import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import { SearchPage } from './pages';
import TitlePage from './pages/TitlePage';
import ChapterViewer from './Components/ChapterViewer';
import ConstructionPage from './pages/constructionPage';

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
        element: <ConstructionPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'title/:titleId',
        element: <TitlePage />,
      },
      {
        path: 'title/:titleId/chapter/:chapterId',
        element: <ChapterViewer />,
      },
    ],
  },
]);
