import React, { useEffect, useState } from "react";
import UserTable from "@/components/UserTable/UserTable";
import styles from "../../components/Pagination/Pagination.module.scss";

const UserPage = ({ allUsers: initialUsers = [] }) => {
  const [allUsers, setAllUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;

  // Added fetching logic to ensure data is actually present
  useEffect(() => {
    const getInitialData = async () => {
      const cachedData = localStorage.getItem("lendsqr_users");

      if (cachedData) {
        setAllUsers(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://lendsqr-api-test.free.beeceptor.com/users",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        localStorage.setItem("lendsqr_users", JSON.stringify(data));
        setAllUsers(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (allUsers.length === 0) {
      getInitialData();
    } else {
      setLoading(false);
    }
  }, [allUsers.length]);

  const safeUsers = Array.isArray(allUsers) ? allUsers : [];
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = safeUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(safeUsers.length / usersPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  if (loading) {
    return <div style={{ padding: "50px" }}>Loading 500 records...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <UserTable users={currentUsers} />

      <div className={styles.paginationWrapper}>
        <div className={styles.showingText}>
          Showing
          <select value={usersPerPage} readOnly>
            <option value="9">9</option>
          </select>
          out of {safeUsers.length}
        </div>

        <div className={styles.pageControls}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={styles.navBtn}
          >
            <img src="/pvector2.png" alt="prev" />
          </button>

          <span className={styles.pageNumbers}>
            {getPageNumbers().map((page, index) => (
              <span
                key={index}
                className={currentPage === page ? styles.activePage : ""}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                style={{
                  cursor: typeof page === "number" ? "pointer" : "default",
                }}
              >
                {page}
              </span>
            ))}
          </span>

          <button
            disabled={currentPage === totalPages || totalPages === 0}
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

export default UserPage;
