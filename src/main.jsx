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
import JobCard from './Components/JobCard'
import { productCartData } from './Loaders/GetApplyJobsDataStorage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>fetch('job-catagory.json')
      },
      {
        path: 'statistics',
        element:<Statistics/>
      },
      {
        path: 'applied',
        element:<AppliedJobs/>
      },
      {
        path: 'blog',
        element:<Blog/>
      },
      {
        path: 'jobs',
        element: <JobCard />,
        loader:productCartData,
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)