import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ErrorPage from './Components/Errorpage'
import Home from './Components/Home'
import Statistics from './Components/Statistics'
import AppliedJobs from './Components/AppliedJobs'
import Blog from './Components/Blog'
import JobDetails from './Components/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader:()=>fetch('jobs-data.json')
      },
      {
        path: 'statistics',
        element:<Statistics/>
      },
      // {
      //   path: "jobs",
      //   element: <JobCard/
      // },
      {
        path: 'applied',
        element:<AppliedJobs/>
      },
      {
        path: 'blog',
        element:<Blog/>
      },
      {
        path: 'applied/:jobsId',
        element: <JobDetails />,
        loader:({params})=>fetch(`jobs-data.json/${params.jobsId}`)
      },

    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)