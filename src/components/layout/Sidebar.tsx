import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Briefcase,
  Home,
  Users,
  Handshake,
  PiggyBank,
  Sack,
  ClipboardList,
  UserCheck,
  UserX,
  Star,
  Building2,
  Coins,
  FileText,
  Receipt,
  ScrollText,
  SlidersHorizontal,
  ChartBar,
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import styles from './Sidebar.module.scss';

const navItems = [
  { to: '/', icon: Briefcase, label: 'Switch Organization', hasDropdown: true },
  { to: '/dashboard', icon: Home, label: 'Dashboard' },

  { section: 'CUSTOMERS' },
  { to: '/users', icon: Users, label: 'Users' },
  { to: '/guarantors', icon: Handshake, label: 'Guarantors' },
  { to: '/loans', icon: Sack, label: 'Loans' },
  { to: '/decision-models', icon: ClipboardList, label: 'Decision Models' },
  { to: '/savings', icon: PiggyBank, label: 'Savings' },
  { to: '/loan-requests', icon: FileText, label: 'Loan Requests' },
  { to: '/whitelist', icon: UserCheck, label: 'Whitelist' },
  { to: '/karma', icon: UserX, label: 'Karma' },

  { section: 'BUSINESSES' },
  { to: '/organization', icon: Building2, label: 'Organization' },
  { to: '/loan-products', icon: FileText, label: 'Loan Products' },
  { to: '/savings-products', icon: PiggyBank, label: 'Savings Products' },
  { to: '/fees-charges', icon: Coins, label: 'Fees and Charges' },
  { to: '/transactions', icon: Receipt, label: 'Transactions' },
  { to: '/services', icon: SlidersHorizontal, label: 'label': 'Services' },
  { to: '/service-account', icon: UserCheck, label: 'Service Account' },
  { to: '/settlements', icon: ScrollText, label: 'Settlements' },
  { to: '/reports', icon: ChartBar, label: 'Reports' },

  { section: 'SETTINGS' },
  { to: '/preferences', icon: Settings, label: 'Preferences' },
  { to: '/fees-pricing', icon: Receipt, label: 'Fees and Pricing' },
  { to: '/audit-logs', icon: FileText, label: 'Audit Logs' },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Hamburger */}
      <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.inner}>
          {/* Logo + Switch Org */}
          <div className={styles.topSection}>
            <div className={styles.logo}>
              <Briefcase size={32} color="#39CDCC" />
              <span>lendsqr</span>
            </div>

            <button className={styles.switchOrg}>
              <Briefcase size={20} />
              <span>Switch Organization</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Dashboard Link */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
          >
            <Home size={20} />
            <span>Dashboard</span>
          </NavLink>

          {/* Navigation Groups */}
          {navItems.map((item, index) => {
            if ('section' in item) {
              return (
                <div key={index} className={styles.sectionHeader}>
                  {item.section}
                </div>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ''}`
                }
                end // exact match for "/"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={16} className={styles.dropdownIcon} />}
              </NavLink>
            );
          })}

          {/* Logout at bottom */}
          <div className={styles.logout}>
            <LogOut size={20} />
            <span>Logout</span>
          </div>

          <div className={styles.version}>v1.2.0</div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
};