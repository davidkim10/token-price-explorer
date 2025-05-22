"use client";

import { useState, useId, useEffect, useMemo } from "react";
import { toast } from "sonner";
import commaNumber from "comma-number";
import { ArrowUpDown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TokenSelector } from "@/components/TokenSelector";
import { TokenResults } from "@/components/TokenResults/TokenResults";
import { Preloader } from "@/components/Preloader/Preloader";
import { useTokenPrice } from "@/lib/hooks/useTokenPrices";
import { TOKEN_CONFIG } from "@/lib/constants";
import { Token } from "@/types";

export const TokenCard = () => {
  const textfieldFromId = useId();
  const [totalUSD, setTotalUSD] = useState<string>("100");
  const [selectSourceToken, setSelectSourceToken] = useState(TOKEN_CONFIG[0]);
  const [selectTargetToken, setSelectTargetToken] = useState(TOKEN_CONFIG[2]);
  const { isLoading, error, sourceToken, targetToken } = useTokenPrice(
    selectSourceToken,
    selectTargetToken
  );

  const isPreloaderVisible = isLoading && !!sourceToken && !!targetToken;
  const isTokenResultsVisible = !!totalUSD && !!sourceToken && !!targetToken;
  const sourceTokenDropdownItems = filterTokenDropdownItems(selectTargetToken);
  const targetTokenDropdownItems = filterTokenDropdownItems(selectSourceToken);

  useEffect(() => {
    if (!isLoading && error) {
      toast.error("Error fetching token prices" + error?.message);
    }
  }, [isLoading, error]);

  /*********************************
   * HELPER / UTIL FUNCTIONS
   *********************************/
  function filterTokenDropdownItems(token: Token) {
    return TOKEN_CONFIG.filter((t) => t.symbol !== token.symbol);
  }

  /*********************************
   * EVENT HANDLERS
   *********************************/
  const handleTokenFlip = () => {
    setSelectSourceToken(selectTargetToken);
    setSelectTargetToken(selectSourceToken);
  };

  const handleSetTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "");
    setTotalUSD(commaNumber(value));
  };

  return (
    <>
      <Card className="w-full max-w-md bg-white dark:bg-slate-900/50 backdrop-blur-sm border-none">
        <CardHeader className="border-b dark:border-gray-800">
          <CardTitle className="text-center text-xl font-bold">
            Token Price Explorer
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex justify-center items-center gap-6 rounded-lg">
              <TokenSelector
                selectedToken={selectSourceToken}
                onSelectToken={setSelectSourceToken}
                tokens={sourceTokenDropdownItems}
              />
              <Button
                size="icon"
                className="rounded-full"
                onClick={handleTokenFlip}
              >
                <ArrowUpDown size={24} className="transform rotate-90" />
              </Button>
              <TokenSelector
                selectedToken={selectTargetToken}
                onSelectToken={setSelectTargetToken}
                tokens={targetTokenDropdownItems}
              />
            </div>

            <label
              className="rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-slate-800/30 p-4 block"
              htmlFor={textfieldFromId}
            >
              <span className="text-sm text-gray-400 mb-2 block font-medium">
                Compare {selectSourceToken.symbol} to {selectTargetToken.symbol}
              </span>

              <div className="flex items-center gap-2">
                <DollarSign size={20} />
                <input
                  id={textfieldFromId}
                  className="border-none h-12 font-semibold text-xl bg-transparent p-0 focus:outline-none focus:ring-0 focus:ring-offset-0 w-full"
                  type="text"
                  onChange={handleSetTotal}
                  placeholder="Enter Amount (USD)"
                  value={totalUSD}
                  autoFocus
                />
              </div>
            </label>

            {isTokenResultsVisible && (
              <TokenResults
                sourceToken={sourceToken}
                targetToken={targetToken}
                totalUSD={totalUSD.replace(/,/g, "")}
              />
            )}
          </div>
        </CardContent>
      </Card>

      <Preloader isVisible={isPreloaderVisible} />
    </>
  );
};
