
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import AddProduct from "./Pages/AddProduct";
import Products from "./Pages/Products";
import Counter from "./Pages/Counter";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={<Products products={products} />}
          />

          <Route
            path="/add-product"
            element={<AddProduct onAddProduct={addProduct} />}
          />

          <Route
            path="/counter"
            element={<Counter />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
