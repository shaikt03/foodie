 import React from "react";
 
 

const AboutSection = () => {
  return (
    <div className="about-section py-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-md-6">
            <h2 className="mb-4 ">
              Exquisite Dining Experience Fit for <span className="text-warning">Royalty</span>
            </h2>
            <p>
              Welcome to our restaurant, where culinary artistry meets
              exceptional dining experiences. We strive to create a gastronomic
              haven that tantalizes your taste buds and leaves you with
              unforgettable memories.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. At, we strive to create a gastronomic haven that
              delights your senses.
            </p>
            <a href="#" className="btn btn-outline-warning mt-3">
              Discover The Kitchen
            </a>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1604908177275-1e9643e7ef27?auto=format&fit=crop&w=800&q=80"
              alt="Steak Dish"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
