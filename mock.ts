// 在page.tsx文件中，替换data={[]}为以下mock数据
export const mockData: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      market_cap_rank: 1,
      thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      data: {
        price: 42850.25,
        price_change_percentage_24h: { usd: 2.45 },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "eth",
      market_cap_rank: 2,
      thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      large: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      data: {
        price: 2530.78,
        price_change_percentage_24h: { usd: 1.23 },
      },
    },
  },
  {
    item: {
      id: "binancecoin",
      name: "BNB",
      symbol: "bnb",
      market_cap_rank: 4,
      thumb:
        "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png",
      large:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
      data: {
        price: 315.67,
        price_change_percentage_24h: { usd: -0.56 },
      },
    },
  },
  {
    item: {
      id: "ripple",
      name: "XRP",
      symbol: "xrp",
      market_cap_rank: 6,
      thumb:
        "https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png",
      large:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
      data: {
        price: 0.6234,
        price_change_percentage_24h: { usd: 3.78 },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "sol",
      market_cap_rank: 5,
      thumb: "https://assets.coingecko.com/coins/images/4128/thumb/solana.png",
      large: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
      data: {
        price: 98.45,
        price_change_percentage_24h: { usd: 5.12 },
      },
    },
  },
  {
    item: {
      id: "cardano",
      name: "Cardano",
      symbol: "ada",
      market_cap_rank: 8,
      thumb: "https://assets.coingecko.com/coins/images/975/thumb/cardano.png",
      large: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
      data: {
        price: 0.5123,
        price_change_percentage_24h: { usd: -1.25 },
      },
    },
  },
  {
    item: {
      id: "dogecoin",
      name: "Dogecoin",
      symbol: "doge",
      market_cap_rank: 9,
      thumb: "https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png",
      large: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png",
      data: {
        price: 0.0812,
        price_change_percentage_24h: { usd: 0.89 },
      },
    },
  },
  {
    item: {
      id: "polkadot",
      name: "Polkadot",
      symbol: "dot",
      market_cap_rank: 11,
      thumb:
        "https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png",
      large:
        "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
      data: {
        price: 6.78,
        price_change_percentage_24h: { usd: 2.34 },
      },
    },
  },
  {
    item: {
      id: "chainlink",
      name: "Chainlink",
      symbol: "link",
      market_cap_rank: 15,
      thumb:
        "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png",
      large:
        "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
      data: {
        price: 14.23,
        price_change_percentage_24h: { usd: -0.45 },
      },
    },
  },
  {
    item: {
      id: "litecoin",
      name: "Litecoin",
      symbol: "ltc",
      market_cap_rank: 20,
      thumb: "https://assets.coingecko.com/coins/images/2/thumb/litecoin.png",
      large: "https://assets.coingecko.com/coins/images/2/large/litecoin.png",
      data: {
        price: 68.91,
        price_change_percentage_24h: { usd: 1.67 },
      },
    },
  },
];
