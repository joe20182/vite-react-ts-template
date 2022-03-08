import { lazy } from 'react'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/views/Home')),
  },
  {
    path: '/about',
    component: lazy(() => import('@/views/About')),
    routes: [
      {
        path: '/about/A',
        component: lazy(() => import('@/views/About/A')),
      },
    ],
  },
  // {
  //   path: "*",
  //   component: lazy(() => import("@/views/Home")),
  // },
]

export default routesConfig
