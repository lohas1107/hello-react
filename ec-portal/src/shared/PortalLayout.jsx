import { Outlet } from "react-router-dom";
import PortalHeader from "./PortalHeader";  
import PortalFooter from "./PortalFooter";

const PortalLayout = () => {
  return (
    <div className="container">
      <PortalHeader />
      <Outlet />
      <PortalFooter />
    </div>
  );
};

export default PortalLayout;