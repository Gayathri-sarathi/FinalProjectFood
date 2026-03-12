// Login.jsx
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Form validation
  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login
  const handleLogin = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const response = await axios.post(
      "https://finalprjbackend.onrender.com/api/users/login",
      { email, password }
    );

    console.log("Login Response:", response.data);

    // If your backend returns user object
    const user = response.data.user || response.data; // fallback

    // Save token
    localStorage.setItem("token", response.data.token || "");

    // Save user info
    localStorage.setItem("userInfo", JSON.stringify(user));

    // Save isAdmin safely
    localStorage.setItem(
      "isAdmin",
      user?.isAdmin ? "true" : "false"
    );

    alert("Login Successful!");

    // Navigate
    if (user?.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }

  } catch (error) {
    console.error(error);
    alert("Invalid email or password");
  }
};

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Back</h1>
        <p className="subtitle">
          Login to access your dashboard and manage your account easily.
        </p>

        <div className="login-card">
          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <small className="error-text">{errors.email}</small>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <small className="error-text">{errors.password}</small>
              )}
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="login-footer">
            Don’t have an account? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;