// src/components/layout/Layout.tsx  (this is the only place the logo lives)
import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import styles from "./Layout.module.scss";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      {/* Main content area */}
      <div className={styles.main}>
        {/* The SINGLE logo that belongs to both */}
        <div className={styles.sharedLogo}>
          <img src="/logo.svg" alt="lendsqr" />
        </div>
        <Header /> {/* Header does NOT contain the logo anymore */}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};
