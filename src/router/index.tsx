import { createBrowserRouter, Navigate } from "react-router-dom"
import Welcome from "@/views/common/Welcome"
import ErrPage404 from "@/views/common/404"
import ErrPage403 from "@/views/common/403"

const router = [
  {
    path: "/",
    element: <Welcome />
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
