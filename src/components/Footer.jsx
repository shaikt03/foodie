import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Contact Us */}
          <div className="col-md-6">
            <h5 className="fw-bold">CONTACT US</h5>
            <div className="p-3 border border-light">
              <p>
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                <span className="fw-bold text-warning">Our Address :</span><br />
                Nandigama<br />
                4-40,Main Road, Shadnagar<br />
                Telangana - 509228, India
              </p>
              <p>
                <i className="bi bi-telephone-fill text-danger me-2"></i>
                <span className="fw-bold text-warning">Call Us :</span> +91 9182774171 (WhatsApp)
              </p>
              <p>
                <i className="bi bi-envelope-fill text-danger me-2"></i>
                <span className="fw-bold text-warning">Mail Us :</span> info.tastyfood.in
              </p>
            </div>
          </div>

          {/* Request a Demo */}
          <div className="col-md-6">
            <h5 className="fw-bold">REQUEST A DEMO</h5>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control bg-dark text-white border-light" placeholder="Your Name :" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control bg-dark text-white border-light" placeholder="Email Address :" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control bg-dark text-white border-light" placeholder="Phone No. :" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control bg-dark text-white border-light" placeholder="City / Country :" />
                </div>
                <div className="col-12">
                  <textarea className="form-control bg-dark text-white border-light" rows="4" placeholder="Enter Your Message / Query :"></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn w-100 fw-bold text-uppercase" style={{ backgroundColor: "red", color: "white" }}>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

 
 
export default Footer