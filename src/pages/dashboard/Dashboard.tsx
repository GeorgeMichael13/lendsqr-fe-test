import React from "react";
import TopNav from "../../components/topnav/TopNav";
import BorrowerNav from "../../components/BorrowerNav/BorrowerNav";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <TopNav />
      

      <div className={styles.layoutBody}>
        <BorrowerNav /> {/* Clean and reusable */}
        <main className={styles.mainContent}>
          {/* Main content logic goes here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
