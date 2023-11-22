import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (!isValidEmail) {
      setEmailError("Please, enter valid email address");
    }

    if (!isConfirmPasswordValid) {
      setConfirmPasswordError("Confirm password does not match");
    }

    if (valid) {
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);

      // Clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const isConfirmPasswordValid = () => confirmPassword === password;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Register</h1>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!emailError}
              required
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              isInvalid={!!confirmPasswordError}
              required
            />
            <Form.Control.Feedback type="invalid">
              {confirmPasswordError}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className={styles.createAccountBtn}
            variant="primary"
            type="submit"
          >
            Sign up
          </Button>

          <p className="mb-1">Already registered?</p>
          <Link className={styles.link} to={"/login"}>
            Sign In
          </Link>
        </Form>
      </div>
    </div>
  );
}
