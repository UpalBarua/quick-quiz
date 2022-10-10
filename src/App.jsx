import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topics />,
      },
      {
        path: '/statistics',
        element: <h1>This is statistics</h1>,
      },
      {
        path: '/blogs',
        element: <h1>This is blogs</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
