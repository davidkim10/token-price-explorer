import Image from "next/image";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TokenResultsList } from "./TokenResultsList";

interface TokenResultsProps {
  sourceToken: any;
  targetToken: any;
  totalUSD: string;
}

export const TokenResults = ({
  sourceToken,
  targetToken,
  totalUSD,
}: TokenResultsProps) => {
  return (
    <div className="rounded-lg bg-gray-100 dark:bg-slate-800/20 p-3 text-sm font-medium">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-bold">Token Breakdown</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} className="text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <h3 className="text-sm font-semibold mb-1 text-gray-600">
                Unit Price
              </h3>
              <div className="text-sm flex justify-between gap-2 text-gray-600">
                <span className="font-semibold mr-2">{sourceToken.symbol}</span>
                <span className="text-ellipsis overflow-hidden">
                  {sourceToken.price}
                </span>
              </div>

              <div className="text-sm flex justify-between gap-2 text-gray-600">
                <span className="font-semibold mr-2">{targetToken.symbol}</span>
                <span className="text-ellipsis overflow-hidden">
                  {targetToken.price}
                </span>
              </div>
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
