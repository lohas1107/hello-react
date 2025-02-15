export default function ShopFooter() {
  return (
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
              <a href="#" className="text-decoration-none text-muted">配送方式</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-muted">付款方式</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-muted">退換貨政策</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 text-center">
          <h5 className="mb-3">關於我們</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/ec-shop/#/about" className="text-decoration-none text-muted">品牌故事</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-muted">聯絡我們</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-muted">隱私權政策</a>
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
  );
}