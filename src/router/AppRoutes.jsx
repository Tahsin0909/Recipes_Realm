import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Homepage/Home";
import AllRecipes from "../Components/AllRecipes/AllRecipes";
import AddRecipes from "../Components/AddRecipes/AddRecipes";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/allRecipes',
            element: <AllRecipes/>
        },
        {
            path:'/addRecipes',
            element: <AddRecipes/>
        }
      ]
    },
  ]);