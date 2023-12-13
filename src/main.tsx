import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.scss";
import { Index } from "./pages/Index/Index";
import { Authorization } from "./pages/Authorization/Authorization";
import { PersonalAccount } from "./pages/PersonalAccount/PersonalAccount";
import { Cart } from "./pages/Cart/Cart";
import { OrderHistory } from "./pages/OrderHistory/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth",
    element: <Authorization />,
  },
  {
    path: "/account",
    element: <PersonalAccount />,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/orders",
    element: <OrderHistory></OrderHistory>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
