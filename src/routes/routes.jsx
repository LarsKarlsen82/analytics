import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Gallery } from "../Pages/Gallery";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);