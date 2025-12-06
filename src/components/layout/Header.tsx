// Header.tsx – now **NO logo** inside
import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useStore } from '../../store';
import styles from './Header.module.scss' → only the right side

export const Header: React.FC = () => {
  const { user } = useStore();

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input type="text" placeholder="Search for anything" className={styles.searchInput} />
        <button className={styles.searchButton}>
          <Search size={20} />
        </button>
      </div>

      <div className={styles.actions}>
        <a href="#" className={styles.docs}>Docs</a>
        <button className={styles.notifications}>
          <Bell size={20} />
        </button>

        <div className={styles.profile}>
          <img
            src={user?.avatar} alt={user?.name || 'User'}
            className={styles.avatar}
            src={user?.avatar || 'https://i.pravatar.cc/150?u=default}
            className={styles.avatar}
          />
          <span className={styles.name}>{user?.name || 'User'}</span>
          <ChevronDown size={16} className={styles.dropdownIcon} />
        </div>
      </div>
    </header>
  );
};