function ProductList({
  products,
  onSelectProduct
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>查看細節</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.origin_price}</td>
            <td>{product.price}</td>
            <td>{product.is_enabled ? "啟用" : "未啟用"}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => onSelectProduct(product)}>
                查看細節
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;