import CoinOverview from "@/components/CoinOverview";
import Datatable from "@/components/Datatable";
import { cn } from "@/lib/utils";
import { mockData } from "@/mock";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: "Name",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;
      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      );
    },
  },
  {
    header: "24h Change",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
      return (
        <div
          className={cn(
            "price-change",
            isTrendingUp ? "text-green-500" : "text-red-500",
          )}
        >
          <p>
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
            {Math.abs(item.data.price_change_percentage_24h.usd).toFixed(2)}%
          </p>
        </div>
      );
    },
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: (coin) => {
      return coin.item.data.price;
    },
  },
];

const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <CoinOverview />
        <p>Trending Coins</p>
      </section>
      <section className="mt-7 w-full space-y-4">
        <p>Categories</p>
        <Datatable
          columns={columns}
          data={mockData}
          rowKey={(coin) => coin.item.id}
          tableClassName="trending-table"
        />
      </section>
    </main>
  );
};

export default page;
