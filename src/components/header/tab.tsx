"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabProps {
  text: string;
  link: string;
  exact?: boolean;
}

export const Tab = ({ text, link, exact }: TabProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className="grow w-0 flex flex-col items-center h-full justify-center text-base"
    >
      <p
        className={`text-center font-pyeongchang font-bold ${
          (exact ? pathname === link : pathname.startsWith(link))
            ? "text-rose-700"
            : "text-slate-500"
        }`}
      >
        {text}
      </p>
    </Link>
  );
};
