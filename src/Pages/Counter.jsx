
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);

  const handleCount = () => {
    if (count + 1 >= target) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const handleTargetChange = (value) => {
    setTarget(value);
    setCount(0);
  };

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
          maxWidth: "430px",
          textAlign: "center",
          padding: "30px 25px",
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
            fontSize: "32px",
            color: "#176b48",
            margin: "25px 0",
            direction: "rtl",
          }}
        >
          سُبْحَانَ اللَّهِ
        </div>

        {/* Select Target */}
        <p style={{ color: "#12372A", fontWeight: "bold" }}>
          Select Tasbeeh Target
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          {[33, 66, 99].map((value) => (
            <button
              key={value}
              onClick={() => handleTargetChange(value)}
              style={{
                flex: 1,
                padding: "12px 5px",
                borderRadius: "10px",
                border: "2px solid #176b48",
                backgroundColor:
                  target === value ? "#176b48" : "#fffdf5",
                color: target === value ? "white" : "#176b48",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {value}
            </button>
          ))}
        </div>

        <p style={{ color: "#666", marginBottom: "8px" }}>
          Your Tasbeeh Count
        </p>

        {/* Counter Display */}
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #12372A, #198754)",
            border: "7px solid #d4af37",
            color: "white",
            boxShadow: "0 5px 15px rgba(18,55,42,0.3)",
          }}
        >
          <span style={{ fontSize: "52px", fontWeight: "bold" }}>
            {count}
          </span>

          <span style={{ fontSize: "14px" }}>
            / {target}
          </span>
        </div>

        {/* Count Button */}
        <button
          onClick={handleCount}
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

        {/* Decrease and Reset */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => setCount(Math.max(0, count - 1))}
            style={{
              flex: 1,
              padding: "12px 5px",
              backgroundColor: "#d4af37",
              color: "#12372A",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
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
              padding: "12px 5px",
              backgroundColor: "#f0e5d0",
              color: "#12372A",
              border: "1px solid #d4af37",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>

        <p style={{ color: "#777", fontSize: "13px", marginTop: "25px" }}>
          SubhanAllah • Alhamdulillah • Allahu Akbar
        </p>

        <p style={{ color: "#176b48", fontSize: "13px" }}>
          Your counter resets automatically at {target}.
        </p>
      </div>
    </div>
  );
};

export default Counter;
