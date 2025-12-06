import React from "react";
import styles from "./Badge.module.scss";

type BadgeVariant = "active" | "inactive" | "pending" | "blacklisted";

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  className = "",
}) => {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};
