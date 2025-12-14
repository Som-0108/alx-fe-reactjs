import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Step 1: Define Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Step 2: Build the Formik form
const FormikForm = () => {
  return (
    <div style={styles.container}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          alert("Formik Registration Successful!");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form style={styles.form}>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
            />
            <ErrorMessage
              name="username"
              component="p"
              style={styles.error}
            />

            <label>Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="p"
              style={styles.error}
            />

            <label>Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="p"
              style={styles.error}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Styling
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

export default FormikForm;