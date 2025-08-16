import React from "react";

const OpeningHours = () => {
  return (
    <section className="opening-hours-section container-fluid py-5">
      <div className="row g-0">
        {/* Left Image */}
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Cafe"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 d-flex align-items-center p-5 bg-dark text-light">
          <div>
            <h2 className="opening-title">Opening Hours</h2>
            <p className="opening-desc mt-3">
              Lorem to our restaurant, where culinary artistry meets exceptional
              dining experiences. At, we strive to create a gastronomic haven
              that.
            </p>

            <p className="fw-bold mt-4">SUNDAY – THURSDAY: 11:30AM – 11PM</p>
            <hr className="opening-divider" />
            <p className="fw-bold">FRIDAY & SATURDAY: 11:30AM – 12AM</p>

            <div className="mt-5">
              <a href="#reservation" className="btn btn-outline-warning btn-lg">
                Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
