import React from "react";
import Gril from "../assets/grilled.jpg";
import Chocolate from "../assets/cololate.jpg";
import Cake from "../assets/plum.jpg";
import Spaghetti from "../assets/Spaghetti Carbonara.jpg";
const FoodShowcase = () => {
  const foodItems = [
    {
      img:  Chocolate,
      title: "Hot Chocolate",
      category: "Beverage",
    },
    {
      img: Cake,
      title: "Plum Cake",
      category: "Desserts",
    },
    {
      img: Spaghetti,
      title: "Spaghetti Carbonara",
      category: "Pasta",
    },
    {
      img:  Gril,
      title: "Grilled Prawns",
      category: "Seafood",
    },
  ];

  return (
    <div className="bg-dark text-light py-5">
      <div className="container text-center mb-4">
        <p className="text-warning mb-1" style={{ fontStyle: "italic" }}>
          Food Showcase
        </p>
        <h1
          className="display-4 fw-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Food Items
        </h1>
      </div>

      <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.img}
                className="d-block w-100"
                alt={item.title}
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-warning">{item.title}</h5>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#foodCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#foodCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default FoodShowcase;
