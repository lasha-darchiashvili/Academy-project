import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/Landing";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import BlogsPage from "./pages/BlogsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blog",
        element: <BlogsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
