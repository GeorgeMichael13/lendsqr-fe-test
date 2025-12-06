import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ChevronUp, ChevronDown } from "lucide-react";
import { User } from "../../types";
import styles from "./DataTable.module.scss";
import { ActionsDropdown } from "./ActionsDropdown";

interface DataTableProps {
  data: User[];
  onViewDetails: (user: User) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  onViewDetails,
}) => {
  const [sorting, setSorting] = React.useState<any[]>([]);

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "orgName",
        header: "Organization",
      },
      {
        accessorKey: "userName",
        header: "Username",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone Number",
      },
      {
        accessorKey: "dateJoined",
        header: "Date Joined",
        cell: ({ row }: any) => {
          const date = new Date(row.original.dateJoined);
          return date.toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }: any) => {
          const status = row.original.status.toLowerCase();
          return (
            <Badge variant={status as any}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          );
        },
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }: any) => (
          <ActionsDropdown user={row.original} onViewDetails={onViewDetails} />
        ),
      },
    ],
    [onViewDetails]
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.th}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={
                        header.column.getCanSort() ? styles.sortable : ""
                      }
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === "desc" ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronUp size={16} />
                        )
                      ) : (
                        <span className={styles.sortIcon}>↕</span>
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
