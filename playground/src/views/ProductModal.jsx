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
        aria-hidden="true"
        ref={productModalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <h1>Product Modal</h1>
            <div className='model-footer'>
              <button 
                className='btn btn-outline-secondary' 
                onClick={onCloseModal}>
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductModal;