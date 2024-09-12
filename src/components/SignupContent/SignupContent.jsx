import React from 'react'
import styles from './SignupContent.module.css'

const SignupContent = () => {

  return (
    <div className={styles.signup__content}>
        <h1 className={styles.signup__title}>
          Learn to code by watching others
        </h1>
        <p className={styles.signup__body}>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
    </div>
  )
};

export default SignupContent;