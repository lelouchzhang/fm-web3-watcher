type OHLCData = [number, number, number, number, number];

interface NextPageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface CandlestickChartProps {
  data?: OHLCData[];
  liveOhlcv?: OHLCData | null;
  coinId: string;
  height?: number;
  children?: React.ReactNode;
  mode?: "historical" | "live";
  initialPeriod?: Period;
  liveInterval: "1s" | "1m";
  setLiveInterval: (interval: "1s" | "1m") => void;
}

interface ConverterProps {
  symbol: string;
  icon: string;
  priceList: Record<string, number>;
}

interface Ticker {
  market: {
    name: string;
  };
  base: string;
  target: string;
  converted_last: {
    usd: number;
  };
  timestamp: string;
  trade_url: string;
}

type Period = "daily";
// | "weekly"
// | "monthly"
// | "3months"
// | "6months"
// | "yearly"
// | "max";

interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

interface SearchCoin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number | null;
  thumb: string;
  large: string;
  data: {
    price?: number;
    price_change_percentage_24h: number;
  };
}

// Chart Section Props (used in ChartSection.tsx)
interface ChartSectionProps {
  coinData: {
    image: { large: string };
    name: string;
    symbol: string;
    market_data: {
      current_price: { usd: number };
    };
  };
  coinOHLCData: OHLCData[];
  coinId: string;
}

interface TopGainersLosers {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChangePercentage24h: number;
}

interface TopGainersLosersResponse {
  id: string;
  name: string;
  symbol: string;
  image: string;
  usd: number;
  usd_24h_change: number;
  usd_24h_vol: number;
  market_cap_rank: number;
}

interface PriceData {
  usd: number;
}

interface Trade {
  price?: number;
  timestamp?: number;
  type?: string;
  amount?: number;
  value?: number;
}

interface ExtendedPriceData {
  usd: number;
  coin?: string;
  price?: number;
  change24h?: number;
  marketCap?: number;
  volume24h?: number;
  timestamp?: number;
}

interface WebSocketMessage {
  type?: string;
  c?: string;
  ch?: string;
  i?: string;
  p?: number;
  pp?: number;
  pu?: number;
  m?: number;
  v?: number;
  vo?: number;
  o?: number;
  h?: number;
  l?: number;
  t?: number;
  to?: number;
  ty?: string;
  channel?: string;
  identifier?: string;
}

interface CoinDetailsData {
  id: string;
  name: string;
  symbol: string;
  asset_platform_id?: string | null;
  detail_platforms?: Record<
    string,
    {
      geckoterminal_url: string;
      contract_address: string;
    }
  >;
  image: {
    large: string;
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
      [key: string]: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
  };
  market_cap_rank: number;
  description: {
    en: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    subreddit_url: string;
  };
  tickers: Ticker[];
}

interface LiveDataProps {
  coinId: string;
  poolId: string;
  coin: CoinDetailsData;
  coinOHLCData?: OHLCData[];
  children?: React.ReactNode;
}

interface LiveCoinHeaderProps {
  name: string;
  image: string;
  livePrice?: number;
  livePriceChangePercentage24h: number;
  priceChangePercentage30d: number;
  priceChange24h: number;
}

interface Category {
  name: string;
  top_3_coins: string[];
  market_cap_change_24h: number;
  market_cap: number;
  volume_24h: number;
}

interface UseCoinGeckoWebSocketProps {
  coinId: string;
  poolId: string;
  liveInterval?: "1s" | "1m";
}

interface UseCoinGeckoWebSocketReturn {
  price: ExtendedPriceData | null;
  trades: Trade[];
  ohlcv: OHLCData | null;
  isConnected: boolean;
}

/**
 * @header 可以是简单文字，也可以是复合组件
 * @cell 单元格中可以放置原始值。也可以放按钮，进度条，图表，Popover...
 * @example 在「操作」列里塞一个 Popconfirm 删除按钮
 * ```TypeScript
 * const columns: DataTableColumn<User>[] = [
    { header: '姓名', cell: u => u.name },
    {
        header: '操作',
        cell: (u, i) => (
            <Popconfirm title="确定删除?" onConfirm={() => onDelete(u.id)}>
                <Button danger size="small">删除</Button>
            </Popconfirm>
        )
    }
];
```
* @headerClassName @cellClassName 列级的样式覆盖，可对于每一列的表头,每一列的单元格单独指示样式
*/
interface DataTableColumn<T> {
  header: React.ReactNode;
  cell: (row: T, index: number) => React.ReactNode;
  headClassName?: string;
  cellClassName?: string;
}

/**
 * @rowKey 行的唯一标识，等同于 React 的 key 属性
 * 这个类型设计把「表格」抽象成了「数据 → UI 的纯函数」：
 * @description f(columns, data, rowKey, ...classNames) => JSX
   只要你的业务能描述成「行列结构」，就能用这套类型零成本落地，且后续任何交互、样式、性能需求都可以在「外部」完成，而无需回炉改组件源码。
 */
interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey: (row: T, index: number) => React.Key;
  tableClassName?: string;
  headerClassName?: string;
  headerRowClassName?: string;
  headerCellClassName?: string;
  bodyRowClassName?: string;
  bodyCellClassName?: string;
}

type ButtonSize = "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

type PaginationLinkProps = {
  isActive?: boolean;
  size?: ButtonSize;
} & React.ComponentProps<"a">;

interface Pagination {
  currentPage: number;
  totalPages: number;
  hasOneMorePages: boolean;
}

interface HeaderProps {
  trendingCoins: TrendingCoin[];
}

type SearchItemCoin = SearchCoin | TrendingCoin["item"];

interface SearchItemProps {
  coin: SearchItemCoin;
  onSelect: (coinId: string) => void;
  isActiveName: boolean;
}

interface CoinGeckoErrorBody {
  error?: string;
}

type QueryParams = Record<string, string | number | boolean | undefined>;

interface PoolData {
  id: string;
  address: string;
  name: string;
  network: string;
}
