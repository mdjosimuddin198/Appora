import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../components/homepage/Hero";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Hero /> }],
  },
]);

export default Router;
