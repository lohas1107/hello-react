import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "../components/Pagination";
import LoadingButton from "../components/LoadingButton";
import { api } from "../api/api";

function ProductList({
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
    <div className="container">
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
                    onClick={() => navigate(`/products/${product.id}`, { state: { productId: product.id } })}
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
      <div className="mt-4">
        <Pagination
          pagination={pagination}
          onPageChange={getProducts}
        />
      </div>
    </div>
  );
}

ProductList.propTypes = {
  onAddToCart: PropTypes.func,
};

export default ProductList;