import React from "react";
import { Row } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import styles from "./TableRow.module.scss";

interface Props<T> {
  row: Row<T>;
}

export const TableRow = <T extends object>({ row }: Props<T>) => {
  return (
    <tr className={styles.tr}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className={styles.td}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};
