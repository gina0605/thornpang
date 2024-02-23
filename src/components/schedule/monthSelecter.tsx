"use client";

import { range } from "@/common/utils";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { Chevron } from "../common/icons";
import { useEffect } from "react";

interface ArrowButtonProps {
  direction: string;
  link?: string;
}

const ArrowButton = ({ direction, link }: ArrowButtonProps) =>
  link ? (
    <Link href={link}>
      <Chevron direction={direction} className="h-full" />
    </Link>
  ) : (
    <Chevron direction={direction} className="h-full opacity-30" />
  );

export interface MonthSelecterProps {
  minYear: number;
  maxYear: number;
}

export const MonthSelecter = ({ minYear, maxYear }: MonthSelecterProps) => {
  const router = useRouter();

  const [yearStr, monthStr] = useSelectedLayoutSegments();
  const year = parseInt(yearStr),
    month = parseInt(monthStr);

  const isFirst = year === minYear && month === 1;
  const isLast = year === maxYear && month === 12;

  const createUrl = (y: number | string, m: number | string) =>
    `/schedule/${y}/${m}`;

  useEffect(() => {
    for (let y = minYear; y <= maxYear; y++)
      if (y != year) router.prefetch(createUrl(y, month));
    for (let m = 1; m <= 12; m++)
      if (m != month) router.prefetch(createUrl(year, m));
  }, []);

  return (
    <div className="w-full max-w-xl px-4 h-14 flex justify-between font-pyeongchang text-xl font-semibold">
      <ArrowButton
        direction="left"
        link={
          isFirst
            ? undefined
            : createUrl(
                month === 1 ? year - 1 : year,
                month === 1 ? 12 : month - 1
              )
        }
      />
      <div className="flex justify-center items-center space-x-2">
        <select
          value={year}
          className="customized-select"
          onChange={(e) => router.push(createUrl(e.target.value, month))}
        >
          {range(maxYear - minYear + 1, minYear).map((y) => (
            <option value={y} key={y}>
              {y}년
            </option>
          ))}
        </select>
        <select
          value={month}
          className="customized-select"
          onChange={(e) => router.push(createUrl(year, e.target.value))}
        >
          {range(12, 1).map((m) => (
            <option value={m} key={m}>
              {m}월
            </option>
          ))}
        </select>
      </div>
      <ArrowButton
        direction="right"
        link={
          isLast
            ? undefined
            : createUrl(
                month === 12 ? year + 1 : year,
                month === 12 ? 1 : month + 1
              )
        }
      />
    </div>
  );
};
