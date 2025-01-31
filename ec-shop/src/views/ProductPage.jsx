import { useState, useEffect } from "react";
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
    <table>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <div style={{
                height: "100px",
                width: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${product.imageUrl})`,
              }} />
            </td>
            <td>{product.title}</td>
            <td>
              <del className="h6">原價： {product.origin_price} 元</del>
              <div className="h5">特價： {product.price} 元</div>
            </td>
            <td>
              <div className="btn-group btn-group-sm">
                <button className="btn btn-outline-secondary">查看更多</button>
                <button className="btn btn-outline-danger">加入購物車</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductPage;