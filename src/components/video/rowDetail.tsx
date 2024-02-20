"use client";

import { useState } from "react";

export interface RowDetailProps {
  setlist: string;
  info: string;
  date: string;
}

export const RowDetail = ({ setlist, info, date }: RowDetailProps) => {
  const [detail, setDetail] = useState(false);
  return detail ? (
    <div className="flex flex-col w-full text-slate-500 text-sm">
      <p className="text-wrap w-full">{setlist}</p>
      <p className="text-nowrap truncate grow my-0.5">{info}</p>
      <div className="flex w-full justify-between">
        <p>{date}</p>
        <p
          className="underline cursor-pointer"
          onClick={() => setDetail(false)}
        >
          간단히
        </p>
      </div>
    </div>
  ) : (
    <div className="flex text-slate-500 text-sm">
      <p className="text-nowrap truncate grow">{setlist}</p>
      <p
        className="underline shrink-0 pl-1 md:pl-2 cursor-pointer"
        onClick={() => setDetail(true)}
      >
        자세히
      </p>
    </div>
  );
};
