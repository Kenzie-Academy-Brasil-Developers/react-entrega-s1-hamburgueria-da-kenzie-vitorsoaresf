import logo from "./logo.svg";
import "./reset.css";
import "./App.css";
import { useState } from "react";

import MenuContainer from "./components/MenuContainer";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big-Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guarana", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (category) => {
    setFilteredProducts(
      products.map((element) => element.category === category)
    );
  };
  const handleClick = (productId) => {
    setCurrentSale([...currentSale, productId]);
  };

  const removeProduct = (productId) => {
    setCurrentSale(currentSale.filter((element) => element.id !== productId));
  };

  const totalSail = () => {};
  console.log(currentSale);
  return (
    <div className="App">
      <MenuContainer
        products={products}
        handleClick={handleClick}
        currentSale={currentSale}
      />
      <ShoppingCart removeProduct={removeProduct} currentSale={currentSale} />
    </div>
  );
}

export default App;
