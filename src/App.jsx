import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";
import FilterBar from "./components/FilterBar";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App () {

  const [cart, setCart] = useState([]);

  const [sort, setSort] = useState("price");
  const [type, setType] = useState([]);
  const [allergens, setAllergens] = useState([]);

  const addToCart = (name, price) => {
    const item = cart.find(item => item.name === name);
    if (item) {
      setCart([...cart.filter(item => item.name !== name), { name, price, quantity: item.quantity + 1 }]);
    }
    else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
  };

  const filteredBakeryData = bakeryData.filter(item => {
    if (type.length === 0) return true;
    return type.includes(item.categories.type);
  })
    .filter(item => {
      if (allergens.length === 0) return true;
      return item.categories.allergens.some(allergen => allergens.includes(allergen));
    });

  console.log(type);


  const sortedBakeryData = filteredBakeryData.sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price;
    }
    else {
      return a.calories - b.calories;
    }
  });

  return (
    <div className="App">
      <h1>By Makery</h1>
      <div className="main-content">
        <FilterBar
          sort={sort}
          setSort={setSort}
          type={type}
          setType={setType}
          allergens={allergens}
          setAllergens={setAllergens}
        />
        <div className="bakery-items">
          {sortedBakeryData.map((item, index) => (
            <BakeryItem
              img={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              type={item.categories.type}
              allergens={item.categories.allergens}
              calories={item.calories}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <Cart cart={cart} setCart={setCart} addToCart={addToCart} />
    </div>
  );
}

export default App;
