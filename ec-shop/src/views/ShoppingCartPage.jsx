import { useState } from "react";

function ShoppingCartPage() {
  const [cart, setCart] = useState([]);

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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ShoppingCartPage;