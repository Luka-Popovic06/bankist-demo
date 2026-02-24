import { createBrowserRouter } from "react-router-dom";
import Transactions from "./Transaction";
import ErrorPage from "./Error";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "transactions",
        element: <Transactions />,
      },
    ],
  },
]);
export default router;
