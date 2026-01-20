import { fetcher } from "@/lib/coingecko.actions";
import Datatable from "../Datatable";
import Image from "next/image";
import { cn, formatCurrency, formatPercentage } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

const Categories = async () => {
  // 1. fetch the data
  const categories = await fetcher<Category[]>("/coins/categories");
  // 2. create columns
  const columns: DataTableColumn<Category>[] = [
    {
      header: "Category",
      cellClassName: "category-cell",
      cell: (categories) => categories.name,
    },
    {
      header: "Top Gainers",
      cellClassName: "top-gainers-cell",
      cell: (categories) => {
        return categories.top_3_coins.map((coin) => (
          <Image src={coin} alt="" key={coin} width={28} height={28} />
        ));
      },
    },
    {
      header: "24h Change",
      cellClassName: "change-header-cell",
      cell: (categories) => {
        const isTrendingUp = categories.market_cap_change_24h > 0;
        return (
          <div
            className={cn(
              "change-cell",
              isTrendingUp ? "text-green-500" : "text-red-500",
            )}
          >
            <p className="flex items-center">
              {formatPercentage(categories.market_cap_change_24h)}
              {isTrendingUp ? (
                <TrendingUp width={16} height={16} />
              ) : (
                <TrendingDown width={16} height={16} />
              )}
            </p>
          </div>
        );
      },
    },
    {
      header: "Market Cap",
      cellClassName: "market-cap-cell",
      cell: (categories) => formatCurrency(categories.market_cap),
    },
    {
      header: "24h Volume",
      cellClassName: "volume-cell",
      cell: (categories) => formatCurrency(categories.volume_24h),
    },
  ];
  // 3. using DataTable.tsx

  // 4. matching the styles
  return (
    <div id="categories" className="custom-scrollbar">
      <h4>Top Categories</h4>
      <Datatable
        columns={columns}
        data={categories?.slice(0, 10)}
        rowKey={(_, index) => index}
        tableClassName="mt-3"
      />
    </div>
  );
};

export default Categories;
