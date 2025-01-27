import { useState, useEffect, useRef } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import ProductModal from './ProductModal';
import LoginPage from './LoginPage'
import * as bootstrap from 'bootstrap';

import { admin } from '../api/admin';
import { api } from '../api/api';

function ProductPage() {
  const [isAuth, setIsAuth] = useState(false);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productModalRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const isLoggedIn = await admin.checkLogin();
      setIsAuth(isLoggedIn);
    };
    init();

    getProducts();

    productModalRef.current = new bootstrap.Modal('#productModal', {
      keyboard: false,
    });
  }, []);

  const getProducts = async () => {
    await api
      .getProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  };

  const openModal = () => {
    productModalRef.current.show();
  }

  const closeModal = () => {
    productModalRef.current.hide();
  }

  return (
    <>
      {isAuth
        ? (
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6">
                <button className="btn btn-primary" onClick={openModal}>
                  建立產品
                </button>
                <h2>產品列表</h2>
                <ProductList
                  products={products}
                  onSelectProduct={setSelectedProduct}
                />
              </div>
              <div className="col-md-6">
                <h2>產品細節</h2>
                <ProductDetail detail={selectedProduct} />
              </div>
            </div>
          </div>
        )
        : (<LoginPage />)
      }

      <ProductModal
        onCloseModal={closeModal}
        onUpdateProductList={getProducts}
      />
    </>
  );
}

export default ProductPage