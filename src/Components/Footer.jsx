
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#12372A",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <p style={{ margin: "5px" }}>
        © {new Date().getFullYear()} Gul's Shop
      </p>

      <p style={{ margin: "5px", color: "#D4AF37" }}>
        Quality Products, Best Prices
      </p>
    </footer>
  );
};

export default Footer;
