import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import ShoppingCart from "./ShoppingCart";
import OrderForm from "./OrderForm";
import { api } from "../api/api";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const [cart, setCart] = useState({});

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

  const getCart = async () => {
    await api.getCart()
      .then((res) => {
        setCart(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const addToCart = async (productId, qty) => {
    await api.addToCart(productId, qty)
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const updateCart = async (productId, qty) => {
    await api.updateCart(productId, qty)
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const deleteCart = async (productId) => {
    await api.deleteCart(productId)
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const clearCart = async () => {
    await api.clearCart()
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="mt-4">
            <ProductList
              products={products}
              onAddToCart={addToCart}
            />
          </div>
          <div className="mt-4">
            <Pagination
              pagination={pagination}
              onPageChange={getProducts}
              onAddToCart={addToCart}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mt-5">
            <ShoppingCart
              cart={cart}
              updateCart={updateCart}
              deleteCart={deleteCart}
              clearCart={clearCart}
            />
          </div>
          <div className="mt-5">
            <OrderForm
              onSubmitCompleted={getCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;