import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import ReactGA from "react-ga4";

export function App() {
  /*  ReactGA.initialize(""); */
  return <RouterProvider router={routes} />;
}
