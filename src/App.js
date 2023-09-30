import React from "react";
import ReactDOM from "react-dom/client";
import {headData } from "./utilities/data";
import HeadingComp from "./components/HeadingComp";
import BodyComp from "./components/BodyComp";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import MenuPage from "./components/MenuPage";

const App = () => {
  return (
    <div>
      <HeadingComp data={headData}></HeadingComp>
      <Outlet></Outlet>
    </div>
  );
};

const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<App></App>,
      children:[
        {
          path:"/",
          element:<BodyComp></BodyComp>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/restaurant/:resId",
          element:<MenuPage></MenuPage>
        }
      ],
      errorElement:<ErrorPage></ErrorPage>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
