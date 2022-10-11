import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import FailedToLoadData from './components/ErrorPages/FailedToLoadData';
import PageNotFound from './components/ErrorPages/PageNotFound';
import Questions from './components/Questions/Questions';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics />,
        errorElement: <FailedToLoadData />,
      },
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics />,
        errorElement: <FailedToLoadData />,
      },
      {
        path: '/questions/:id',
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Questions />,
        errorElement: <FailedToLoadData />,
      },
      {
        path: '/statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Chart />,
        errorElement: <FailedToLoadData />,
      },
      {
        path: '/blogs',
        element: <Blog />,
        errorElement: <FailedToLoadData />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
