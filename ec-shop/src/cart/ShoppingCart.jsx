import LoadingButton from "../components/LoadingButton";
import PropTypes from 'prop-types';

function ShoppingCart({
  cart,
  updateCart,
  deleteCart,
  clearCart,
}) {
  return (
    <>
      <h5 className="card-title">購物車</h5>

      {cart?.carts?.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted mb-0">購物車是空的</p>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "8%" }}></th>
                  <th scope="col" style={{ width: "15%" }}></th>
                  <th scope="col" style={{ width: "32%" }}></th>
                  <th scope="col" style={{ width: "15%" }}></th>
                  <th scope="col" style={{ width: "15%" }}></th>
                  <th scope="col" style={{ width: "15%" }} className="text-end"></th>
                </tr>
              </thead>
              <tbody>
                {cart?.carts?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <LoadingButton
                        text="×"
                        buttonClassName="btn btn-outline-danger btn-sm"
                        spinnerColor="#dc3545"
                        onClick={() => deleteCart(item.id)}
                      />
                    </td>
                    <td>
                      <img src={item.product.imageUrl} alt={item.product.title} className="img-fluid" style={{ maxHeight: "80px" }} />
                    </td>
                    <td>{item.product.title}</td>
                    <td>NT$ {item.product.price}</td>
                    <td>
                      <div className="input-group input-group-sm" style={{ width: "100px" }}>
                        <input
                          type="number"
                          className="form-control"
                          min="1"
                          defaultValue={item.qty}
                          key={item.qty}
                          onChange={(e) => updateCart(item.id, Number(e.target.value))}
                        />
                        <span className="input-group-text">{item.product.unit}</span>
                      </div>
                    </td>
                    <td className="text-end">NT$ {item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-end">總計</td>
                  <td colSpan="2" className="text-end">NT$ {cart.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <LoadingButton
            text="清空購物車"
            buttonClassName="btn btn-outline-danger"
            onClick={clearCart}
          />
        </>
      )}
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
