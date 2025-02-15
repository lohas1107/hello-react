import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../components/Pagination";
import LoadingButton from "../components/LoadingButton";
import { api } from "../api/api";

function ProductListPage({
  onAddToCart,
}) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = async (page = 1) => {
    await api.getProducts(page)
      .then((res) => {
        setProducts(res.data.products);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-2">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 border-0 shadow-sm">
              <div
                className="card-img-top"
                style={{
                  height: "300px",
                  backgroundImage: `url(${product.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
              </div>
              <div className="card-footer bg-white border-top-0 pb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <del className="text-muted me-2">NT$ {product.origin_price}</del>
                    <span className="h5 text-danger mb-0">NT$ {product.price}</span>
                  </div>
                  <div className="btn-group">
                    <LoadingButton
                      text="查看商品"
                      buttonClassName="btn btn-outline-dark"
                      spinnerColor="#212529"
                      onClick={() => navigate(`/products/${product.id}`, { state: { productId: product.id } })}
                    />
                    <LoadingButton
                      text="加入購物車"
                      buttonClassName="btn btn-dark"
                      spinnerColor="#ffffff"
                      onClick={() => onAddToCart(product.id, 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Pagination pagination={pagination} onPageChange={getProducts} />
      </div>
    </div>
  );
}

ProductListPage.propTypes = {
  onAddToCart: PropTypes.func,
};

export default ProductListPage;