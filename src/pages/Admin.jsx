import { useState } from "react";
import axios from "axios";
import "../style/Admin.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  
  const [food, setFood] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description:""
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
     await axios.post(
"http://localhost:5000/api/food/add",
food
);

      alert("Food Added Successfully!");

      // Clear form after submit
      setFood({
        name: "",
        price: "",
        category: "",
        image: "",
        description:""
      });

    } catch (error) {
      console.log(error);
      alert("Error adding food");
    }
                   // redirect to login page
};
 const navigate = useNavigate();
    const handleLogout = () => {
  localStorage.removeItem("token");   // remove login token
  navigate("/login");
  };

  return (
    <div className="admin-container">

     <div className="admin-header">
  <div>
    <h2>👨‍💼 Admin Dashboard</h2>
    <p>Manage your restaurant menu easily</p>
  </div>

  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>

      <div className="admin-form-card">
        <h3>Add New Food</h3>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Food Name"
            value={food.name}
            onChange={handleChange}
            required
          />

          <input
            name="price"
            placeholder="Price"
            value={food.price}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={food.category}
            onChange={handleChange}
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            value={food.image}
            onChange={handleChange}
            required
          />

          <button type="submit">+ Add Food</button>

        </form>
      </div>

    </div>
  );
}

export default Admin;