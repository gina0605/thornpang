"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface SearchBarProps {
  param: string | null;
}

export const SearchBar = ({ param }: SearchBarProps) => {
  const [text, setText] = useState(param ?? "");
  const [activated, setActivated] = useState(param !== null);
  const router = useRouter();

  useEffect(() => {
    setActivated(true);
  }, []);

  useEffect(() => setText(param ?? ""), [param]);

  return (
    <div className="w-full h-9 flex">
      <div
        className={`w-0 grow bg-gradient-to-r from-slate-500 to-white transition-opacity duration-400 ease-in-out ${
          activated ? "opacity-30" : "opacity-0"
        }`}
      />
      <div
        className={`w-full h-9 max-w-screen-md flex items-center justify-start px-2 relative transition-opacity duration-400 ease-in-out ${
          activated ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-8 flex items-center rounded border-slate-500 border w-full px-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") router.push(`/lyrics?keyword=${text}`);
              else if (e.key === "Escape") e.currentTarget.blur();
            }}
            className="border-0 grow outline-none"
          />
          <Image
            src="/icon/search.svg"
            width={24}
            height={24}
            alt="search button"
            onClick={() => router.push(`/lyrics?keyword=${text}`)}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`w-0 grow bg-gradient-to-l from-slate-500 to-white transition-opacity duration-400 ease-in-out ${
          activated ? "opacity-40" : "opacity-0"
        }`}
      />
    </div>
  );
};
