import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <div className="container">
      <header className="py-3 mb-4 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <a href="/#/" className="text-decoration-none">
                <h1 className="h3 mb-0 text-dark d-flex align-items-center">
                  <span className="me-2">質感。選物</span>
                  <small className="text-muted fs-6 fw-light">Elegant Select</small>
                </h1>
              </a>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-start align-items-md-center">
                <nav className="mb-3 mb-md-0 me-md-4">
                  <div className="d-flex flex-column flex-md-row">
                    <a href="/products" className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                      商品列表
                    </a>
                    <a href="/categories" className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                      商品分類
                    </a>
                    <a href="/about" className="btn btn-link text-dark text-decoration-none mb-2 mb-md-0 me-md-3">
                      關於我們
                    </a>
                    <a href="/cart" className="btn btn-outline-dark mb-2 mb-md-0">
                      購物車
                    </a>
                  </div>
                </nav>
                <div className="border-start ps-md-4">
                  <a href="/login" className="btn btn-dark">
                    登入
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="py-5 mt-5 bg-light">
        <div className="row g-4">
          <div className="col-lg-3 text-center">
            <h5 className="mb-3">質感。選物</h5>
            <p className="text-muted">
              專注於提供優質生活選物，<br />為您打造品味生活空間。
            </p>
          </div>
          <div className="col-lg-3 text-center">
            <h5 className="mb-3">購物說明</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/shipping" className="text-decoration-none text-muted">配送方式</a>
              </li>
              <li className="mb-2">
                <a href="/payment" className="text-decoration-none text-muted">付款方式</a>
              </li>
              <li className="mb-2">
                <a href="/return" className="text-decoration-none text-muted">退換貨政策</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 text-center">
            <h5 className="mb-3">關於我們</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-muted">品牌故事</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-decoration-none text-muted">聯絡我們</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-decoration-none text-muted">隱私權政策</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 text-center">
            <h5 className="mb-3">追蹤我們</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://facebook.com" className="text-decoration-none text-muted">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="https://instagram.com" className="text-decoration-none text-muted">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="https://line.me" className="text-decoration-none text-muted">Line</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top pt-4 mt-4">
          <p className="text-muted text-center mb-0">
            © 2025 質感。選物 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}