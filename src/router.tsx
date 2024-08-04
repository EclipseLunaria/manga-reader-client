import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import { SearchPage } from './pages';
import TitlePage from './pages/TitlePage';
import ChapterViewer from './Components/ChapterViewer';
import ConstructionPage from './pages/constructionPage';
import PageNotFound from './pages/PageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'titles',
        element: <ConstructionPage />,
      },
      {
        path: 'titles/recent',
        element: <ConstructionPage />,
      },
      {
        path: 'titles/latest',
        element: <ConstructionPage />,
      },
      {
        path: 'title/random',
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
      // Library Pages
      {
        path: 'library',
        element: <ConstructionPage />,
      },
      {
        path: 'library/shelf',
        element: <ConstructionPage />,
      },
      {
        path: 'library/collections',
        element: <ConstructionPage />,
      },
      {
        path: 'library/collections/:collectionId',
        element: <ConstructionPage />,
      },
      {
        path: 'library/feed',
        element: <ConstructionPage />,
      },
      {
        path: 'library/history',
        element: <ConstructionPage />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
