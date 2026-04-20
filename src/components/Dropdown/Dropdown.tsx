import React, { useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";

interface FilterDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

const Dropdown: React.FC<FilterDropdownProps> = ({
  isVisible,
  onClose,
  triggerRef,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || !dropdownRef.current) return;

    const dropdown = dropdownRef.current;

    // Exact position from design specs
    dropdown.style.position = "absolute";
    dropdown.style.left = "20px";
    dropdown.style.top = "70px";
    dropdown.style.width = "270px";
    dropdown.style.height = "600px";
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div className={styles.dropdownOverlay} onClick={onClose} />

      <div
        ref={dropdownRef}
        className={styles.dropdownContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <form className={styles.filterForm}>
          <div className={styles.formGroup}>
            <label>Organization</label>
            <div className={styles.inputWrapper}>
              <select name="organization">
                <option value="">Select</option>
                <option value="lendsqr">Lendsqr</option>
                <option value="irorun">Irorun</option>
              </select>
              <img src="/fvector1.png" alt="drop" className={styles.icon} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Username</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="User" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Date</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Date" />
              <img src="/fvector2.png" alt="calendar" className={styles.icon} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Phone Number" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>
            <div className={styles.inputWrapper}>
              <select name="status">
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
              </select>
              <img src="/fvector1.png" alt="drop" className={styles.icon} />
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="button" className={styles.resetBtn} onClick={onClose}>
              Reset
            </button>
            <button type="submit" className={styles.filterBtn}>
              Filter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dropdown;
