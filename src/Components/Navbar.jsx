
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#12372A",
    color: "white",
    padding: "18px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "20px",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>🛍️ Gul's Shop</h2>

      <div>
        <Link to="/" style={linkStyle}>Products</Link>
        <Link to="/add-product" style={linkStyle}>Add Product</Link>
        <Link to="/counter" style={linkStyle}>Tasbeeh</Link>
      </div>
    </nav>
  );
};

export default Navbar;
