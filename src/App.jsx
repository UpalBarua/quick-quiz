import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Layouts/Home';
import Topics from './components/Topics/Topics';
import Questions from './components/Questions/Questions';
import Chart from './components/Chart/Chart';
import Blog from './components/Blog/Blog';
import FailedToLoadData from './components/ErrorPages/FailedToLoadData';
import PageNotFound from './components/ErrorPages/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home />,
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
