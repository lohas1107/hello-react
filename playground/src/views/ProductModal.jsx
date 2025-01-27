import { useState, useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';
import { api } from '../api/api';

function ProductModal({
  onCloseModal,
  onUpdateProductList,
}) {
  const productModalRef = useRef(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    productModalRef.current = new bootstrap.Modal('#productModal', {
      keyboard: false,
    });
  }, []);

  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  }

  const onCreateProduct = async () => {
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
        onCloseModal();
        onUpdateProductList();
      })
      .catch((err) => {
        console.error("新增失敗", err.response.data.message);
      });
  }

  return (
    <div
      id="productModal"
      className="modal"
      tabIndex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
      ref={productModalRef}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content border-0">
          <div className='modal-header'>
            <h3 id='productModalLabel' className='modal-title'>
              <span>建立產品</span>
            </h3>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col-sm-4'>
                <div className='mb-3'>
                  <label htmlFor='imageUrl' className='form-label'> 圖片連結 </label>
                  <input
                    id='imageUrl'
                    type='text'
                    className='form-control'
                    placeholder='請輸入圖片連結'
                    value={formData.imageUrl}
                    onChange={handleFormChange}
                  />
                </div>
                <img
                  src={formData.imageUrl}
                  alt='主圖'
                  className='img-fluid'
                />
              </div>
              <div className='col-sm-8'>
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'> 標題 </label>
                  <input
                    id='title'
                    type='text'
                    className='form-control'
                    placeholder='請輸入標題'
                    value={formData.title}
                    onChange={handleFormChange}
                  />
                </div>
                <div className='row mb-3'>
                  <div className='col-md-6'>
                    <label htmlFor='category' className='form-label'> 分類 </label>
                    <input
                      id='category'
                      type='text'
                      className='form-control'
                      placeholder='請輸入分類'
                      value={formData.category}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='unit' className='form-label'> 單位 </label>
                    <input
                      id='unit'
                      type='text'
                      className='form-control'
                      placeholder='請輸入單位'
                      value={formData.unit}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label htmlFor='originPrice' className='form-label'> 原價 </label>
                    <input
                      id='originPrice'
                      type='number'
                      className='form-control'
                      placeholder='請輸入原價'
                      value={formData.originPrice}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='price' className='form-label'> 售價 </label>
                    <input
                      id='price'
                      type='number'
                      className='form-control'
                      placeholder='請輸入售價'
                      value={formData.price}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <hr />
                <div className='mb-3'>
                  <label htmlFor='description' className='form-label'> 產品描述 </label>
                  <textarea
                    id='description'
                    className='form-control'
                    placeholder='請輸入產品描述'
                    value={formData.description}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                <div className='mb-3'>
                  <label htmlFor='content' className='form-label'> 說明內容 </label>
                  <textarea
                    id='content'
                    className='form-control'
                    placeholder='請輸入說明內容'
                    value={formData.content}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                <div className='mb-3'>
                  <div className='form-check'>
                    <label className='form-check-label' htmlFor='isEnabled'> 是否啟用 </label>
                    <input
                      id='isEnabled'
                      type='checkbox'
                      className='form-check-input'
                      checked={formData.isEnabled}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              className='btn btn-outline-secondary'
              onClick={onCloseModal}>
              取消
            </button>
            <button
              className='btn btn-primary'
              onClick={onCreateProduct}>
              新增
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;