import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";

function Navbar({ cartCount = 0 }) {

 let userInfo = null;

const storedUser = localStorage.getItem("userInfo");

if (storedUser && storedUser !== "undefined") {
  userInfo = JSON.parse(storedUser);
}
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-left">
          <h2 className="logo">🍔 Foodie</h2>
        </div>

        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>

         {userInfo && userInfo.role === "admin" && (
<Link to="/admin">Admin</Link>
)}

          {!userInfo && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          <Link to="/cart" className="cart">
            🛒 Cart
            <span className="cart-badge">{cartCount}</span>
          </Link>

          {userInfo && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;