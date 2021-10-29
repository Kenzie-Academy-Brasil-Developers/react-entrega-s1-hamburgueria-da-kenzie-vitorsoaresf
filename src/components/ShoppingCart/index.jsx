import ProductCart from "../ProductCart";
import "./styles.css";

function ShoppingCart({ currentSale }) {
  return (
    <ul className="list-cart">
      {currentSale.map((product, index) => (
        <li key={index}>
          <ProductCart product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart;
