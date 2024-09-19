import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && validateEmail(email) && password) {
      setValidInput(true);
      navigate("/signup-success");
    }
  };

  return (
    <div className={styles.signupform__content}>
      <div className={styles.signupform__title}>
        <p>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div>

      <form
        className={styles.signupform__body}
        action=""
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className={styles.input__firstname}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {firstName ? (
            ""
          ) : (
            <p className={styles.error__message}>First Name cannot be empty</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className={styles.input__lastname}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {lastName ? (
            ""
          ) : (
            <p className={styles.error__message}>Last Name cannot be empty</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={styles.input__email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {email ? (
            ""
          ) : (
            <p className={styles.error__message}>
              Looks like this is not an email
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {password ? (
            ""
          ) : (
            <p className={styles.error__message}>Password cannot be empty</p>
          )}
        </div>

        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p className={styles.signup__terms}>
          By clicking the button, you are agreeing to our
          <span id={styles.terms__content}> Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
