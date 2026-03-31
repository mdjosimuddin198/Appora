import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Hero from "../components/homepage/Hero";
import AppDetails from "../pages/AppDetails";
import Apps from "../apps/Apps";
import NotFound from "../components/NotFound";
import InstalledApps from "../pages/InstalledApps";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Hero /> },
      { path: "/apps", element: <Apps /> },
      { path: "/apps/:id", element: <AppDetails /> },
      { path: "installation", element: <InstalledApps /> },
    ],
  },
]);

export default Router;
