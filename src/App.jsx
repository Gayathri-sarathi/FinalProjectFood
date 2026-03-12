import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const exists = prevCart.find(i => i._id === item._id);
      if (exists) {
        return prevCart.map(i =>
          i._id === item._id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (_id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (_id) => {
    setCart(prevCart => prevCart.filter(item => item._id !== _id));
  };

  const cancelOrder = () => setCart([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
  <Route
  path="/admin"
  element={localStorage.getItem("token") ? <Admin /> : <Navigate to="/admin" />}
/>
        <Route path="/menu" element={<Menu cart={cart} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
              cancelOrder={cancelOrder}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;