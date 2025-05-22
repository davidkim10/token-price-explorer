import { useQuery } from "@tanstack/react-query";
import {
  getAssetErc20ByChainAndSymbol,
  getAssetPriceInfo,
} from "@funkit/api-base";
import { formatToUSD } from "@/lib/utils";
import { API_KEY, TOKEN_CONFIG } from "@/lib/constants";
import type { Token, TokenPrice, TokenPricesBySymbol } from "@/types";

async function fetchTokenPrice(token: Token): Promise<TokenPrice> {
  const assetInfo = await getAssetErc20ByChainAndSymbol({
    chainId: token.chainId,
    symbol: token.symbol,
    apiKey: API_KEY,
  });

  const assetPrice = await getAssetPriceInfo({
    chainId: token.chainId,
    assetTokenAddress: assetInfo.address,
    apiKey: API_KEY,
  });

  return {
    name: token.name,
    chainId: token.chainId,
    symbol: token.symbol,
    icon: token.icon,
    price: assetPrice.unitPrice,
    priceUSD: formatToUSD(assetPrice.unitPrice),
  };
}

async function fetchAllTokenPrices(): Promise<TokenPricesBySymbol> {
  const tokenPrices = await Promise.all(
    TOKEN_CONFIG.map((token) => fetchTokenPrice(token))
  );

  return tokenPrices.reduce(
    (acc, token) => ({
      ...acc,
      [token.symbol]: token,
    }),
    {} as TokenPricesBySymbol
  );
}

export function useTokenPrice(
  sourceToken: Token = TOKEN_CONFIG[0],
  targetToken: Token = TOKEN_CONFIG[2]
) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["tokenPrices"],
    queryFn: fetchAllTokenPrices,
    staleTime: 1000 * 30,
    refetchInterval: 1000 * 10,
  });

  return {
    isLoading,
    error,
    data,
    refetch,
    sourceToken: data?.[sourceToken.symbol],
    targetToken: data?.[targetToken.symbol],
  };
}
