import React from "react";
import styles from "./ActionMenu.module.scss";

interface ActionMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        className={styles.menuContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menuItem}>
          <img src="/view.png" alt="view" />
          <span>View Details</span>
        </div>
        <div className={styles.menuItem}>
          <img src="/mvector1.png" alt="blacklist" />
          <span>Blacklist User</span>
        </div>
        <div className={styles.menuItem}>
          <img src="/mvector2.png" alt="activate" />
          <span>Activate User</span>
        </div>
      </div>
    </>
  );
};

export default ActionMenu;
