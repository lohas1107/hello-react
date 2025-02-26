import { createHashRouter } from "react-router-dom";
import ShopLayout from "./shop/ShopLayout";
import HomePage from "./home/HomePage";
import ProductListPage from "./product/ProductListPage";
import ProductInfoPage from "./product/ProductInfoPage";
import ShoppingCartPage from "./cart/ShoppingCartPage";
import AboutPage from "./about/AboutPage";
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
        element: <ProductListPage />,
      },
      {
        path: "products/:id",
        element: <ProductInfoPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "cart",
        element: <ShoppingCartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
