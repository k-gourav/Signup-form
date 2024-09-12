import React from 'react'
import styles from './SignupForm.module.css'

const SignupForm = () => {

  return (
    <div className={styles.signupform__content}>
        <div className={styles.signupform__title}>
          <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
        </div>
        <div className={styles.signupform__body}>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          <p><input type="text" name='firstname' placeholder='First Name' className={styles.input__firstname} /></p>
          <p><input type="text" name='lastname' placeholder='Last Name' className={styles.input__lastname} /></p>
          <p><input type="email" name='email' placeholder='Email Address' className={styles.input__email} /></p>
          <p><input type="password" name="password" placeholder="Password" /></p>
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>By clicking the button, you are agreeing to our <span id={styles.terms_content}>Terms and Services</span></p>
        </div>
    </div>
  )
};

export default SignupForm;