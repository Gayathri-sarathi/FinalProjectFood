import categories from "../data/categories";
import "../style/Home.css";

function CategorySection({ setCategory }) {
  return (
    <div className="category-section">

      <h2>Order our best food options</h2>

      <div className="category-scroll">

        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => setCategory(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default CategorySection;
