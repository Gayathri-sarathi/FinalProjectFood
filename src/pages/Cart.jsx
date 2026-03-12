import { useState } from "react";
import "../style/Cart.css";
import axios from "axios";
import foodItems from "../data/FoodItems";

function Cart({ cart, addToCart, decreaseQuantity, removeFromCart, cancelOrder }) {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  // Calculate total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Suggested items (exclude items already in cart)
  const suggestedItems = foodItems
    .filter(food => !cart.some(cartItem => cartItem._id === food._id))
    .slice(0, 3);

  // 🔥 Place order — save to DB
  const placeOrder = async () => {
  if (cart.length === 0) {
    alert("Your cart is empty 😔");
    return;
  }

  try {
    // Map cart items to send only foodId and quantity
    const orderItems = cart.map(item => ({
      foodId: item._id,
      quantity: item.quantity
    }));

    console.log("Order Items sent to backend:", orderItems); // debug

    const res = await axios.post("https://finalprjbackend.onrender.com/api/order/create", {
      items: orderItems,
      totalPrice: totalPrice + 40, // include delivery fee
      paymentMethod,
      userId: localStorage.getItem("userId") || null,
    });

    alert(res.data.message); // success
    cancelOrder(); // clear cart

  } catch (error) {
    console.error("Order placement error:", error.response?.data || error.message);
    alert("Failed to place order. Try again!");
  }
};

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Your cart is empty 😔</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {cart.map((item, index) => (
            <div key={`${item._id}-${index}`} className="cart-item">
              <img src={item.image} alt={item.name} />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item._id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>

              <button className="remove-btn" onClick={() => removeFromCart(item._id)}>❌</button>
            </div>
          ))}

          {/* PRICE SUMMARY */}
          <div className="price-summary">
            <p>Items Total: ₹{totalPrice}</p>
            <p>Delivery Fee: ₹40</p>
            <h3>Total Payable: ₹{totalPrice + 40}</h3>
          </div>

          {/* PAYMENT SECTION */}
          <div className="payment-method">
            <h3>Payment Method</h3>
            <label>
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={e => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={e => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                value="CARD"
                checked={paymentMethod === "CARD"}
                onChange={e => setPaymentMethod(e.target.value)}
              />
              Card
            </label>
          </div>

          {/* PLACE / CANCEL ORDER BUTTONS */}
          <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
          <button className="cancel-order-btn" onClick={cancelOrder}>Cancel Order</button>

          {/* SUGGESTED ITEMS */}
          {suggestedItems.length > 0 && (
            <div className="suggestion-section">
              <h3>You may also like 🍔</h3>
              <div className="suggestion-list">
                {suggestedItems.map((item, index) => (
                  <div key={`${item._id}-${index}`} className="suggestion-card">
                    <img src={item.image} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={() => addToCart(item)}>Add</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;