import React from "react";
import { HeaderGroup } from "@tanstack/react-table";
import { ChevronUp, ChevronDown } from "lucide-react";
import styles from "./TableHeader.module.scss";

interface Props<T> {
  headerGroup: HeaderGroup<T>;
}

export const TableHeader = <T extends object>({ headerGroup }: Props<T>) => {
  return (
    <tr>
      {headerGroup.headers.map((header) => (
        <th key={header.id} className={styles.th}>
          {header.isPlaceholder ? null : (
            <div
              className={header.column.getCanSort() ? styles.sortable : ""}
              onClick={header.column.getToggleSortingHandler()}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{
                asc: <ChevronUp size={14} />,
                desc: <ChevronDown size={14} />,
              }[header.column.getIsSorted() as string] ?? (
                <span className={styles.sortIcon}>Filter</span>
              )}
            </div>
          )}
        </th>
      ))}
    </tr>
  );
};
