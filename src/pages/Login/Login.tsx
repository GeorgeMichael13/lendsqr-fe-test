import React from "react";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  return (
    <main className={styles.loginPage}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoWrapper}>
          <img
            src="/Union.png"
            alt="Lendsqr Logo Icon"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>lendsqr</span>
        </div>

        {/* Hero Illustration */}
        <div className={styles.heroWrapper}>
          <img
            src="/pablo-sign-in.svg"
            alt="Welcome Illustration"
            className={styles.heroImage}
          />
        </div>

        {/* The Login Form will go here next */}
      </div>
    </main>
  );
};

export default Login;
