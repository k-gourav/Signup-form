import React from 'react'
import SignupForm from '../SignupForm/SignupForm';
import styles from './SignupContent.module.css'

const SignupContent = () => {

  return (
    <main className={styles.main__element}>
    <div className={styles.signup__page}>
    <div className={styles.signup__content}>
        <h1 className={styles.signup__title}>
          Learn to code by watching others
        </h1>
        <p className={styles.signup__body}>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
    </div>
    <SignupForm />
    </div>
    </main>

  )
};

export default SignupContent;