"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export interface SearchBarProps {
  defaultText: string;
  searchPath: string;
}

export const SearchBar = ({ defaultText, searchPath }: SearchBarProps) => {
  const [text, setText] = useState(defaultText);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const textToURI = (text: string) => searchPath + text.replace(" ", "%20");

  useEffect(() => {
    setText(defaultText);
  }, [defaultText]);

  return (
    <div className="h-8 flex items-center rounded border-slate-500 border w-full px-2 bg-white">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            e.currentTarget.blur();
            router.push(textToURI(text));
          } else if (e.key === "Escape") e.currentTarget.blur();
        }}
        className="border-0 grow outline-none font-pretendard"
        ref={inputRef}
      />
      <Image
        src="/icon/search.svg"
        width={24}
        height={24}
        alt="search button"
        onClick={() => {
          inputRef.current?.blur();
          router.push(textToURI(text));
        }}
        className="cursor-pointer"
      />
    </div>
  );
};
