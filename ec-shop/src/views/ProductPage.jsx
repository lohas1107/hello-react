import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import ShoppingCart from "./ShoppingCart";
import { api } from "../api/api";

function ProductPage() {
  // 商品列表
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = async (page = 1) => {
    await api.getProducts(page)
      .then((res) => {
        setProducts(res.data.products);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // 購物車
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    await api.getCart()
      .then((res) => {
        setCart(res.data.cart);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="mt-4">
            <ProductList products={products} />
          </div>
          <div className="mt-4">
            <Pagination
              pagination={pagination}
              onPageChange={getProducts}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mt-5">
            <ShoppingCart cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;