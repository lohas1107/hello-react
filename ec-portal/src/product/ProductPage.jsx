import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { pushMessage } from '../redux/toastSlice';
import ProductList from './ProductList'
import Pagination from '../components/Pagination'
import ProductModal from './ProductModal';
import * as bootstrap from 'bootstrap';
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
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const [modalMode, setModalMode] = useState(null);
  const [formData, setFormData] = useState(initProduct);
  const productModalRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
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
        dispatch(pushMessage({
          text: err.response.data.message,
          status: "failed",
        }));
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
        dispatch(pushMessage({
          text: "建立產品成功",
          status: "success",
        }));
      })
      .catch((err) => {
        dispatch(pushMessage({
          text: err.response.data.message,
          status: "failed",
        }));
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
        dispatch(pushMessage({
          text: "更新產品成功",
          status: "success",
        }));
      })
      .catch((err) => {
        dispatch(pushMessage({
          text: err.response.data.message,
          status: "failed",
        }));
      });
  }

  const deleteProduct = async (product) => {
    await api
      .deleteProduct(product.id)
      .then(() => {
        closeModal();
        getProducts();
        dispatch(pushMessage({
          text: "刪除產品成功",
          status: "success",
        }));
      })
      .catch((err) => {
        dispatch(pushMessage({
          text: err.response.data.message,
          status: "failed",
        }));
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
      <div className="container">
        <div className="mt-4">
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