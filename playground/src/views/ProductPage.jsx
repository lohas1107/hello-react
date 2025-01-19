import { useState } from 'react'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <h2>產品列表</h2>
          <ProductList selectItemHandler={setSelectedProduct} />
        </div>
        <div className="col-md-7">
          <h2>產品細節</h2>
          <ProductDetail detail={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage