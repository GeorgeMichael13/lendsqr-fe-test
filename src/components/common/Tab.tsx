import React from "react";
import styles from "./Tab.module.scss";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      type="button"
      role="tab"
      aria-selected={isActive}
    >
      {label}
    </button>
  );
};

// Optional: Tabs container component (recommended)
interface TabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  activeTab,
  onTabChange,
  children,
}) => {
  return (
    <div className={styles.tabsContainer} role="tablist">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Tab) {
          return React.cloneElement(child as React.ReactElement<TabProps>, {
            isActive: child.props.label === activeTab,
            onClick: () => onTabChange(child.props.label),
          });
        }
        return child;
      })}
    </div>
  );
};
