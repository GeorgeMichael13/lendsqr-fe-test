import React, { useState } from "react";
import { storage } from "@/utils/localStorage";
import styles from "./UserTable.module.scss";
import ActionMenu from "../ActionMenu/ActionMenu";

interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

interface UserTableProps {
  users: User[];
  onFilterClick: () => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onFilterClick }) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const handleToggleMenu = (e: React.MouseEvent, user: User) => {
    e.stopPropagation();
    // Save the user to storage immediately when menu is opened
    storage.saveSelectedUser(user);
    setActiveMenuId(activeMenuId === user.id ? null : user.id);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableBase}>
        <thead>
          <tr>
            <th>
              Organization{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                className={styles.filterIcon}
                onClick={onFilterClick}
              />
            </th>
            <th>
              Username{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                className={styles.filterIcon}
                onClick={onFilterClick}
              />
            </th>
            <th className={styles.emailCell}>
              Email{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                className={styles.filterIcon}
                onClick={onFilterClick}
              />
            </th>
            <th>
              Phone number{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                className={styles.filterIcon}
                onClick={onFilterClick}
              />
            </th>
            <th className={styles.dateHeader}>
              Date joined{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                className={styles.filterIcon}
                onClick={onFilterClick}
              />
            </th>
            <th>
              Status{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                className={styles.filterIcon}
                onClick={onFilterClick}
              />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} onClick={() => storage.saveSelectedUser(user)}>
                <td>{user.organization}</td>
                <td>
                  {user.username ||
                    (user.email ? user.email.split("@")[0] : "N/A")}
                </td>
                <td className={styles.emailCell}>{user.email}</td>
                <td>{user.phone}</td>
                <td className={styles.dateCell}>{user.dateJoined}</td>
                <td>
                  <span
                    className={`${styles.statusPill} ${styles[user.status.toLowerCase()]}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className={styles.actions}>
                  <img
                    src="/menu.png"
                    alt="more"
                    onClick={(e) => handleToggleMenu(e, user)}
                    className={styles.menuTrigger}
                  />
                  {activeMenuId === user.id && (
                    <ActionMenu
                      isVisible={true}
                      onClose={() => setActiveMenuId(null)}
                      userId={user.id}
                    />
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className={styles.noData}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
