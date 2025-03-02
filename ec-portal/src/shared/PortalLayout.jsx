import { Outlet, useNavigate } from "react-router-dom";
import PortalHeader from "./PortalHeader";
import PortalFooter from "./PortalFooter";
import Toast from "../components/Toast";
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
      <Toast />
    </div>
  );
};

export default PortalLayout;