import PropTypes from 'prop-types';

function ShoppingCart({
  cart,
  updateCart,
  deleteCart,
  clearCart,
}) {
  return (
    <>
      <div className="mt-3">
        <button
          className="btn btn-outline-danger"
          onClick={clearCart}
        >清空購物車</button>
      </div>

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
          {cart?.carts &&
            cart?.carts.map((item) => (
              <tr key={item.id}>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => { deleteCart(item.id) }}
                  >刪除</button>
                </td>
                <td>{item.product.title}</td>
                <td>
                  <div className="input-group input-group-sm">
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      defaultValue={item.qty}
                      key={item.qty}
                      onChange={(e) => { updateCart(item.id, Number(e.target.value)) }}
                    />
                    <div className="input-group-text">{item.product.unit}</div>
                  </div>
                </td>
                <td className="text-end"> {item.total} </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end">總計</td>
            <td className="text-end">{cart?.total}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

ShoppingCart.propTypes = {
  cart: PropTypes.object,
  updateCart: PropTypes.func,
  deleteCart: PropTypes.func,
  clearCart: PropTypes.func,
};

export default ShoppingCart;
