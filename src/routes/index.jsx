import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../pages/admin/DashBoard";
import CategoryManager from "../pages/admin/CategoryManager";
import ProductManager from "../pages/admin/ProductManager";
import UserManager from "../pages/admin/UserManager";
import IndexUser from "../pages/user";
import IndexAdmin from "../layouts/admin/AdminLayout";
import OrderManager from "../pages/admin/OrderManager";
import Charts from "../pages/admin/Charts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IndexUser />,
  },
  {
    path: "/admin",
    element: <IndexAdmin />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },

      {
        path: "category",
        element: <CategoryManager />,
      },
      {
        path: "product",
        element: <ProductManager />,
      },
      {
        path: "order",
        element: <OrderManager />,
      },
      {
        path: "user-manager",
        element: <UserManager />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
]);

export default routes;
