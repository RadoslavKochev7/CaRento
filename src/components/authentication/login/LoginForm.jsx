import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, FormGroup } from "react-bootstrap";
import { authContext } from "../../../contexts/AuthContext";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { loginSubmitHandler } = useContext(authContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;

    if (password.trim() === "") {
      setPasswordError("Password is required");
      valid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email address is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email address");
      valid = false;
    }

    if (valid) {
      try {
        loginSubmitHandler(email, password, username);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Login Page</h1>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label className={styles.formLabel}>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className={styles.formLabel}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              isInvalid={!!passwordError}
            />
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className={styles.formLabel}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <FormGroup>
            <Button className={styles.loginBtn} variant="primary" type="submit">
              Login
            </Button>
            <Button
              className={styles.loginBtn}
              variant="info"
              type="button"
              as={Link}
              to={"/register"}
            >
              Register
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}