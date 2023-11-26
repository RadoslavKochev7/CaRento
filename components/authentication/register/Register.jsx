import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Register.module.css";
import { authContext } from "../../../src/contexts/AuthContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const { registerSubmitHandler } = useContext(authContext);

  const handleUsernameChange = (event) => setUsername(event.target.value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    if (!isValidEmail) {
      setEmailError("Please, enter valid email address");
      isValid = false;
    }

    if (!isConfirmPasswordValid) {
      setConfirmPasswordError("Confirm password does not match");
      isValid = false;
    }

    if (!isPasswordLengthValid) {
      setPasswordError("Password must be longer than 3 characters");
      isValid = false;
    }

    if (isValid) {
      try {
        registerSubmitHandler(email, password, username);
      } catch (error) {
        console.log(error);
      }

      // Clear form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const isConfirmPasswordValid = () => confirmPassword === password;

  const isPasswordLengthValid = () => password.length >= 3;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Register</h1>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
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
              isInvalid={!!passwordError}
              required
            />
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>
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
            Sign Up
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
