import { useEffect, useState } from "react";
import "../styles/Header.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-dark bg-dark shadow-sm" : "navbar-dark bg-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Foodie</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search restaurants"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <a href="#" className="btn btn-primary ms-3">
            <i className="bi bi-cart-plus-fill"></i> Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
