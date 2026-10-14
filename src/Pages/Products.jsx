
import React from "react";

const Products = ({ products }) => {
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "60vh",
        backgroundColor: "#f5f7f5",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#12372A" }}>
        Our Products
      </h1>

      <p style={{ textAlign: "center", color: "#666" }}>
        Discover our latest products
      </p>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <h3>No products available yet.</h3>
          <p>Go to Add Product to add your first product.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "30px auto",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "210px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "18px" }}>
                <h3 style={{ color: "#12372A", marginTop: 0 }}>
                  {product.name}
                </h3>

                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  {product.description}
                </p>

                <h3 style={{ color: "#198754" }}>
                  Rs. {Number(product.price).toLocaleString()}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
