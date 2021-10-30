import { useState } from "react";
import "./styles.css";

function ProductCart({ currentSale, product, removeProduct }) {
  const [sumItemsCart, setSumItemsCart] = useState(0);

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
