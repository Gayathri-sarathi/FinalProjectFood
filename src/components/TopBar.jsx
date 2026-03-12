import { Link } from "react-router-dom";
import "../style/Menu.css";

function TopBar({ cartCount }) {
  return (
    <div className="topbar">
      <h2 className="logo">Foodie</h2>

      <div className="nav-links">
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </div>
    </div>
  );
}

export default TopBar;
