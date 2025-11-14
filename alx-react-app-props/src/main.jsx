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
      <h2 style={{ color: "navy", marginBottom: "10px" }}>Welcome to My City List</h2>
      <p style={{ fontSize: "18px", color: "#333" }}>
        Here are some of the cities I’d love to visit someday.
      </p>
    </main>
  );
};

export default MainContent;
