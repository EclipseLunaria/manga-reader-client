import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import { AdvancedSearchPage, SearchPage } from './Pages';
import TitlePage from './Pages/TitlePage';
import ChapterViewer from './Components/ChapterViewer';
import ConstructionPage from './Pages/ConstructionPage';
import PageNotFound from './Pages/PageNotFound';
import HomePage from './Pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'titles',
        element: <AdvancedSearchPage />,
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
        path: 'my/shelf',
        element: <ConstructionPage />,
      },
      {
        path: 'my/collections',
        element: <ConstructionPage />,
      },
      {
        path: 'my/collections/:collectionId',
        element: <ConstructionPage />,
      },
      {
        path: 'my/feed',
        element: <ConstructionPage />,
      },
      {
        path: 'my/history',
        element: <ConstructionPage />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
