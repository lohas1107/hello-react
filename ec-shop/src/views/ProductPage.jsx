import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { api } from "../api/api";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = async (page = 1) => {
    await api.getProducts(page)
      .then((res) => {
        setProducts(res.data.products);
        setPagination(res.data.pagination);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="mt-4">
        <ProductList products={products} />
      </div>
      <div className="mt-4">
        <Pagination
          pagination={pagination}
          onPageChange={getProducts}
        />
      </div>
    </div>
  );
}

export default ProductPage;