import PropTypes from 'prop-types';

function ShoppingCart({ cart }) {

  return (
    <>
      <div className="mt-3">
        <button className="btn btn-outline-danger">清空購物車</button>
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
                  <button className="btn btn-outline-danger btn-sm">刪除</button>
                </td>
                <td>{item.product.title}</td>
                <td>
                  <div className="input-group input-group-sm">
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      defaultValue={item.qty} />
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
};

export default ShoppingCart;
