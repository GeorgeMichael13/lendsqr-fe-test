import React from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (size: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange?.(Number(e.target.value));
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.showing}>
        Showing
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          className={styles.select}
        >
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        out of {totalItems}
      </div>

      <div className={styles.pages}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.arrow}
        >
          ←
        </button>

        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`${styles.page} ${
                currentPage === page ? styles.active : ""
              }`}
            >
              {page}
            </button>
          );
        })}

        {totalPages > 5 && (
          <>
            <span className={styles.dots}>...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className={styles.page}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.arrow}
        >
          →
        </button>
      </div>
    </div>
  );
};
