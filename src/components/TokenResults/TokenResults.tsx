import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatNumber } from "@/lib/utils";
import { TokenResultsList } from "./TokenResultsList";
import type { TokenPrice } from "@/types";

interface TokenResultsProps {
  sourceToken: TokenPrice;
  targetToken: TokenPrice;
  totalUSD: string;
}

export const TokenResults = ({
  sourceToken,
  targetToken,
  totalUSD,
}: TokenResultsProps) => {
  const tokens = [sourceToken, targetToken];
  return (
    <div className="rounded-lg bg-stone-100 dark:bg-slate-800/20 p-3 text-sm font-medium">
      <div className="flex justify-between items-center mb-4 text-gray-400 dark:text-gray-600">
        <h2 className="text-sm text-gray-400 font-medium">Token Breakdown</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} className="text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <h3 className="text-sm font-semibold mb-1 text-gray-400 dark:text-gray-600">
                Unit Price
              </h3>

              {tokens.map((token) => (
                <div
                  className="text-xs flex justify-between gap-2 text-gray-400 dark:text-gray-600"
                  key={token.symbol}
                >
                  <span className="text-xs font-semibold mr-2">
                    {token.symbol}
                  </span>
                  <span className="text-xs text-ellipsis overflow-hidden">
                    {formatNumber(token.price)}
                  </span>
                </div>
              ))}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <TokenResultsList
        sourceToken={sourceToken}
        targetToken={targetToken}
        totalUSD={totalUSD}
      />
    </div>
  );
};
