import React, { useState } from "react";
import styles from "./UserTable.module.scss";
import ActionMenu from "../ActionMenu/ActionMenu";

// Mock interface based on your Figma columns
interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

// Added onFilterClick to the interface
interface UserTableProps {
  users: User[];
  onFilterClick: () => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onFilterClick }) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const handleToggleMenu = (id: string) => {
    setActiveMenuId(activeMenuId === id ? null : id);
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
                onClick={onFilterClick}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>
              Username{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                onClick={onFilterClick}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>
              Email{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                onClick={onFilterClick}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>
              Phone number{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                onClick={onFilterClick}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th className={styles.dateHeader}>
              Date joined{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                onClick={onFilterClick}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th>
              Status{" "}
              <img
                src="/filter-icon.png"
                alt="filter"
                onClick={onFilterClick}
                style={{ cursor: "pointer" }}
              />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className={styles.dateCell}>{user.dateJoined}</td>
              <td>
                <span
                  className={`${styles.statusPill} ${
                    styles[user.status.toLowerCase()]
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className={styles.actions} style={{ position: "relative" }}>
                <img
                  src="/menu.png"
                  alt="more"
                  onClick={() => handleToggleMenu(user.id)}
                  style={{ cursor: "pointer" }}
                />

                {activeMenuId === user.id && (
                  <ActionMenu
                    isVisible={true}
                    onClose={() => setActiveMenuId(null)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
