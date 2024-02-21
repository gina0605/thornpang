import Image from "next/image";
import { SearchBar } from "../common/searchBar";
import { TargetSelect } from "./targetSelect";

export interface VideoSearchBarProps {
  target: string | null;
  search: string | null;
}

export const VideoSearchBar = ({ target, search }: VideoSearchBarProps) => (
  <div className="w-full max-w-5xl md:px-1.5">
    <div className="w-full flex justify-end bg-slate-100 md:py-1">
      <div className="w-0 md:w-40 hidden md:flex items-center justify-center space-x-2">
        <p className="text-slate-600 pl-1.5">검색 대상</p>
        <div className="bg-white px-1.5 rounded-sm border-slate-500 border flex">
          <TargetSelect target={target} search={search} />
          <Image
            src="/icon/chevron-right.svg"
            width={16}
            height={16}
            alt="chevron"
            className="cursor-pointer rotate-90 ml-0.5 -mr-0.5 mt-px"
          />
        </div>
      </div>
      <div className="w-0 grow px-1.5 h-9 flex items-center">
        <SearchBar
          defaultText={search ?? ""}
          searchPath={`/video?${
            target === null ? "" : `target=${target}&`
          }search=`}
        />
      </div>
    </div>
  </div>
);
