import React, { useState } from "react";

const RegistrationForm = () => {
  // Step 1: Set up state for form inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Submitted:", { username, email, password });
      setErrors({});
      setUsername("");
      setEmail("");
      setPassword("");
      alert("Registration successful!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        {errors.username && <p style={styles.error}>{errors.username}</p>}

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// Simple inline styling
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  error: {
    color: "red",
    fontSize: "0.9em",
  },
};

export default RegistrationForm;