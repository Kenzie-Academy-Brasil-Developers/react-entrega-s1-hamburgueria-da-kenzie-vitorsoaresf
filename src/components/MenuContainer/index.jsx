import "./styles.css";

import Product from "../Product";
import ShoppingCart from "../ShoppingCart";

function MenuContainer({
  products,
  handleClick,
  removeProduct,
  setIsCart,
  isCart,
}) {
  return (
    <ul className="list-products">
      {products.map((product, index) => (
        <li className="list-products__item" key={index}>
          <Product
            product={product}
            handleClick={handleClick}
            products={products}
            removeProduct={removeProduct}
            setIsCart={setIsCart}
            isCart={isCart}
          />
        </li>
      ))}
    </ul>
  );
}
export default MenuContainer;
