import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Index, { loader as customersLoader, loader } from "./pages/Index";
import NewCustomers, {
  action as newCustomersAction,
} from "./pages/NewCustomers";
import EditCustomer, {
  loader as editCustomerLoader,
  action as editCustomerAction,
} from "./pages/EditCustomer";
import ErrorPage from "./components/ErrorPage";
import { action as deleteCustomerAction } from "./components/Customer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customers/new",
        element: <NewCustomers />,
        action: newCustomersAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customer/:customerId/edit",
        element: <EditCustomer />,
        loader: editCustomerLoader,
        action: editCustomerAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customers/:customerId/delete",
        action: deleteCustomerAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
