import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/Routes';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
