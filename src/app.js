import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// layout with header always visible
const AppLayout = () => {
  return (
    <div className="mainApp">
      <Header />
      <Outlet /> {/* child routes will render here */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1>Something Went Wrong "/"</h1>,
    children: [
      {
        path: "/", // home page
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <h1>Something Went Wrong "/about"</h1>,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <h1>Something Went Wrong "/contact"</h1>,
      },
      {
        path: "/restaurant",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
