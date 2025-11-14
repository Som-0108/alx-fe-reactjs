import React from "react";

const MainContent = () => {
  return (
    <main
      style={{
        backgroundColor: "#eef2f3",
        padding: "20px",
        minHeight: "200px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "navy", marginBottom: "10px" }}>
        Welcome to My City List
      </h2>

      {/* 🔥 REQUIRED exact text */}
      <p style={{ fontSize: "18px", color: "#333" }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
};

export default MainContent;
