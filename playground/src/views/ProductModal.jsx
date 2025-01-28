import { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';

function ProductModal({
  product,
  onCloseModal,
  onEditProduct,
  onCreateProduct,
}) {
  const productModalRef = useRef(null);

  useEffect(() => {
    productModalRef.current = new bootstrap.Modal('#productModal', {
      keyboard: false,
    });
  }, []);

  const handleAddImage = () => {
    onEditProduct((prevData) => {
      const newImages = [...prevData.imagesUrl];
      newImages.push("");
      return { ...prevData, imagesUrl: newImages };
    });
  }

  const handleRemoveImage = () => {
    onEditProduct((prevData) => {
      const newImages = [...prevData.imagesUrl];
      newImages.pop();
      return { ...prevData, imagesUrl: newImages };
    });
  }

  const handleImageChange = (index, value) => {
    onEditProduct((prevData) => {
      const newImages = [...prevData.imagesUrl];
      newImages[index] = value;
      return { ...prevData, imagesUrl: newImages };
    });
  }

  const handleFormChange = (e) => {
    const { id, value, type, checked } = e.target;
    onEditProduct((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
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
                    className='form-control mb-2'
                    placeholder='請輸入主圖連結'
                    value={product.imageUrl}
                    onChange={handleFormChange}
                  />
                  <img
                    className='img-fluid mb-2'
                    src={product.imageUrl}
                    alt='主圖'
                  />
                </div>

                <div>
                  {product.imagesUrl.map((image, index) => (
                    <div key={index}>
                      <input
                        type='text'
                        className='form-control mb-2'
                        placeholder={`副圖連結 ${index + 1}`}
                        value={image}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                      />
                      {image && (
                        <img
                          src={image}
                          alt={`副圖 ${index + 1}`}
                        // className='img-preview mb-2'
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className='d-flex justify-content-between'>
                  {product.imagesUrl.length < 5 && product.imagesUrl[product.imagesUrl.length - 1] !== "" && (
                    <button
                      className='btn btn-outline-primary btn-sm w-100'
                      onClick={handleAddImage}>新增副圖</button>
                  )}
                  {product.imagesUrl.length >= 1 && (
                    <button
                      className='btn btn-outline-danger btn-sm w-100'
                      onClick={handleRemoveImage}>取消副圖</button>
                  )}
                </div>
              </div>
              <div className='col-sm-8'>
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'> 標題 </label>
                  <input
                    id='title'
                    type='text'
                    className='form-control'
                    placeholder='請輸入標題'
                    value={product.title}
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
                      value={product.category}
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
                      value={product.unit}
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
                      value={product.originPrice}
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
                      value={product.price}
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
                    value={product.description}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                <div className='mb-3'>
                  <label htmlFor='content' className='form-label'> 說明內容 </label>
                  <textarea
                    id='content'
                    className='form-control'
                    placeholder='請輸入說明內容'
                    value={product.content}
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
                      checked={product.isEnabled}
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