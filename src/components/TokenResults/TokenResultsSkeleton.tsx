import { Skeleton } from "@/components/ui/skeleton";

export const TokenResultsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 py-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
};
