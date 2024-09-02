"use client";
import Link from "next/link";
import { Navigation } from "@/types";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/Button";
import { cn } from "@/lib/utils";

type MainNavProps = {
  items?: Navigation[];
  children?: React.ReactNode;
};
const createNavigation = (items: Navigation[], currentPath: string) => {
  return items.map((item, index) => (
    <Link
      key={index}
      href={item.href || ""}
      className={`flex items-center border-b-4 sm:text-sm md:text-lg ${
        currentPath === item.href ? "border-black" : "border-white"
      }`}
    >
      {item.title}
    </Link>
  ));
};

export function MainNav({ items }: MainNavProps) {
  const currentPath = usePathname();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex">
        <Logo />

        <nav className="hidden gap-10 lg:flex">
          {items && createNavigation(items, currentPath)}
        </nav>
      </div>
      <nav className="flex flex-col items-center gap-[2px]">
        <Link
          href="/register"
          className={cn(
            buttonVariants(),
            "rounded-xl border-[3px] px-8 py-6 text-[16px]",
          )}
        >
          Register Now
        </Link>
        <p className="text-[12px]">Hurry ! Only few seats left</p>
      </nav>
    </div>
  );
}
