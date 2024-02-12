"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface SearchBarProps {
  param: string | null;
}

export const SearchBar = ({ param }: SearchBarProps) => {
  const [text, setText] = useState(param ?? "");
  const [activated, setActivated] = useState(param !== null);
  const router = useRouter();

  return (
    <div className="w-full h-9 flex">
      <div className="w-0 grow bg-gradient-to-r from-slate-500/30 to-white" />
      <div className="w-full h-9 max-w-screen-md flex items-center justify-start pl-2 pr-6 relative">
        <div
          className={`h-8 flex items-center rounded transition-[width] duration-300 ${
            activated ? "border-slate-500 border w-full px-2" : "w-8"
          }`}
        >
          {activated && (
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") router.push(`/lyrics?keyword=${text}`);
              }}
              className="border-0 grow outline-none"
            />
          )}
          <Image
            src="/icon/search.svg"
            width={24}
            height={24}
            alt="search button"
            onClick={
              activated
                ? () => router.push(`/lyrics?keyword=${text}`)
                : () => setActivated(true)
            }
            className="cursor-pointer"
          />
          {activated && (
            <Image
              src="/icon/x.svg"
              width={24}
              height={24}
              alt="x button"
              onClick={() => {
                setActivated(false);
                setText("");
              }}
              className="cursor-pointer absolute right-0"
            />
          )}
        </div>
      </div>
      <div className="w-0 grow bg-gradient-to-l from-slate-500/40 to-white" />
    </div>
  );
};
