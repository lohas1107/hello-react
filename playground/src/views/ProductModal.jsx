import { useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';

function ProductModal({ onCloseModal }) {
  const productModalRef = useRef(null);

  useEffect(() => {
    productModalRef.current = new bootstrap.Modal('#productModal', {
      keyboard: false,
    });
  }, []);

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
                <label htmlFor='imageUrl' className='form-label'> 圖片連結 </label>
                <input
                  id='imageUrl'
                  type='text'
                  className='form-control'
                  placeholder='請輸入圖片連結'
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
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='unit' className='form-label'> 單位 </label>
                    <input
                      id='unit'
                      type='text'
                      className='form-control'
                      placeholder='請輸入單位'
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
                    />
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor='price' className='form-label'> 售價 </label>
                    <input
                      id='price'
                      type='number'
                      className='form-control'
                      placeholder='請輸入售價'
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
                  ></textarea>
                </div>
                <div className='mb-3'>
                  <label htmlFor='content' className='form-label'> 說明內容 </label>
                  <textarea
                    id='content'
                    className='form-control'
                    placeholder='請輸入說明內容'
                  ></textarea>
                </div>
                <div className='mb-3'>
                  <div className='form-check'>
                    <label className='form-check-label' htmlFor='isEnabled'> 是否啟用 </label>
                    <input
                      id='isEnabled'
                      type='checkbox'
                      className='form-check-input'
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
              className='btn btn-primary' >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;