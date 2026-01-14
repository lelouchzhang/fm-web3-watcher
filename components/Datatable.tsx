import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const Datatable = <T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerRowClassName,
  headerCellClassName,
  bodyRowClassName,
  bodyCellClassName,
  headerClassName,
}: DataTableProps<T>) => {
  return (
    <Table className={cn("custom-scrollbar", tableClassName)}>
      <TableHeader className={headerClassName}>
        <TableRow className={cn("hover:bg-transparent!", headerRowClassName)}>
          {columns.map((column, i) => (
            <TableHead
              key={i}
              className={cn(
                "bg-dark-400 py-4 text-purple-100 first:pl-5 last:pr-5",
                headerCellClassName,
                column.headClassName,
              )}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, ri) => (
          <TableRow
            key={rowKey(row, ri)}
            className={cn(
              "border-purper-100/5 hover:bg-dark-400/30! relative overflow-hidden rounded-lg border-b",
              bodyRowClassName,
            )}
          >
            {columns.map((column, ci) => (
              <TableCell
                key={ci}
                className={cn(
                  "py-4 first:pl-5 last:pr-5",
                  bodyCellClassName,
                  column.cellClassName,
                )}
              >
                {column.cell(row, ci)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Datatable;
