import { useState, useEffect } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import LoginPage from './LoginPage'
import { admin } from '../api/admin';

function ProductPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const init = async () => {
      const isLoggedIn = await admin.checkLogin();
      setIsAuth(isLoggedIn);
    };
    init();
  }, []);

  return (
    <>
      {isAuth
        ? (
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-6">
                <h2>產品列表</h2>
                <ProductList selectItemHandler={setSelectedProduct} />
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
    </>
  );
}

export default ProductPage