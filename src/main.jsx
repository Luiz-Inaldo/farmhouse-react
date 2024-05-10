import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './routes/Home.jsx'
import { Error } from './routes/Error.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
