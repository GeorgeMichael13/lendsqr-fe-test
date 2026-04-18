import React from "react";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardWrapper}>
      {/* Top Navigation Bar */}
      <nav className={styles.topNav}>
        <div className={styles.logoWrapper}>
          <img
            src="/Union.png"
            alt="Lendsqr Logo"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>lendsqr</span>
        </div>

        {/* Search Section */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>
            {/* Rectangle 9 with the search icon vector */}
            <img
              src="/Vector.png"
              alt="Search Icon"
              className={styles.searchIcon}
            />
          </button>
        </div>
        {/* Right Side Utilities */}
        <div className={styles.navRight}>
          <a href="/docs" className={styles.docsLink}>
            Docs
          </a>
        </div>
      </nav>

      <div className={styles.layoutBody}>
        <aside className={styles.sidebar}></aside>

        <main className={styles.mainContent}>{/* Content area */}</main>
      </div>
    </div>
  );
};

export default Dashboard;
