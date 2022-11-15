import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App () {

  const [cart, setCart] = useState([]);

  const addToCart = (name, price) => {
    const item = cart.find(item => item.name === name);
    if (item) {
      setCart([...cart.filter(item => item.name !== name), { name, price, quantity: item.quantity + 1 }]);
    }
    else {
      setCart([...cart.filter(item => item.name !== name), { name, price, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>By Makery</h1>
      <div className="bakery-items">
        {bakeryData.map((item, index) => (
          <BakeryItem
            img={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
            cart={cart}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
