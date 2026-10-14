
import React from "react";

const Products = ({ products }) => {
  return (
    <div
      style={{
        padding: "40px 25px",
        minHeight: "70vh",
        backgroundColor: "#f4f7f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#12372A",
          marginBottom: "10px",
        }}
      >
        Our Products
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#777",
          marginBottom: "35px",
        }}
      >
        Discover our latest products
      </p>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h3>No products available yet.</h3>
          <p>Add your first product to see it here.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 280px))",
            justifyContent: "center",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 5px 18px rgba(0,0,0,0.10)",
                border: "1px solid #e5eae6",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-7px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(18,55,42,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 5px 18px rgba(0,0,0,0.10)";
              }}
            >
              {/* Product Image */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#edf1ee",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Product Details */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    color: "#12372A",
                    fontSize: "19px",
                    margin: "0 0 10px",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    margin: "0 0 20px",
                    overflowWrap: "anywhere",
                    flex: 1,
                  }}
                >
                  {product.description}
                </p>

                <div
                  style={{
                    borderTop: "1px solid #edf0ed",
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "#198754",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Rs. {Number(product.price).toLocaleString()}
                  </span>

                  <span
                    style={{
                      backgroundColor: "#e6f4eb",
                      color: "#176b48",
                      padding: "5px 9px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
