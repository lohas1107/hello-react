export default function HomePage() {
  return (
    <div className="container py-4">
      <header className="mb-5">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">質感。選物</h1>
            <p className="col-md-8 fs-4">
              探索我們精心挑選的商品系列，為您的生活增添品味與風格。 <br />
              每一件商品都經過嚴格篩選，確保品質與設計兼具。
            </p>
            <button
              className="btn btn-primary btn-lg"
              type="button"
              onClick={() => (window.location.href = "/#/products")}
            >
              立即選購
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="row align-items-md-stretch">
          <div className="col-md-6 mb-4">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>新品上市</h2>
              <p>探索最新上架的精選商品，走在時尚尖端。</p>
              <button className="btn btn-outline-light" type="button">
                查看更多
              </button>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>熱銷推薦</h2>
              <p>精選最受歡迎的商品，讓您輕鬆找到心儀之選。</p>
              <button className="btn btn-outline-secondary" type="button">
                查看更多
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 py-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">居家生活</h5>
                <p className="card-text">打造舒適溫馨的生活空間。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">文具精品</h5>
                <p className="card-text">提升工作與學習的品質。</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">個人配件</h5>
                <p className="card-text">展現獨特的個人風格。</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
