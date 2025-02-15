import { createHashRouter } from "react-router-dom";
import ShopLayout from "./shop/ShopLayout";
import HomePage from "./home/HomePage";
import ProductList from "./product/ProductList";
import ProductModel from "./product/ProductModel";
import ErrorPage from "./shop/ErrorPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "products/:id",
        element: <ProductModel />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
