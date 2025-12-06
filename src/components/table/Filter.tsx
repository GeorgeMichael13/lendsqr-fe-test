import React from "react";
import { Button } from "../common";
import styles from "./Filters.module.scss";

interface FiltersProps {
  filters: {
    organization: string;
    username: string;
    email: string;
    date: string;
    phone: string;
    status: string;
  };
  onChange: (key: string, value: string) => void;
  onReset: () => void;
  onApply: () => void;
}

const organizations = ["Lendsqr", "Irorun", "Lendstar"]; // mock — in real app, extract from data

export const Filters: React.FC<FiltersProps> = ({
  filters,
  onChange,
  onReset,
  onApply,
}) => {
  return (
    <div className={styles.filters}>
      <div className={styles.field}>
        <label>Organization</label>
        <select
          value={filters.organization}
          onChange={(e) => onChange("organization", e.target.value)}
        >
          <option value="">Select</option>
          {organizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label>Username</label>
        <input
          type="text"
          placeholder="User"
          value={filters.username}
          onChange={(e) => onChange("username", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={filters.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Date</label>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => onChange("date", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={filters.phone}
          onChange={(e) => onChange("phone", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Status</label>
        <select
          value={filters.status}
          onChange={(e) => onChange("status", e.target.value)}
        >
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={onReset}>
          Reset
        </Button>
        <Button variant="primary" onClick={onApply}>
          Filter
        </Button>
      </div>
    </div>
  );
};
