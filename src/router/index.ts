import { lazy } from "react";
import { RouteConfig } from "react-router-config";

const routesConfig: RouteConfig[] = [
  {
    path: "/home",
    component: lazy(() => import("../views/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("../views/About")),
  },
];

export default routesConfig;
