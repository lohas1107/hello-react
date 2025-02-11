import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductModal from "./ProductModel";
import LoadingButton from "./LoadingButton";
import * as bootstrap from "bootstrap";
import { api } from "../api/api";

function ProductList({
  products,
  onAddToCart,
}) {
  const productModalRef = useRef(null);
  const [product, setProduct] = useState({});

  const getProduct = async (productId) => {
    await api
      .getProduct(productId)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const openModal = async (productId) => {
    await getProduct(productId);
    productModalRef.current.show();
  };

  const closeModal = () => {
    productModalRef.current.hide();
  };

  useEffect(() => {
    productModalRef.current = new bootstrap.Modal("#productModal", {
      keyboard: false,
    });
  }, []);

  return (
    <div className="container">
      <ProductModal
        product={product}
        onAddToCart={onAddToCart}
        onCloseModal={closeModal}
      />
      <table className="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div style={{
                  height: "100px",
                  width: "100px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${product.imageUrl})`,
                }} />
              </td>
              <td>{product.title}</td>
              <td>
                <del className="h6">原價：{product.origin_price} 元</del>
                <div className="h5">特價：{product.price} 元</div>
              </td>
              <td>
                <div className="btn-group btn-group-sm">
                  <LoadingButton
                    text="查看更多"
                    buttonClassName="btn btn-outline-secondary"
                    spinnerColor="#6c757d"
                    onClick={() => openModal(product.id)}
                  />
                  <LoadingButton
                    text="加入購物車"
                    buttonClassName="btn btn-outline-danger"
                    spinnerColor="#dc3545"
                    onClick={() => onAddToCart(product.id, 1)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;