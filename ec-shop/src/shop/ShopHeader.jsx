import { Link } from "react-router-dom";

const PORTAL_BASE_URL = import.meta.env.VITE_PORTAL_BASE_URL;

export default function ShopHeader() {
  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <Link to="/" className="text-decoration-none">
              <h1 className="h3 mb-0 text-dark d-flex align-items-center">
                <span className="me-2">質感。選物</span>
                <small className="text-muted fs-6 fw-light">Elegant Select</small>
              </h1>
            </Link>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-start align-items-md-center">
              <nav className="mb-3 mb-md-0 me-md-4">
                <div className="d-flex flex-column flex-md-row">
                  <Link to="/products" className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                    商品列表
                  </Link>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert('Coming soon!') }} className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                    商品分類
                  </a>
                  <Link to="/about" className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                    關於我們
                  </Link>
                  <Link to="/cart" className="btn btn-outline-dark mb-2 mb-md-0">
                    購物車
                  </Link>
                </div>
              </nav>
              <div className="border-start ps-md-4">
                <a href={`${PORTAL_BASE_URL}/#/`} className="btn btn-dark">
                  登入後台
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}