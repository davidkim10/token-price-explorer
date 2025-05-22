import type { Token } from "@/types";

export const API_KEY = process.env.NEXT_PUBLIC_FUNKIT_API_KEY || "";
export const TOKEN_CONFIG: ReadonlyArray<Token> = [
  {
    chainId: "1",
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    icon: "/tokens/wbtc.svg",
  },
  {
    chainId: "1",
    symbol: "USDC",
    name: "USD Coin",
    icon: "/tokens/usdc.svg",
  },
  {
    chainId: "137",
    symbol: "USDT",
    name: "Tether",
    icon: "/tokens/usdt.svg",
  },
  {
    chainId: "8453",
    symbol: "ETH",
    name: "Ethereum",
    icon: "/tokens/eth.svg",
  },
] as const;
