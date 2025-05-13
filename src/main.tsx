import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import BaseRouter from "./router";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={BaseRouter} />,
);
