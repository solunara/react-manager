import { createBrowserRouter, Navigate } from "react-router-dom"
import Welcome from "@/views/common/Welcome"
import Login from "@/views/login/Login"
import ErrPage404 from "@/views/common/404"
import ErrPage403 from "@/views/common/403"
import Layout from "@/views/layout"

const router = [
  {
    path: "/",
    element: <Navigate to='/home' />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Welcome />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to='/404' />
  },
  {
    path: "/404",
    element: <ErrPage404 />
  },
  {
    path: "/403",
    element: <ErrPage403 />
  }
]

export default createBrowserRouter(router)
