import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound";

const BaseRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default BaseRouter;
