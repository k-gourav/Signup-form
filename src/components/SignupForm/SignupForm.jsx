import React, { useState } from "react";
import errorLogo from '../../assets/icons/icon-error.svg'
import { useNavigate } from "react-router-dom";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    if (!firstName) {
      formErrors.firstName = "First Name cannot be empty";
    }

    if (!lastName) formErrors.lastName = "Last Name cannot be empty";

    if (!email) {
      formErrors.email = "Looks like this is not an email";
    } else if (!validateEmail(email)) {
      formErrors.email = "Looks like this is not an email";
    }

    if (!password) formErrors.password = "Password cannot be empty";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
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

      <div className={styles.signupform__body}>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder={errors.firstName ? "" : "First Name"}
            className={errors.firstName ? styles.error__input : ""}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          {errors.firstName && (
            <p className={styles.error__message}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder={errors.lastName ? "" : "Last Name"}
            className={errors.lastName ? styles.error__input : ""}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          {errors.lastName && (
            <p className={styles.error__message}>{errors.lastName}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder={errors.email ? "email@example/com" : "Email Address"}
            className={errors.email ? styles.error__input : ""}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && (
            <p className={styles.error__message}>{errors.email}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder={errors.password ? "" : "Password"}
            className={errors.password ? styles.error__input : ""}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errors.password && (
            <p className={styles.error__message}>{errors.password}</p>
          )}
        </div>

        <button type="submit" onClick={handleSubmit}>
          CLAIM YOUR FREE TRIAL
        </button>
        <p className={styles.signup__terms}>
          By clicking the button, you are agreeing to our
          <span id={styles.terms__content}> Terms and Services</span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
