import { useState } from "react";
import UserTable from "../UserTable/UserTable";
import styles from "./Pagination.module.scss";

const UserPage = ({ allUsers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Calculate the index for the slice
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // These are the 9 users shown on the current page
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  return (
    <div className={styles.dashboardContainer}>
      {/* Pass currentUsers to your Table component instead of allUsers */}
      <UserTable users={currentUsers} />

      {/* Pagination Component */}
      <div className={styles.paginationWrapper}>
        <div className={styles.showingText}>
          Showing
          <select
            value={usersPerPage}
            onChange={(e) => {
              /* Handle change if needed */
            }}
          >
            <option value="9">9</option>
          </select>
          out of {allUsers.length}
        </div>

        <div className={styles.pageControls}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={styles.navBtn}
          >
            <img src="/pvector2.png" alt="prev" />
          </button>

          {/* Logic to show page numbers like 1, 2, 3 ... 50 */}
          <span className={styles.pageNumbers}>
            <span className={styles.activePage}>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>{totalPages}</span>
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={styles.navBtn}
          >
            <img src="/pvector3.png" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};
