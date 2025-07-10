import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

type Column<T> = {
  label: string;
  accessor: keyof T | string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
};

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: keyof T | string;
  onRowClick?: (item: T) => void;
  className?: string;
}

export function DataTable<T>({
  data,
  columns,
  rowKey,
  onRowClick,
  className = "",
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const getValue = (item: any, accessor: string) => {
    return accessor.split(".").reduce((obj, key) => obj?.[key], item);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const aValue = getValue(a, sortKey);
    const bValue = getValue(b, sortKey);

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortAsc
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortAsc ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full rounded-2xl shadow-lg overflow-hidden border border-midPurple bg-white text-black">
        <thead>
          <tr className="bg-midPurple text-white text-left text-sm uppercase tracking-wider">
            {columns.map((col) => (
              <th
                key={col.accessor.toString()}
                className="px-6 py-4 whitespace-nowrap cursor-pointer select-none"
                onClick={() =>
                  col.sortable && handleSort(col.accessor.toString())
                }
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {col.sortable &&
                    sortKey === col.accessor &&
                    (sortAsc ? <ArrowUp size={16} /> : <ArrowDown size={16} />)}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={getValue(item, rowKey.toString())}
              onClick={() => onRowClick?.(item)}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-purple-200 cursor-pointer transition-colors duration-200`}
            >
              {columns.map((col) => (
                <td
                  key={col.accessor.toString()}
                  className="px-6 py-4 border-t border-gray-200 whitespace-nowrap"
                >
                  {col.render
                    ? col.render(item)
                    : (getValue(item, col.accessor.toString()) ?? "-")}
                </td>
              ))}
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-4 text-center text-gray-500 border-t border-gray-200"
              >
                Nenhum dado encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
