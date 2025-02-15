import { Outlet } from "react-router-dom";
import ShopHeader from "./ShopHeader";
import ShopFooter from "./ShopFooter";

export default function ShopLayout() {
  return (
    <div className="container">
      <ShopHeader />
      <Outlet />
      <ShopFooter />
    </div>
  );
}