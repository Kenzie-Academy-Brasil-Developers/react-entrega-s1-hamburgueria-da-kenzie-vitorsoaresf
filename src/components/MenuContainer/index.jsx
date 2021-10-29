import "./styles.css";

import Product from "../Product";

function MenuContainer({ products }) {
  return (
    <ul className="list-products">
      {products.map((product, index) => (
        <li className="list-products__item" key={index}>
          {/* {product.name} */}
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
export default MenuContainer;
