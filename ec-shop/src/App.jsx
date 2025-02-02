import ProductPage from "./views/ProductPage";
import ShoppingCartPage from "./views/ShoppingCartPage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <ProductPage />
        </div>
        <div className="col-md-4">
          <ShoppingCartPage />
        </div>
      </div>
    </div>
  )
}

export default App
