import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNav from "../../components/topnav/TopNav";
import BorrowerNav from "../../components/BorrowerNav/BorrowerNav";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isUsersPage = location.pathname.includes("/dashboard/users");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.dashboardWrapper}>
      <TopNav onToggleMenu={toggleMenu} />

      <div className={styles.layoutBody}>
        <aside className={`${styles.sidebarWrapper} ${isMenuOpen ? styles.showMenu : ""}`}>
          <BorrowerNav />
        </aside>

        {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

        <main className={styles.mainContent}>
          {isUsersPage && (
            <div className={styles.usersSection}>
              <h1 className={styles.userPageTitle}>Users</h1>

              <div className={styles.statsContainer}>
                <SummaryCard
                  icon="/card1.png"
                  title="USERS"
                  count="2,453"
                  iconBgColor="rgba(223, 24, 255, 0.1)"
                />

                <SummaryCard
                  icon="/card2.png"
                  title="ACTIVE USERS"
                  count="2,453"
                  iconBgColor="rgba(87, 24, 255, 0.1)"
                />

                <SummaryCard
                  icon="/card3.png"
                  title="USERS WITH LOANS"
                  count="12,453"
                  iconBgColor="rgba(245, 95, 68, 0.1)"
                />

                <SummaryCard
                  icon="/card4.png"
                  title="USERS WITH SAVINGS"
                  count="102,453"
                  iconBgColor="rgba(255, 51, 102, 0.1)"
                />
              </div>
            </div>
          )}

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;