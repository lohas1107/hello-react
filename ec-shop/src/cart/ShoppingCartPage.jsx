import { useState, useEffect } from "react";
import ShoppingCart from "./ShoppingCart";
import OrderForm from "./OrderForm";
import { api } from "../api/api";

function ShoppingCartPage() {
  const [cart, setCart] = useState({});

  const getCart = async () => {
    await api.getCart()
      .then((res) => {
        setCart(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const updateCart = async (productId, qty) => {
    await api.updateCart(productId, qty)
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const deleteCart = async (productId) => {
    await api.deleteCart(productId)
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const clearCart = async () => {
    await api.clearCart()
      .then(() => {
        getCart();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-lg">
          <div className="card border-1">
            <div className="card-body">
              <ShoppingCart
                cart={cart}
                updateCart={updateCart}
                deleteCart={deleteCart}
                clearCart={clearCart}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4 mt-4">
        <div className="col-lg">
          <div className="card border-1">
            <div className="card-body">
              <h5 className="card-title mb-4">訂購資訊</h5>
              <OrderForm onSubmitCompleted={getCart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;