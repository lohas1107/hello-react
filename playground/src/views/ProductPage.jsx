import { useState, useEffect, useRef } from 'react'
import ProductList from './ProductList'
import ProductModal from './ProductModal';
import LoginPage from './LoginPage'
import * as bootstrap from 'bootstrap';

import { admin } from '../api/admin';
import { api } from '../api/api';

function ProductPage() {
  const [isAuth, setIsAuth] = useState(false);

  const [products, setProducts] = useState([]);
  const [modalMode, setModalMode] = useState(null);
  const productModalRef = useRef(null);

  const initProduct = {
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
  };

  const [formData, setFormData] = useState(initProduct);

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

  const updateProduct = async (product) => {
    const productData = {
      data: {
        ...product,
        origin_price: Number(product.originPrice),
        price: Number(product.price),
        is_enabled: product.isEnabled ? 1 : 0,
        imagesUrl: product.imagesUrl,
      },
    };

    await api
      .updateProduct(productData)
      .then(() => {
        closeModal();
        getProducts();
      })
      .catch((err) => {
        console.error("更新失敗", err.response.data.message);
      });
  }

  const deleteProduct = async (product) => {
    await api
      .deleteProduct(product.id)
      .then(() => {
        closeModal();
        getProducts();
      })
      .catch((err) => {
        console.error("刪除失敗", err.response.data.message);
      }); 
  }

  const openModal = (mode, product) => {
    setModalMode(mode);
    setFormData(product);
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
            <div className="text-end mt-4">
              <button
                className="btn btn-primary"
                onClick={() => openModal('create', initProduct)}>
                建立產品
              </button>
            </div>
            <div className="mt-4">
              <ProductList
                products={products}
                onEditProduct={openModal}
              />
            </div>
          </div>
        )
        : (<LoginPage />)
      }

      <ProductModal
        mode={modalMode}
        product={formData}
        onCloseModal={closeModal}
        onEditProduct={setFormData}
        onCreateProduct={createProduct}
        onUpdateProduct={updateProduct}
        onDeleteProduct={deleteProduct}
      />
    </>
  );
}

export default ProductPage