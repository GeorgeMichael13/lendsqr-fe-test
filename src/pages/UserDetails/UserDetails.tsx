import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopNav from "@/components/topnav/TopNav";
import BorrowerNav from "@/components/Details/BorrowerNavDetails";
import { useUsers } from "@/hooks/useUsers";
import { storage } from "@/utils/localStorage";
import { User } from "@/types/user";
import styles from "./UserDetails.module.scss";

const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { updateUserStatus, loading: statusLoading } = useUsers();

  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("General Details");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added for mobile menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (id) {
      const allUsers = storage.getAllUsers();
      if (allUsers) {
        const cachedUser = allUsers.find((u) => String(u.id) === String(id));
        if (cachedUser) {
          setUser(cachedUser);
        }
      }
    }
  }, [id]);

  const handleBlacklist = async () => {
    if (user?.id) {
      await updateUserStatus(user.id, "Blacklisted");
      const updatedUser = { ...user, status: "Blacklisted" as any };
      setUser(updatedUser);
      storage.updateUserInMasterList(user.id, "Blacklisted" as any);
    }
  };

  const handleActivate = async () => {
    if (user?.id) {
      await updateUserStatus(user.id, "Active");
      const updatedUser = { ...user, status: "Active" as any };
      setUser(updatedUser);
      storage.updateUserInMasterList(user.id, "Active" as any);
    }
  };

  const formatIncome = (showFullRange: boolean = true) => {
    const income = user?.education?.monthlyIncome;
    if (!income) return "₦0.00";

    let min = "";
    let max = "";

    if (Array.isArray(income)) {
      [min, max] = income;
    } else if (typeof income === "string") {
      if (income.includes("-")) {
        [min, max] = income.split("-").map((s) => s.trim());
      } else {
        min = income;
      }
    }

    if (!showFullRange) return min.startsWith("₦") ? min : `₦${min}`;

    const formattedMin = min.startsWith("₦") ? min : `₦${min}`;
    const formattedMax = max ? (max.startsWith("₦") ? max : `₦${max}`) : "";

    return formattedMax ? `${formattedMin} - ${formattedMax}` : formattedMin;
  };

  if (!user) return <div className={styles.error}>User not found</div>;

  return (
    <div className={styles.pageContainer}>
      <TopNav onToggleMenu={toggleMenu} /> 
      
      <div className={styles.mainLayout}>
        <aside className={`${styles.sidebarWrapper} ${isMenuOpen ? styles.showMenu : ""}`}>
          <BorrowerNav />
        </aside>

        {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

        <main className={styles.contentArea}>
          <div className={styles.contentWrapper}>
            <div className={styles.headerSection}>
              <button
                className={styles.backButton}
                onClick={() => navigate("/dashboard/users")}
              >
                <img src="/back.png" alt="back" className={styles.backIcon} />
                <span>Back to Users</span>
              </button>
              <div className={styles.titleRow}>
                <h2>User Details</h2>
                <div className={styles.actionBtns}>
                  <button
                    className={styles.blacklistBtn}
                    onClick={handleBlacklist}
                    disabled={statusLoading}
                  >
                    {statusLoading ? "Updating..." : "Blacklist User"}
                  </button>
                  <button
                    className={styles.activateBtn}
                    onClick={handleActivate}
                    disabled={statusLoading}
                  >
                    {statusLoading ? "Updating..." : "Activate User"}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.userSummaryCard}>
              <div className={styles.basicInfo}>
                <div className={styles.avatarContainer}>
                  <div className={styles.ellipse} />
                  <img
                    src={user.personalInfo?.avatar || "/avataricon.png"}
                    alt="user"
                    className={styles.avatarIcon}
                  />
                </div>
                <div className={styles.nameSection}>
                  <h3>{user.personalInfo?.fullName || "Grace Effiom"}</h3>
                  <p>{user.id || "LSQ12345"}</p>
                </div>
              </div>
              <div className={styles.verticalLine} />
              <div className={styles.tierSection}>
                <p>User's Tier</p>
                <div className={styles.stars}>
                  <img src="/star3.png" alt="star" />
                  <img src="/star2.png" alt="star" />
                  <img src="/star1.png" alt="star" />
                </div>
              </div>
              <div className={styles.verticalLine} />
              <div className={styles.bankSection}>
                <h3>{formatIncome(false)}</h3>
                <p>9912345678/Providus Bank</p>
              </div>
              <div className={styles.tabSection}>
                {[
                  "General Details",
                  "Documents",
                  "Bank Details",
                  "Loans",
                  "Savings",
                  "App and System",
                ].map((tab) => (
                  <div
                    key={tab}
                    className={`${styles.tabItem} ${activeTab === tab ? styles.activeTab : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span>{tab}</span>
                    {activeTab === tab && <div className={styles.activeLine} />}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.userMainCard}>
              <section className={styles.infoSection}>
                <h4>Personal Information</h4>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <p>full Name</p>
                    <span>{user.personalInfo?.fullName || "Grace Effiom"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Phone Number</p>
                    <span>{user.personalInfo?.phone || "07060780922"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Email Address</p>
                    <span>{user.personalInfo?.email || "grace@gmail.com"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Bvn</p>
                    <span>{user.personalInfo?.bvn || "07060780922"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Gender</p>
                    <span>{user.personalInfo?.gender || "Female"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Marital status</p>
                    <span>{user.personalInfo?.maritalStatus || "Single"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Children</p>
                    <span>{user.personalInfo?.children || "None"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Type of residence</p>
                    <span>
                      {user.personalInfo?.residence || "Parent’s Apartment"}
                    </span>
                  </div>
                </div>
              </section>

              <hr className={styles.divider} />

              <section className={styles.infoSection}>
                <h4>Education and Employment</h4>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <p>level of education</p>
                    <span>{user.education?.level || "B.Sc"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>employment status</p>
                    <span>
                      {user.education?.employmentStatus || "Employed"}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>sector of employment</p>
                    <span>{user.education?.sector || "FinTech"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Duration of employment</p>
                    <span>{user.education?.duration || "2 years"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>office email</p>
                    <span>
                      {user.education?.officeEmail || "grace@lendsqr.com"}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Monthly income</p>
                    <span>{formatIncome(true)}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>loan repayment</p>
                    <span>{user.education?.loanRepayment || "40,000"}</span>
                  </div>
                </div>
              </section>

              <hr className={styles.divider} />

              <section className={styles.infoSection}>
                <h4>Socials</h4>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <p>Twitter</p>
                    <span>{user.socials?.twitter || "@grace_effiom"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Facebook</p>
                    <span>{user.socials?.facebook || "Grace Effiom"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Instagram</p>
                    <span>{user.socials?.instagram || "@grace_effiom"}</span>
                  </div>
                </div>
              </section>

              <hr className={styles.divider} />

              <section className={styles.infoSection}>
                <h4>Guarantor</h4>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <p>full Name</p>
                    <span>{user.guarantor?.fullName || "Debby Ogana"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Phone Number</p>
                    <span>{user.guarantor?.phone || "07060780922"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Email Address</p>
                    <span>{user.guarantor?.email || "debby@gmail.com"}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <p>Relationship</p>
                    <span>{user.guarantor?.relationship || "Sister"}</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetails;