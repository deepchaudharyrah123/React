import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer text-muted">
      <div className="container py-2 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">Features</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">About</a>
          </li>
        </ul>
        <p className="text-center text-muted mb-0">© 2022 Company, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
