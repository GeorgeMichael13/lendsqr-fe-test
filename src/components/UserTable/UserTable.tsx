import React from "react";
import styles from "./UserTable.module.scss";
import Pagination from "../Pagination/Pagination";

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

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableBase}>
        <thead>
          <tr>
            <th>
              Organization <img src="/filter-icon.png" alt="filter" />
            </th>
            <th>
              Username <img src="/filter-icon.png" alt="filter" />
            </th>
            <th>
              Email <img src="/filter-icon.png" alt="filter" />
            </th>
            <th>
              Phone number <img src="/filter-icon.png" alt="filter" />
            </th>
            <th>
              Date joined <img src="/filter-icon.png" alt="filter" />
            </th>
            <th>
              Status <img src="/filter-icon.png" alt="filter" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Optional chaining added here to prevent 'undefined' crash */}
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dateJoined}</td>
              <td>
                <span
                  className={`${styles.statusPill} ${
                    styles[user.status.toLowerCase()]
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className={styles.actions}>
                <img src="/menu.png" alt="more" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
