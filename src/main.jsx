import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './routes/Home.jsx'
import { Services } from './routes/Services.jsx'
import { About } from './routes/About.jsx'
import { Error } from './routes/Error.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import './index.css'
import { Contact } from './routes/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'servicos',
        element: <Services />
      },
      {
        path: 'sobre',
        element: <About />
      },
      {
        path: 'contato',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
