import React from "react";
import styles from "./BorrowerNav.module.scss";

const BorrowerNav: React.FC = () => {
  return (
    <aside className={styles.borrowerNav}>
      <div className={styles.navContainer}>
        
        {/* First Box: Switch Organization */}
        <div className={styles.navBox}>
          <img src="/Vector1.png" alt="" className={styles.vector1} />
          <img src="/Vector2.png" alt="" className={styles.vector2} />
          <span className={styles.orgText}>Switch Organization</span>
          <img src="/next.png" alt="" className={styles.nextIcon} />
        </div>

        {/* Dashboard Section with Hover States */}
        <div className={styles.navLink}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          
          <div className={styles.secondaryBox}>
            <img src="/Vector3.png" alt="" className={styles.vector3} />
            <img src="/Vector4.png" alt="" className={styles.vector4} />
            <span className={styles.dashboardText}>Dashboard</span>
          </div>
        </div>

        {/* Section Header: CUSTOMERS */}
        <span className={styles.sectionHeader}>CUSTOMERS</span>

        {/* Users Link */}
        <div className={styles.navLink} style={{ top: '194px' }}>
          <div className={styles.activeBase}></div>
          <div className={styles.activeStrip}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/user-friends.png" alt="" className={styles.userFriendsIcon} />
            <span className={styles.dashboardText}>Users</span>
          </div>
        </div>

        {/* Guarantors Link */}
        <div className={styles.navLink} style={{ top: '244px' }}> 
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/users.png" alt="" className={styles.userIcon} />
            <span className={styles.dashboardText}>Guarantors</span>
          </div>
        </div>

        {/* Loans Link */}
        <div className={styles.navLink} style={{ top: '294px' }}>
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/sack 1.png" alt="" className={styles.sackIcon} />
            <span className={styles.dashboardText}>Loans</span>
          </div>
        </div>

        {/* Decision Models Link */}
        <div className={styles.navLink} style={{ top: '344px' }}>
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/handshake.png" alt="" className={styles.handshakeIcon} />
            <span className={styles.dashboardText}>Decision Models</span>
          </div>
        </div>

        {/* Savings Link */}
        <div className={styles.navLink} style={{ top: '394px' }}>
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/piggybank.png" alt="" className={styles.piggyIcon} />
            <span className={styles.dashboardText}>Savings</span>
          </div>
        </div>

        {/* Loan Requests Link */}
        <div className={styles.navLink} style={{ top: '444px' }}>
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/Group 104.png" alt="" className={styles.loanRequestIcon} />
            <span className={styles.dashboardText}>Loan Requests</span>
          </div>
        </div>

        {/* Whitelist Link */}
        <div className={styles.navLink} style={{ top: '494px' }}>
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/usercheck.png" alt="" className={styles.userCheckIcon} />
            <span className={styles.dashboardText}>Whitelist</span>
          </div>
        </div>

        {/* Karma Link */}
        <div className={styles.navLink} style={{ top: '544px' }}>
          <div className={styles.activeBase} style={{ top: 0 }}></div>
          <div className={styles.activeStrip} style={{ top: 0 }}></div>
          
          <div className={styles.secondaryBox} style={{ top: '10px' }}>
            <img src="/usertime.png" alt="" className={styles.userTimeIcon} />
            <span className={styles.dashboardText}>Karma</span>
          </div>
        </div>

        {/* Section Header: BUSINESSES */}
        <span className={styles.sectionHeader} style={{ top: '594px' }}>BUSINESSES</span>

      </div>
    </aside>
  );
};

export default BorrowerNav;