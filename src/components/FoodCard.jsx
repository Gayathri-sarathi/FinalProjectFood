import "../style/Menu.css";

function FoodCard({ item, addToCart }) {
  return (
    <div className="menu-card">

      <div className="image-container">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="menu-info">

        <h3>{item.name}</h3>

        <div className="price-add">
          <p className="price">₹{item.price}</p>

          <button
            className="add-btn"
            onClick={() => addToCart(item)}
          >
            ADD
          </button>
        </div>

      </div>
    </div>
  );
}

export default FoodCard;
