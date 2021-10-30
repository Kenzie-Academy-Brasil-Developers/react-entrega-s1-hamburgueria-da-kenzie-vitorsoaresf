import ProductCart from "../ProductCart";
import "./styles.css";

function ShoppingCart({ currentSale, removeProduct }) {
  return (
    <div className="shoppingCart">
      <header className="shoppingCart__title">
        <p>Carrinho de compras</p>
      </header>
      {currentSale.length ? (
        <ul className="list-cart">
          {currentSale.map((product, index) => (
            <li key={index}>
              <ProductCart removeProduct={removeProduct} product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="list-clear">
          <h3>Sua sacola está vazia!</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
