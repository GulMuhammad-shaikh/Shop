
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        background: "linear-gradient(135deg, #092e20, #176b48)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          padding: "35px 25px",
          borderRadius: "25px",
          backgroundColor: "#fffdf5",
          border: "4px solid #d4af37",
          boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ fontSize: "40px" }}>☪</div>

        <h1 style={{ color: "#12372A", marginBottom: "8px" }}>
          Digital Tasbeeh
        </h1>

        <p style={{ color: "#777", marginTop: 0 }}>
          Remember Allah in every moment
        </p>

        <div
          style={{
            fontSize: "34px",
            color: "#176b48",
            margin: "25px 0",
            direction: "rtl",
          }}
        >
          سُبْحَانَ اللَّهِ
        </div>

        <p style={{ color: "#666" }}>Your Tasbeeh Count</p>

        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #12372A, #198754)",
            border: "7px solid #d4af37",
            color: "white",
            fontSize: "55px",
            fontWeight: "bold",
            boxShadow: "0 5px 15px rgba(18,55,42,0.3)",
          }}
        >
          {count}
        </div>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: "#198754",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "12px",
          }}
        >
          + Count Tasbeeh
        </button>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setCount(Math.max(0, count - 1))}
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: "#d4af37",
              color: "#12372A",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            − Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: "#f0e5d0",
              color: "#12372A",
              border: "1px solid #d4af37",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>

        <p
          style={{
            color: "#777",
            fontSize: "13px",
            marginTop: "25px",
          }}
        >
          SubhanAllah • Alhamdulillah • Allahu Akbar
        </p>
      </div>
    </div>
  );
};

export default Counter;
