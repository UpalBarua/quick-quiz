import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
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
      },
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics />,
      },
      {
        path: '/questions/:id',
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Questions />,
      },
      {
        path: '/statistics',
        element: <h1>This is statistics</h1>,
      },
      {
        path: '/blogs',
        element: <Blog />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>Nothing Found</h1>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
