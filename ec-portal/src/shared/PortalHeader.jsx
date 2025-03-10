import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useDispatch } from "react-redux";
import { pushMessage } from "../redux/toastSlice";

const SHOP_BASE_URL = import.meta.env.VITE_SHOP_BASE_URL;

export default function PortalHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    api.logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        dispatch(pushMessage({
          text: err.response.data.message,
          status: "failed",
        }));
      });
  }

  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <Link to="/" className="text-decoration-none">
              <h1 className="h3 mb-0 text-dark d-flex align-items-center">
                <span className="me-2">質感。選物</span>
                <small className="text-muted fs-6 fw-light">Portal</small>
              </h1>
            </Link>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-start align-items-md-center">
              <nav className="mb-3 mb-md-0 me-md-4">
                <div className="d-flex flex-column flex-md-row">
                  <Link to="/admin/products" className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                    商品列表
                  </Link>
                  <a href={`${SHOP_BASE_URL}/#/`} className="btn btn-link text-dark text-decoration-none">
                    檢視商店
                  </a>
                </div>
              </nav>
              <div className="border-start ps-md-4">
                <button className="btn btn-dark" onClick={handleLogout}>登出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}