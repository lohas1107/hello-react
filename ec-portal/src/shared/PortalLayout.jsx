import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PortalHeader from "./PortalHeader";  
import PortalFooter from "./PortalFooter";
import { admin } from "../api/admin";

const PortalLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const isLoggedIn = await admin.checkLogin();
      if (!isLoggedIn) {
        navigate("/");
      } else {
        navigate("/products");
      }
    })();
  }, [navigate]);

  return (
    <div className="container">
      <PortalHeader />
      <Outlet />
      <PortalFooter />
    </div>
  );
};

export default PortalLayout;