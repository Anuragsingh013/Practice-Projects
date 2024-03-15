import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CardContainer from './CardContainer.jsx';
import PhoneDetail from './pages/PhoneDetail/PhoneDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardContainer />
      }
    ]
  },
  {
    path: "/phonedetail",
    element: <PhoneDetail />
  },
  {
    path: "/phonedetail/:productId",
    element: <PhoneDetail />
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
