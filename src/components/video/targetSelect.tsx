"use client";

import { useRouter } from "next/navigation";

export interface TargetSelectProps {
  target: string | null;
  search: string | null;
}

export const TargetSelect = ({ target, search }: TargetSelectProps) => {
  const router = useRouter();

  return (
    <select
      className="customized-select pl-1.5 -ml-1.5 pr-5.5 -mr-5.5 z-10"
      value={target ?? "all"}
      onChange={(e) =>
        router.push(
          `/video?target=${e.target.value}${
            search === null ? "" : `&search=${search}`
          }`
        )
      }
    >
      <option value="all">전체</option>
      <option value="setlist">곡명</option>
      <option value="info">정보</option>
    </select>
  );
};
