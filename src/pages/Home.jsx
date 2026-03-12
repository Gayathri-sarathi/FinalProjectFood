import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import CategorySection from "../components/categorysection";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home({cart}) {
  const navigate = useNavigate();
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="home">
      <Slider {...settings}>
  {/* VIDEO SLIDE */}
  <div>
    <video
      className="carousel-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://assets.mixkit.co/videos/49231/49231-720.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  {/* IMAGE SLIDE */}
  <div>
  <video
      className="carousel-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://v.ftcdn.net/16/66/82/45/700_F_1666824504_m8lSzPfhdtpRzAxo9qgLRrv9Tbcfrymi_ST.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  {/* IMAGE SLIDE */}
  <video
      className="carousel-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src="https://www.pexels.com/download/video/6645707/"
        type="video/mp4"
      />
    </video>
</Slider>


      {/* HERO SECTION */}
    
      <section className="hero">
         <Navbar cartCount={cart?.length || 0} />
   <div className="hero-section">
  <div className="hero-text">
    <h1>Order Food</h1>
    <p>Fast delivery to your doorstep</p>

    <div className="search-box">
      <input type="text" placeholder="Enter your location" />
      <button>Find Food</button>
    </div>
  </div>

  <div className="hero-right">
    <img src="https://static.businessworld.in/food-delivery-service_Rudzhan%20(1)_20260110185657_ogImage_16.jpg" />
  </div>
</div>

      </section>

      {/* CATEGORIES */}
     <section className="categories">
  <h2>What's on your mind?</h2>

  <div className="category-grid">
    <div className="category-card">
      <img src="https://tse3.mm.bing.net/th/id/OIP.T03aJagv5g4JwoG0Di4gFwHaEb?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
      <p>Pizza</p>
    </div>

    <div className="category-card">
      <img src="https://th.bing.com/th/id/OIP.69OfZbcUJgkAquCIGH_BRwHaFE?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
      <p>Burger</p>
    </div>

    <div className="category-card">
      <img src="https://daruadda.com/wp-content/uploads/2023/01/Mutton-Biryani.png" alt="" />
      <p>Biryani</p>
    </div>

    <div className="category-card">
      <img src="https://th.bing.com/th/id/OIP.l8eSOKwCNiYU8k569qBKKAHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
      <p>Drinks</p>
    </div>
  </div>
</section>

      {/* RESTAURANTS */}
      <section className="restaurants">
        <h2>Popular Restaurants</h2>

        <div className="restaurant-grid">
          <div className="restaurant-card">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqE9V2MDXE6MAiZ1Zucp-rmpmD0TSz88WIOBsJaAGsUXCQE066QbZPVPOlZPVkGSLjZ1VcJMUP2t7TtUvlEk0DMUC1QVvN9HdQukXiGqtqsZBM8rVvfc-r9erJvifnq05MnfA0h9Q=s1360-w1360-h1020-rw" alt="" />
            <h3>Spicy Biryani</h3>
            <p>⭐ 4.3 • 30 mins</p>
          </div>

          <div className="restaurant-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrsoMozPUlQ8AVCmh2Ee39WQ-UcRIBX2h9f48waqeKIMUEXJU8gq1qiU4PPvPY9cyofYTtU2WhQ6bL8XKWVhgfY80MmlRBU2yS8Hnz37is2A&s=10" alt="" />
            <h3>Italian Pizza</h3>
            <p>⭐ 4.5 • 25 mins</p>
          </div>

          <div className="restaurant-card">
            <img src="data:image/jpeg;base64,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" alt="" />
            <h3>Burger Hub</h3>
            <p>⭐ 4.2 • 20 mins</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 FoodApp. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
