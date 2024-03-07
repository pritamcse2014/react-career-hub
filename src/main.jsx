import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root'
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import JobDetails from './components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/applied',
        element: <AppliedJobs />,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: () => fetch('/jobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
