import React from "react";
import { MoreVertical, Eye, UserX, UserCheck } from "lucide-react";
import styles from "./ActionsDropdown.module.scss";
import { User } from "../../types";

interface Props {
  user: User;
  onViewDetails: (user: User) => void;
}

export const ActionsDropdown: React.FC<Props> = ({ user, onViewDetails }) => {
  const [open, setOpen] = React.useState(false);

  const handleView = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    onViewDetails(user);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setOpen(!open)} className={styles.trigger}>
        <MoreVertical size={20} />
      </button>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div className={styles.menu}>
            <button onClick={handleView} className={styles.item}>
              <Eye size={16} />
              View Details
            </button>
            <button className={styles.item}>
              <UserX size={16} />
              Blacklist User
            </button>
            <button className={styles.item}>
              <UserCheck size={16} />
              Activate User
            </button>
          </div>
        </>
      )}
    </div>
  );
};
