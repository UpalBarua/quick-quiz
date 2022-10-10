import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/topics',
        element: <h1>This is topic</h1>,
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
