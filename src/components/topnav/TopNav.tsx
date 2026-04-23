import React from "react";
import styles from "./TopNav.module.scss";

interface TopNavProps {
  onToggleMenu?: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ onToggleMenu }) => {
  return (
    <nav className={styles.topNav}>
      <div className={styles.logoWrapper}>
        <button className={styles.hamburgerBtn} onClick={onToggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>

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
        <div className={styles.userInfo}>
          <img src="/avatar.png" alt="User" className={styles.userAvatar} />
          <span className={styles.userName}>Adedeji</span>
          <img src="/dropdown.png" alt="Menu" className={styles.dropdownIcon} />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;