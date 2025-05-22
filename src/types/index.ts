export type TokenSymbol = "WBTC" | "USDC" | "USDT" | "ETH";

export type Token = {
  chainId: string;
  symbol: TokenSymbol;
  name: string;
  icon: string;
};

export type TokenPrice = Token & {
  price: number;
  priceUSD: string;
};

export type TokenPricesBySymbol = Record<TokenSymbol, TokenPrice>;
