import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DashboardPage from './Pages/dashboardPage/dashboardPage'; // Ensure this matches the actual file name and path
import ChatPage from './Pages/chatPage/chatPage';
import RootLayout from './layouts/rootLayout/rootLayout';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';
import SignInPage from './Pages/signInPage/SignInPage';
import SignUpPage from './Pages/signUpPage/SignUpPage';
import Homepage from './Pages/homepage/homepage';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout/>,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage/>,
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage/>,
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
