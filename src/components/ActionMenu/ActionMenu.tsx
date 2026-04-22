import React from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation
import styles from "./ActionMenu.module.scss";

interface ActionMenuProps {
  isVisible: boolean;
  onClose: () => void;
  userId: string; // Added to interface
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  isVisible,
  onClose,
  userId,
}) => {
  const navigate = useNavigate(); // Initialize navigate hook

  if (!isVisible) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        className={styles.menuContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={styles.menuItem}
          onClick={() => {
            navigate(`/user-details/${userId}`); // Direct navigation to independent page
            onClose();
          }}
        >
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
