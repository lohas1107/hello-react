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
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    unit: "",
    originPrice: "",
    price: 0,
    description: "",
    content: "",
    isEnabled: false,
    imageUrl: "",
    imagesUrl: [],
  });

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

  const createProduct = async () => {
    const productData = {
      data: {
        ...formData,
        origin_price: Number(formData.originPrice),
        price: Number(formData.price),
        is_enabled: formData.isEnabled ? 1 : 0,
        imagesUrl: formData.imagesUrl,
      },
    };

    await api
      .createProduct(productData)
      .then(() => {
        closeModal();
        getProducts();
      })
      .catch((err) => {
        console.error("新增失敗", err.response.data.message);
      });
  }

  const editProduct = (product) => {
    openModal();
  }

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
                  onEditProduct={editProduct}
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
        product={formData}
        onCloseModal={closeModal}
        onEditProduct={setFormData}
        onCreateProduct={createProduct}
      />
    </>
  );
}

export default ProductPage