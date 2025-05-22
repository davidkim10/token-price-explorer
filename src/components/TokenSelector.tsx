import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Token } from "@/types";

interface TokenSelectorProps {
  selectedToken: Token;
  onSelectToken: (token: Token) => void;
  tokens: Token[];
}

export const TokenSelector: React.FC<TokenSelectorProps> = ({
  selectedToken,
  onSelectToken,
  tokens,
}) => {
  return (
    <Select
      value={selectedToken.symbol}
      onValueChange={(value) => {
        const token = tokens.find((t) => t.symbol === value);
        if (token) onSelectToken(token);
      }}
    >
      <SelectTrigger className="w-29">
        <SelectValue>
          <div className="flex items-center">
            <Image
              src={selectedToken.icon}
              alt={selectedToken.symbol}
              className="mr-2"
              width={16}
              height={16}
            />
            <span className="font-medium">{selectedToken.symbol}</span>
          </div>
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        {tokens.map((token) => (
          <SelectItem key={token.symbol} value={token.symbol}>
            <div className="flex items-center">
              <Image
                src={token.icon}
                alt={token.symbol}
                className="mr-2"
                width={16}
                height={16}
              />
              <span className="font-medium">{token.name}</span>
              <span className="text-gray-400 mx-1">({token.symbol})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
