import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BorrowerNavDetails.module.scss";

const BorrowerNavDetails: React.FC = () => {
  return (
    <aside className={styles.borrowerNav}>
      <div className={styles.navContainer}>
        {/* Switch Org */}
        <div className={styles.navBox}>
          <img src="/Vector1.png" alt="" className={styles.vector1} />
          <img src="/Vector2.png" alt="" className={styles.vector2} />
          <span className={styles.orgText}>Switch Organization</span>
          <img src="/next.png" alt="" className={styles.nextIcon} />
        </div>

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          style={{
            top: "100px",
            textDecoration: "none",
            display: "block",
            position: "absolute",
          }}
        >
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox}>
            <img src="/Vector3.png" alt="" className={styles.vector3} />
            <img src="/Vector4.png" alt="" className={styles.vector4} />
            <span className={styles.dashboardText}>Dashboard</span>
          </div>
        </NavLink>

        <span className={styles.sectionHeader}>CUSTOMERS</span>

        {/* Users Link */}
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          style={{
            top: "194px",
            textDecoration: "none",
            display: "block",
            position: "absolute",
          }}
        >
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/user-friends.png"
              alt=""
              className={styles.userFriendsIcon}
            />
            <span className={styles.dashboardText}>Users</span>
          </div>
        </NavLink>

        {/* Guarantors */}
        <div className={styles.navLink} style={{ top: "244px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/users.png" alt="" className={styles.userIcon} />
            <span className={styles.dashboardText}>Guarantors</span>
          </div>
        </div>

        {/* Loans */}
        <div className={styles.navLink} style={{ top: "294px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/sack 1.png" alt="" className={styles.sackIcon} />
            <span className={styles.dashboardText}>Loans</span>
          </div>
        </div>

        {/* Decision Models */}
        <div className={styles.navLink} style={{ top: "344px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/handshake.png" alt="" className={styles.handshakeIcon} />
            <span className={styles.dashboardText}>Decision Models</span>
          </div>
        </div>

        {/* Savings */}
        <div className={styles.navLink} style={{ top: "394px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/piggybank.png" alt="" className={styles.piggyIcon} />
            <span className={styles.dashboardText}>Savings</span>
          </div>
        </div>

        {/* Loan Requests */}
        <div className={styles.navLink} style={{ top: "444px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/Group 104.png"
              alt=""
              className={styles.loanRequestIcon}
            />
            <span className={styles.dashboardText}>Loan Requests</span>
          </div>
        </div>

        {/* Whitelist */}
        <div className={styles.navLink} style={{ top: "494px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/usercheck.png" alt="" className={styles.userCheckIcon} />
            <span className={styles.dashboardText}>Whitelist</span>
          </div>
        </div>

        {/* Karma */}
        <div className={styles.navLink} style={{ top: "544px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/usertime.png" alt="" className={styles.userTimeIcon} />
            <span className={styles.dashboardText}>Karma</span>
          </div>
        </div>

        <span className={styles.sectionHeader} style={{ top: "615px" }}>
          BUSINESSES
        </span>

        {/* Organization */}
        <div className={styles.navLink} style={{ top: "640px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/briefcase1.png"
              alt=""
              className={styles.briefcaseIcon}
            />
            <span className={styles.dashboardText}>Organization</span>
          </div>
        </div>

        {/* Loan Products */}
        <div className={styles.navLink} style={{ top: "690px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/Group 104.png"
              alt=""
              className={styles.loanProductIcon}
            />
            <span className={styles.dashboardText}>Loan Products</span>
          </div>
        </div>

        {/* Savings Products */}
        <div className={styles.navLink} style={{ top: "740px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/bank.png" alt="" className={styles.bankIcon} />
            <span className={styles.dashboardText}>Savings Products</span>
          </div>
        </div>

        {/* Fees and Charges */}
        <div className={styles.navLink} style={{ top: "790px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/coins-solid.png" alt="" className={styles.feesIcon} />
            <span className={styles.dashboardText}>Fees and Charges</span>
          </div>
        </div>

        {/* Transactions */}
        <div className={styles.navLink} style={{ top: "840px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/icon.png" alt="" className={styles.transactionsIcon} />
            <span className={styles.dashboardText}>Transactions</span>
          </div>
        </div>

        {/* Services */}
        <div className={styles.navLink} style={{ top: "890px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/galaxy.png" alt="" className={styles.servicesIcon} />
            <span className={styles.dashboardText}>Services</span>
          </div>
        </div>

        {/* Service Account */}
        <div className={styles.navLink} style={{ top: "940px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/user-cog.png"
              alt=""
              className={styles.serviceAccountIcon}
            />
            <span className={styles.dashboardText}>Service Account</span>
          </div>
        </div>

        {/* Settlements */}
        <div className={styles.navLink} style={{ top: "990px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/scroll.png" alt="" className={styles.settlementIcon} />
            <span className={styles.dashboardText}>Settlements</span>
          </div>
        </div>

        {/* Reports */}
        <div className={styles.navLink} style={{ top: "1040px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip} style={{ top: "10px" }}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/chartbar.png" alt="" className={styles.reportsIcon} />
            <span className={styles.dashboardText}>Reports</span>
          </div>
        </div>

        <span className={styles.sectionHeader} style={{ top: "1110px" }}>
          SETTINGS
        </span>

        {/* Preferences */}
        <div className={styles.navLink} style={{ top: "1140px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/slider.png" alt="" className={styles.preferencesIcon} />
            <span className={styles.dashboardText}>Preferences</span>
          </div>
        </div>

        {/* Fees and Pricing */}
        <div className={styles.navLink} style={{ top: "1190px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/badge-percent.png"
              alt=""
              className={styles.badgePercentIcon}
            />
            <span className={styles.dashboardText}>Fees and Pricing</span>
          </div>
        </div>

        {/* Audit Logs */}
        <div className={styles.navLink} style={{ top: "1240px" }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img
              src="/clipboard-list.png"
              alt=""
              className={styles.auditLogsIcon}
            />
            <span className={styles.dashboardText}>Audit Logs</span>
          </div>
        </div>

        {/* SYSTEM MESSAGES */}
        <NavLink
          to="/dashboard/system-messages"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          style={{
            top: "1290px",
            textDecoration: "none",
            display: "block",
            position: "absolute",
            zIndex: 10,
          }}
        >
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          <div className={styles.secondaryBox} style={{ top: "10px" }}>
            <img src="/tire.png" alt="" className={styles.tireIcon} />
            <span className={styles.dashboardText}>Systems Messages</span>
          </div>
        </NavLink>

        {/* FOOTER SECTION: Divider & Logout */}
        <div className={styles.navFooter}>
          <div className={styles.divider}></div>
          <div className={styles.logoutWrapper}>
            <img src="/signout.png" alt="" className={styles.logoutIcon} />
            <span className={styles.logoutText}>Logout</span>
          </div>
        </div>

        {/* Version Info */}
        <span className={styles.versionText}>v1.2.0</span>
      </div>
    </aside>
  );
};

export default BorrowerNavDetails;
