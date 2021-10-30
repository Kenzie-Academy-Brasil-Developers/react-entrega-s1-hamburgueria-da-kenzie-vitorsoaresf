import ProductCart from "../ProductCart";
import { useState } from "react";
import "./styles.css";

function ShoppingCart({ currentSale, removeProduct }) {
  const [totalCart, setTotalCart] = useState(0);

  return (
    <div className="shoppingCart">
      <header className="shoppingCart__title">
        <p>Carrinho de compras</p>
      </header>
      {currentSale.length ? (
        <ul className="list-cart">
          {currentSale.map((product, index) => (
            <li id={index} key={index}>
              <ProductCart
                removeProduct={removeProduct}
                product={product}
                setTotalCart={setTotalCart}
              />
            </li>
          ))}
          {/* <span>{totalCart}</span> */}
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
