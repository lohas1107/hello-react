import { Outlet, useNavigate } from "react-router-dom";
import PortalHeader from "./PortalHeader";
import PortalFooter from "./PortalFooter";
import { admin } from "../api/admin";

const PortalLayout = () => {
  const navigate = useNavigate();

  (async () => {
    const isAuth = await admin.checkLogin();
    if (!isAuth) {
      navigate("/");
    }
  })();

  return (
    <div className="container">
      <PortalHeader />
      <Outlet />
      <PortalFooter />
    </div>
  );
};

export default PortalLayout;