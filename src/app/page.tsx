import { TokenCard } from "@/components/TokenCard";
import { Preloader } from "@/components/Preloader/Preloader";

export default function Home() {
  return (
    <main className="flex flex-grow items-center justify-center h-full p-2">
      <TokenCard />
      <Preloader />
    </main>
  );
}
