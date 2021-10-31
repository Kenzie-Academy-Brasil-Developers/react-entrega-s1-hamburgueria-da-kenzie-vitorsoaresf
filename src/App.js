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

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [search, setSearch] = useState("");

  const showProducts = (category) => {
    setFilteredProducts(
      products.filter((element) =>
        element.category.toLowerCase().includes(category.toLowerCase())
      )
    );
  };
  const handleClick = (productId) => {
    setCurrentSale([...currentSale, productId]);
  };

  const removeProduct = (productId) => {
    setCurrentSale(currentSale.filter((element) => element.id !== productId));
  };
  console.log(search);
  return (
    <div className="App">
      <header className="App__title">
        <div className="App__title__logo">
          <p>Burguer</p>
          <p>Kenzie</p>
        </div>
        <div className="App__title__search">
          <input
            onChange={(event) => showProducts(event.target.value)}
            type="text"
            maxLength="10px"
            placeholder="Digitar pesquisa"
          />
          <button onClick={() => showProducts(search)}>Pesquisar</button>
        </div>
      </header>
      <MenuContainer
        products={filteredProducts}
        handleClick={handleClick}
        currentSale={currentSale}
        setTotalCart={setTotalCart}
        removeProduct={removeProduct}
      />
      <ShoppingCart
        removeProduct={removeProduct}
        currentSale={currentSale}
        totalCart={totalCart}
        setCurrentSale={setCurrentSale}
      />
    </div>
  );
}

export default App;
