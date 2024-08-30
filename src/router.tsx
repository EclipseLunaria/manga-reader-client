import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import { AdvancedSearchPage, SearchPage } from './pages';
import TitlePage from './pages/titlePage';
import ChapterViewer from './components/chapterViewer';
import ConstructionPage from './pages/constructionPage';
import PageNotFound from './pages/pageNotFound';
import HomePage from './pages/homePage';
import MalRegisterPage from './pages/malRegisterPage';
import MangaListPage from './pages/mangaListPage';

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
        element: <MangaListPage type="newest" />,
      },
      {
        path: 'titles/latest',
        element: <MangaListPage type="latest" />,
      },
      {
        path: 'titles/popular',
        element: <MangaListPage type="popular" />,
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
    path: '/register/mal',
    element: <MalRegisterPage />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
