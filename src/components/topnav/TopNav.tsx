import React from "react";
import styles from "./TopNav.module.scss";

const TopNav: React.FC = () => {
  return (
    <nav className={styles.topNav}>
      <div className={styles.logoWrapper}>
        <img src="/Union.png" alt="Lendsqr Logo" className={styles.logoIcon} />
        <span className={styles.logoText}>lendsqr</span>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles.searchInput}
        />
        <button className={styles.searchBtn}>
          <img src="/Vector.png" alt="Search" className={styles.searchIcon} />
        </button>
      </div>

      <div className={styles.navRight}>
        <a href="/docs" className={styles.docsLink}>
          Docs
        </a>
        <img
          src="/notification.png"
          alt="Notifications"
          className={styles.notificationIcon}
        />
        <img src="/avatar.png" alt="User" className={styles.userAvatar} />
        <span className={styles.userName}>Adedeji</span>
        <img src="/dropdown.png" alt="Menu" className={styles.dropdownIcon} />
      </div>
    </nav>
  );
};

export default TopNav;
