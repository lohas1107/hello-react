import { useState, useEffect } from "react";
import LoadingButton from "./LoadingButton";
import PropTypes from "prop-types";

function ProductModel({
  product,
  onAddToCart,
  onCloseModal,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async (productId, qty) => {
    await onAddToCart(productId, qty);
    onCloseModal();
  };

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  return (
    <div
      id="productModal"
      className="modal"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img className="w-100" src={product.imageUrl} />
            <p className="mt-3">{product.description}</p>
            <p>{product.content}</p>
            <del>原價：${product.origin_price}</del>
            <p>特價：${product.price}</p>
            <div className="d-flex">
              <button
                id="button-addon1"
                className="btn btn-danger"
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((pre) => (pre === 1 ? pre : pre - 1))}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                className="form-control"
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <button
                id="button-addon2"
                className="btn btn-primary"
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((pre) => pre + 1)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onCloseModal}
            >
              關閉
            </button>
            <LoadingButton
              text="加入購物車"
              buttonClassName="btn btn-primary"
              spinnerColor="#fff"
              onClick={() => handleAddToCart(product.id, quantity)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductModel.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
  onCloseModal: PropTypes.func,
};

export default ProductModel;
