import React from "react";
import styles from "./SummaryCard.module.scss";

interface SummaryCardProps {
  icon: string;
  title: string;
  count: string;
  iconBgColor: string;
  className?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  icon,
  title,
  count,
  iconBgColor,
  className,
}) => {
  return (
    <div className={`${styles.cardBase} ${className}`}>
      <div
        className={styles.iconWrapper}
        style={{ backgroundColor: iconBgColor }}
      >
        <img src={icon} alt={title} className={styles.icon} />
      </div>
      <p className={styles.cardTitle}>{title}</p>
      <h2 className={styles.cardCount}>{count}</h2>
    </div>
  );
};

export default SummaryCard;
