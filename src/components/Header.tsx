import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  return (
    <header>
      <nav className="w-full border-b shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-12 transition-all duration-300">
          <div className="flex justify-between items-center">
            <Link href="/" aria-label="home">
              <Image
                src={"/logo.svg"}
                alt="Fun.xyz"
                width={36}
                height={36}
                className="p-2 dark:invert"
              />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
