import PropTypes from "prop-types";

function ProductList({
  products,
  onAddToCart,
}) {

  return (
    <table className="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
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
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onAddToCart(product.id, 1)}
                >加入購物車</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductList;