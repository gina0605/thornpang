"use client";

import { useEffect, useState } from "react";
import { SearchBar } from "../common/searchBar";

export interface SearchBarProps {
  param: string | null;
}

export const LyricsSearchBar = ({ param }: SearchBarProps) => {
  const [activated, setActivated] = useState(param !== null);

  useEffect(() => {
    setActivated(true);
  }, []);

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
        <SearchBar defaultText={param ?? ""} />
      </div>
      <div
        className={`w-0 grow bg-gradient-to-l from-slate-500 to-white transition-opacity duration-400 ease-in-out ${
          activated ? "opacity-40" : "opacity-0"
        }`}
      />
    </div>
  );
};
