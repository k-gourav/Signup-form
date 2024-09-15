import React, { useState } from "react";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            placeholder="First Name"
            className={styles.input__firstname}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
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
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p className={styles.signup__terms}>
          By clicking the button, you are agreeing to our 
          <span id={styles.terms__content}> Terms and Services</span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
