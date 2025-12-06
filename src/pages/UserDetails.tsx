import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/common";
import { User } from "@/types";
import { Star, ArrowLeft } from "lucide-react";
import styles from "./UserDetails.module.scss";

export const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("general");

  const user: User = JSON.parse(localStorage.getItem("currentUser") || "{}");

  if (!user?.id) {
    return <div>User not found</div>;
  }

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <Layout>
      <div className={styles.container}>
        {/* Back Button */}
        <button onClick={() => navigate("/users")} className={styles.backBtn}>
          <ArrowLeft size={20} />
          Back to Users
        </button>

        <div className={styles.header}>
          <h1>User Details</h1>
          <div className={styles.actions}>
            <Button
              variant="secondary"
              style={{ borderColor: "#E4033B", color: "#E4033B" }}
            >
              BLACKLIST USER
            </Button>
            <Button variant="primary">ACTIVATE USER</Button>
          </div>
        </div>

        {/* User Header Card */}
        <div className={styles.userCard}>
          <div className={styles.left}>
            <img
              src={user.profile?.avatar || "https://i.pravatar.cc/150"}
              alt=""
              className={styles.avatar}
            />
            <div>
              <h2>
                {user.profile?.firstName} {user.profile?.lastName}
              </h2>
              <p>{user.userName || "LSQFf587g90"}</p>
            </div>
          </div>

          <div className={styles.tier}>
            <p>User's Tier</p>
            <div className={styles.stars}>
              <Star fill="#E9B200" color="#E9B200" size={20} />
              <Star fill="#E9B200" color="#E9B200" size={20} />
              <Star fill="none" color="#E9B200" size={20} />
            </div>
          </div>

          <div className={styles.balance}>
            <h3>₦{user.accountBalance?.toLocaleString() || "200,000.00"}</h3>
            <p>9912345678 / Providus Bank</p>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${
                activeTab === tab.toLowerCase().replace(" ", "-")
                  ? styles.active
                  : ""
              }`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(" ", "-"))}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* General Details Content */}
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Personal Information</h3>
            <div className={styles.grid}>
              <div>
                <p className={styles.label}>FULL NAME</p>
                <p className={styles.value}>
                  {user.profile?.firstName} {user.profile?.lastName}
                </p>
              </div>
              <div>
                <p className={styles.label}>PHONE NUMBER</p>
                <p className={styles.value}>{user.phoneNumber}</p>
              </div>
              <div>
                <p className={styles.label}>EMAIL ADDRESS</p>
                <p className={styles.value}>{user.email}</p>
              </div>
              <div>
                <p className={styles.label}>BVN</p>
                <p className={styles.value}>
                  {user.profile?.bvn || "07060780922"}
                </p>
              </div>
              <div>
                <p className={styles.label}>GENDER</p>
                <p className={styles.value}>
                  {user.profile?.gender || "Female"}
                </p>
              </div>
              <div>
                <p className={styles.label}>MARITAL STATUS</p>
                <p className={styles.value}>Single</p>
              </div>
              <div>
                <p className={styles.label}>CHILDREN</p>
                <p className={styles.value}>None</p>
              </div>
              <div>
                <p className={styles.label}>TYPE OF RESIDENCE</p>
                <p className={styles.value}>Parent's Apartment</p>
              </div>
            </div>
          </div>

          {/* You can duplicate this section for other tabs — just change title/data */}
          {/* Education and Employment, Guarantor, etc. */}
        </div>
      </div>
    </Layout>
  );
};
