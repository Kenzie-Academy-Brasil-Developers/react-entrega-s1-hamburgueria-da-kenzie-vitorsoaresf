import { useState } from "react";

import "./styles.css";

function ProductCart({ product, removeProduct }) {
  const [amount, setAmount] = useState(1);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const subAmount = () => {
    if (amount >= 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="cart">
      <div className="cart__product">
        <div className="cart__product__img">
          <div className={product.name + product.id}></div>
        </div>
        <div>
          <h3 className="cart__product__description-name">{product.name}</h3>
          <h4 className="cart__product__description-category">
            {product.category}
          </h4>
          {/* <span>{product.quantity}</span> */}
          {/* <div className="cart__product__quantity">
            <button onClick={() => subAmount()}>-</button>

            <input
              disabled
              className="cart__product__quantity__number"
              maxLength="1"
              type="number"
              value={amount}
            />
            <button onClick={() => product.quantity++}>+</button>
          </div> */}
          <span>{product.quantity}</span>
        </div>
      </div>
      <button
        onClick={() => removeProduct(product.id)}
        className="cart__product__bt"
      >
        Remover
      </button>
    </div>
  );
}

export default ProductCart;
