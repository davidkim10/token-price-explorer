import Image from "next/image";
import { formatNumber } from "@/lib/utils";
import { TokenResultsSkeleton } from "./TokenResultsSkeleton";
import { AnimatedText } from "../AnimateText";
import { TokenPrice } from "@/types";

interface TokenResultsProps {
  sourceToken: TokenPrice;
  targetToken: TokenPrice;
  totalUSD: string;
}

export const TokenResultsList: React.FC<TokenResultsProps> = ({
  sourceToken,
  targetToken,
  totalUSD,
}) => {
  function calculateTokenAmount(unitPrice: number) {
    const totalAmountUSD = parseFloat(totalUSD) || 0;
    const tokenAmount = totalAmountUSD / unitPrice;
    return formatNumber(tokenAmount);
  }

  if (!sourceToken || !targetToken) {
    return <TokenResultsSkeleton />;
  }

  return (
    <div className="flex flex-col gap-2">
      {[sourceToken, targetToken].map((token) => (
        <div
          className="flex justify-between text-gray-600 dark:text-gray-400 gap-2"
          key={token.symbol}
        >
          <span className="flex items-center gap-2 font-bold">
            <Image src={token.icon} alt={token.symbol} width={16} height={16} />{" "}
            {token?.symbol}
          </span>

          <span
            key={`${token.symbol}-${token.price}`}
            className="flex-1 text-right truncate"
          >
            <AnimatedText text={calculateTokenAmount(token?.price)} />
          </span>
        </div>
      ))}
    </div>
  );
};
