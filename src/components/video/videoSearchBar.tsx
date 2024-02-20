import Image from "next/image";
import { SearchBar } from "../common/searchBar";

export interface VideoSearchBarProps {
  param: string | null;
}

export const VideoSearchBar = ({ param }: VideoSearchBarProps) => {
  return (
    <div className="w-full max-w-5xl md:px-1.5">
      <div className="w-full flex justify-end bg-slate-100 md:py-1">
        <div className="w-0 md:w-40 hidden md:flex items-center justify-center space-x-2">
          <p>검색 대상</p>
          <div className="bg-white px-1.5 rounded-sm border-slate-500 border flex">
            <select className="customized-select pl-1.5 -ml-1.5 pr-5.5 -mr-5.5 z-10">
              <option>전체</option>
              <option>곡명</option>
              <option>정보</option>
            </select>
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
          <SearchBar defaultText={param ?? ""} />
        </div>
      </div>
    </div>
  );
};
