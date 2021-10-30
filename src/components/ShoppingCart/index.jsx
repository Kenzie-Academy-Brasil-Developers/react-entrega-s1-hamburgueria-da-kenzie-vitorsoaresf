import ProductCart from "../ProductCart";
import "./styles.css";

function ShoppingCart({ currentSale, removeProduct }) {
  return (
    <ul className="list-cart">
      {currentSale.map((product, index) => (
        <li key={index}>
          <ProductCart removeProduct={removeProduct} product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart;
