import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import App from "../App";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./Home/HomePage";
import About from "./about/About";
import BigSpinner from "./utilities/BigSpinner";
import ProductPage from "./feature/FeaturePage";
import Details from "./feature/Deatail";

export const route2 = createBrowserRouter([
 
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "aboutus",
            element: <About />,
            children: [
              {
                path: "bigspinner",
                element: <BigSpinner />,
              },
            ],
          },
          {
            path: "feature",
            element: <ProductPage />,
            children: [
              {
                path: "details/:name",
                element: <Details />,
                loader: async ({ params }) => {
                  return FetchDataLoader(params);
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);
