import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd validate credentials here
    navigate("/dashboard");
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.container}>
        {/* Previous logo and hero sections remain the same */}
        <div className={styles.logoWrapper}>
          <img
            src="/Union.png"
            alt="Lendsqr Logo Icon"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>lendsqr</span>
        </div>

        <div className={styles.heroWrapper}>
          <img
            src="/pablo-sign-in.svg"
            alt="Welcome Illustration"
            className={styles.heroImage}
          />
        </div>

        <section className={styles.formSection}>
          <h1 className={styles.welcomeTitle}>Welcome!</h1>
          <p className={styles.subText}>Enter details to login.</p>

          <form className={styles.loginForm} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.inputField}
              />
              <button
                type="button"
                className={styles.showButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot PASSWORD?
            </a>

            <button type="submit" className={styles.submitBtn}>
              LOG IN
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
