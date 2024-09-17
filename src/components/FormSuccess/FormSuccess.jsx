import React from "react";
import styles from './FormSuccess.module.css'
import successIcon from "../../assets/icons/icon-success.svg";

const FormSuccess = () => {
  return (
    <div className={styles.formsuccess__container}>
      <img src={successIcon} alt="success-submission-icon" />
      <h1 className={styles.formsuccess__title}>THANK YOU!</h1>
      <p className={styles.formsuccess__content}>We have received your submission, and we'll be in touch soon</p>
    </div>
  );
}

export default FormSuccess;
