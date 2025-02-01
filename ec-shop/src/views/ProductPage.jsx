import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { api } from "../api/api";

function ProductPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await api.getProducts(1)
      .then((res) => {
        setProducts(res.data.products);
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
      <ProductList products={products} />
    </div>
  );
}

export default ProductPage;