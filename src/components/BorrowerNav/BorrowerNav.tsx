import React from "react";
import styles from "./BorrowerNav.module.scss";

const BorrowerNav: React.FC = () => {
  return (
    <aside className={styles.borrowerNav}>
      <div className={styles.navContainer}>
        {/* The specific box at Top: 139px, Left: 30px */}
        <div className={styles.navBox}>
          {/* The two vectors that make up the briefcase icon */}
  <img 
    src="/Vector1.png" 
    alt="" 
    className={styles.vector1} 
  />
  <img 
    src="/Vector2.png" 
    alt="" 
    className={styles.vector2} 
  />
  <span className={styles.orgText}>Switch Organization</span>
  {/* Added Next Icon */}
  <img 
    src="/next.png" 
    alt="" 
    className={styles.nextIcon} 
  />
        </div>
      </div>
    </aside>
  );
};

export default BorrowerNav;
