import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import LoadingButton from "../components/LoadingButton";
import PropTypes from "prop-types";
import { api } from "../api/api";

function ProductInfoPage({
  onAddToCart,
}) {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getProduct = useCallback(async () => {
    const productId = location.pathname.split('/').pop();

    await api
      .getProduct(productId)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, [location.pathname]);

  const handleAddToCart = async (productId, qty) => {
    await onAddToCart(productId, qty);
  };

  useEffect(() => {
    getProduct();
    setQuantity(1);
  }, [getProduct]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid" src={product.imageUrl} alt={product.title} />
        </div>
        <div className="col-md-7">
          <h2>{product.title}</h2>
          <p className="mt-3">{product.description}</p>
          <p>{product.content}</p>
          <del className="d-block">原價：${product.origin_price}</del>
          <p className="h4">特價：${product.price}</p>
          <div className="input-group mb-3" style={{ maxWidth: "160px" }}>
            <button
              className="btn btn-danger"
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((pre) => (pre === 1 ? pre : pre - 1))}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <input
              className="form-control text-center"
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              className="btn btn-primary"
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((pre) => pre + 1)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <LoadingButton
            text="加入購物車"
            buttonClassName="btn btn-primary"
            spinnerColor="#ffffff"
            onClick={() => handleAddToCart(product.id, quantity)}
          />
        </div>
      </div>
    </div>
  );
}

ProductInfoPage.propTypes = {
  onAddToCart: PropTypes.func,
};

export default ProductInfoPage;
