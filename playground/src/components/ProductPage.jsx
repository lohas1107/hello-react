import { useState, useEffect, useRef } from 'react'
import ProductList from './ProductList'
import Pagination from './Pagination'
import ProductModal from './ProductModal';
import LoginPage from './LoginPage'
import * as bootstrap from 'bootstrap';

import { admin } from '../api/admin';
import { api } from '../api/api';

const initProduct = {
  id: "",
  title: "",
  category: "",
  unit: "",
  originPrice: 0,
  price: 0,
  description: "",
  content: "",
  isEnabled: false,
  imageUrl: "",
  imagesUrl: [],
};

function ProductPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const [modalMode, setModalMode] = useState(null);
  const [formData, setFormData] = useState(initProduct);
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

  const getProducts = async (page = 1) => {
    await api
      .getProducts(page)
      .then((res) => {
        setProducts(res.data.products);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        alert(err.response.data.message);
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
        alert(err.response.data.message);
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
        alert(err.response.data.message);
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
        alert(err.response.data.message);
      });
  }

  const openModal = (mode, product) => {
    setModalMode(mode);
    setFormData({
      ...product,
      originPrice: product.origin_price || 0,
      isEnabled: product.is_enabled === 1,
      imagesUrl: product.imagesUrl || [],
    });
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
            <Pagination
              pagination={pagination}
              onPageChange={getProducts}
            />
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