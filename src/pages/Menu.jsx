import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import "../style/Menu.css";

function Menu({ cart, addToCart }) {
  const locationData = useLocation();

  const initialQuery = locationData.state?.query || "";
  const userLocation = locationData.state?.location || "";

  const [searchText, setSearchText] = useState(initialQuery);
  const [category, setCategory] = useState("All");
  const [foodItems, setFoodItems] = useState([]);
const [query, setQuery] = useState(searchText);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        axios.get("https://finalprjbackend.onrender.com/api/products")
.then(res => setProducts(res.data))
        console.log("Backend Food:", res.data);
        setFoodItems(res.data);
      } catch (error) {
        console.log("Error fetching food:", error);
      }
    };

    fetchFoods();
  }, []);

  const filteredItems = foodItems.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar cartCount={cart.length} />

      <div className="menu-container">

        {userLocation && (
          <p className="location-text">
            📍 Delivering to <b>{userLocation}</b>
          </p>
        )}

        <div className="menu-search">
        <input
  type="text"
  placeholder="Search your favourite food..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
<button onClick={() => setSearchText(query)}>
  Search
</button>
        </div>

        <div className="category-bar">
          {["All", "Biryani", "Pizza", "Snacks"].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="offer-banner">
          🔥 Flat 20% OFF above ₹299 | Use FOOD20
        </div>

        <div className="food-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FoodCard
                key={item._id}   // 🔥 changed from id to _id
                item={item}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p className="no-results">No food found 😔</p>
          )}
        </div>

      </div>
    </>
  );
}

export default Menu;
