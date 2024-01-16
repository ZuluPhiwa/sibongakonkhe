import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import WhatWeDo from './components/WhatWeDo.jsx'
import Home from './components/Home.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/sibongakonkhe/",
    element: <App />,
    children: [
      {
        path: "/sibongakonkhe/",
        element: <Home />,
      },
      {
        path: "/sibongakonkhe/contact",
        element: <Contact />,
      },
      {
        path: "/sibongakonkhe/services",
        element: <WhatWeDo />,
      },
      {
        path: "/sibongakonkhe/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
