import React from "react";
import "./footer.css";
const Footer = () => {
    
  const currentYear = () => {
    const d = new Date();
    const year = d.getFullYear();
    return year;
  };

  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <p style={{ textAlign: "center" }}> Copyright {currentYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
