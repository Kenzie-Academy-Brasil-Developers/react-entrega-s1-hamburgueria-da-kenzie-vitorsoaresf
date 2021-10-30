import "./styles.css";

import Product from "../Product";

function MenuContainer({ products, handleClick, currentSale, setTotalCart }) {
  return (
    <ul className="list-products">
      {products.map((product, index) => (
        <li className="list-products__item" key={index}>
          <Product
            product={product}
            handleClick={handleClick}
            products={products}
            currentSale={currentSale}
            setTotalCart={setTotalCart}
          />
        </li>
      ))}
    </ul>
  );
}
export default MenuContainer;
