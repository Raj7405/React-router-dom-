import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "./Home/HomePage";
import About from "./about/About";
import BigSpinner from "./utilities/BigSpinner";
import ProductPage from "./feature/FeaturePage";
import Details from "./feature/Deatail";
import { FetchDataLoader } from "./function/FetchDataLoader";
import Error404 from "./Error404";
import ProtectedRoute from "./ProtectedRoute";
import DummyLogin from "./DummyLogin"; 
import Login from './Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path:'/login',
        element:<Login/>, 
      },
      {
        element:<ProtectedRoute/>,
        children:[
            {
              path: 'home',
              element: <HomePage/>,
              },
              {
                path: 'aboutus',
                element: <About/>,
                children:[
                  {
                    path:"bigspinner",
                    element: <BigSpinner/>,
                  }
                ]
              },
              {
                path: 'feature',
                element: <ProductPage/>,
                children:[
                  {
                    path:'details/:name',
                    element:<Details/>,
                    loader: async ({ params }) => {
                      return FetchDataLoader(params)
                    },
                  }
                ]
              }, 
            ]
        },   
      ]
    } 
  ]);