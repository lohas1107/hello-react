export default function AboutPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mb-4">質感。選物</h2>
          <p className="lead mb-4">
            我們相信，生活中的每個細節都值得用心對待
          </p>
          <hr className="my-5" />
        </div>
      </div>

      <div className="row g-4 align-items-center mb-5">
        <div className="col-md-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3"
            alt="品牌理念"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <h3 className="mb-4">品牌理念</h3>
          <p className="text-muted">
            成立於2025年，<br />
            「質感。選物」致力於為追求品味生活的您，<br />
            精心挑選每一件商品。<br />
            我們深信，優質的生活不僅是外表的精緻，<br />
            更是一種生活態度的展現。
          </p>
          <p className="text-muted">
            從居家用品到個人配件，<br />
            我們嚴選來自世界各地的優質商品，<br />
            期待能為您的生活帶來更多美好的可能。
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="text-center">
            <i className="fa-solid fa-magnifying-glass-dollar fs-2 text-primary mb-3"></i>
            <h4>嚴選品質</h4>
            <p className="text-muted">
              我們親自把關每一件商品，確保品質與價值相符
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <i className="fa-solid fa-truck fs-2 text-primary mb-3"></i>
            <h4>安心配送</h4>
            <p className="text-muted">
              提供快速且安全的配送服務，讓您安心購物
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <i className="fa-solid fa-headset fs-2 text-primary mb-3"></i>
            <h4>貼心服務</h4>
            <p className="text-muted">
              專業客服團隊，為您解答任何購物疑問
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h3 className="mb-4">與我們一起，打造理想的生活空間</h3>
          <p className="text-muted mb-4">
            我們期待能成為您生活中的好夥伴，一同探索質感生活的無限可能。
          </p>
          <a href="/#/products" className="btn btn-primary">
            開始選購
          </a>
        </div>
      </div>
    </div>
  );
}