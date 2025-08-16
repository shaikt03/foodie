import React from "react";
import "../styles/hero.css";


const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className=" row align-items-center">
          {/* Left Column - Text */}
          <div className="col-lg-6 text-white">
            <h1 className="fw-bold display-4">
              ELEGANCE RETREAT
              <br />
              <span className="hero-subtitle">RESTAURANT</span>
            </h1>
            <p className="mt-4">
              Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. 
              At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with...
            </p>
            <button className="btn btn-warning text-dark fw-bold mt-4 px-4 py-2">
              VIEW MORE
            </button>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
