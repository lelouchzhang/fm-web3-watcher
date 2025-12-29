import Image from "next/image";

const CoinOverview = () => {
  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <Image
          //   src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt="Bitcoin Logo"
          width={56}
          height={56}
        />
        <div className="info">
          <p>BitCoin/BTC</p>
          <h1>$89898.89</h1>
        </div>
      </div>
    </div>
  );
};

export default CoinOverview;
