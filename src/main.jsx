import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Product from "./pages/product.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import ErrorPage from "./pages/404.jsx";
<<<<<<< HEAD
import Admin from "./pages/admin/admin.jsx";
import Dashboard from "./pages/admin/dashboard.jsx";
import AdminProduct from "./pages/admin/product.jsx";
import Order from "./pages/admin/order.jsx";
=======
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
>>>>>>> 9ab2d963291abfb373ddf44822872c07833e152b

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
<<<<<<< HEAD
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "product",
        element: <AdminProduct />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
=======
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
>>>>>>> 9ab2d963291abfb373ddf44822872c07833e152b
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
