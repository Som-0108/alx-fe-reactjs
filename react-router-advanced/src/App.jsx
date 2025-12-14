import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> | <Link to="/blog/1">Blog Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested routes under Profile */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Dynamic route with /blog/:id */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;