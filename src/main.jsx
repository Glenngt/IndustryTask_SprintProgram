import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/homepage/homepage'; // Ensure this matches the actual file name and path
import DashboardPage from './Pages/dashboardPage/dashboardPage'; // Ensure this matches the actual file name and path
import ChatPage from './Pages/chatPage/hatPage'; // Ensure this matches the actual file name and path

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/dashboard',
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/chats/:id', element: <ChatPage /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
