
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ onAddProduct }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: Number(price),
      image,
    };

    onAddProduct(newProduct);

    alert("Product added successfully!");

    navigate("/");
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "7px",
    marginBottom: "18px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "15px",
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "40px auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#12372A" }}>
        Add New Product
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Product Description</label>
        <textarea
          style={{ ...inputStyle, minHeight: "100px" }}
          placeholder="Enter product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Product Image</label>
        <input
          style={inputStyle}
          type="file"
          accept="image/*"
          onChange={handleImage}
          required
        />

        {image && (
          <img
            src={image}
            alt="Product preview"
            style={{
              width: "150px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "15px",
              display: "block",
            }}
          />
        )}

        <label>Product Price (Rs.)</label>
        <input
          style={inputStyle}
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: "#12372A",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
