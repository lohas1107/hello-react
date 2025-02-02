import PropTypes from 'prop-types';

function ShoppingCartPage({ cart }) {

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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

ShoppingCartPage.propTypes = {
  cart: PropTypes.array,
};

export default ShoppingCartPage;