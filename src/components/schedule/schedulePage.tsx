"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Schedule } from "@/types";

export interface SchedulePageProps {
  year: number;
  month: number;
  schedules: Schedule[];
  isFirst: boolean;
  isLast: boolean;
}

export const SchedulePage = ({
  year,
  month,
  schedules,
  isFirst,
  isLast,
}: SchedulePageProps) => {
  const [modal, setModal] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="w-full max-w-4xl min-h-full-body flex flex-col">
      <div className="h-16 flex justify-between font-pyeongchang text-xl font-semibold">
        <Image
          src="/icon/chevron-left.svg"
          alt="left arrow"
          width={24}
          height={24}
          className={isFirst ? "opacity-30" : "cursor-pointer"}
          onClick={
            isFirst
              ? undefined
              : () =>
                  router.push(
                    `/schedule?year=${month === 1 ? year - 1 : year}&month=${
                      month === 1 ? 12 : month - 1
                    }`
                  )
          }
        />
        <div className="flex justify-center items-center space-x-2">
          <p className="w-19 text-right">{year}년</p>
          <p className="w-19 text-left">{month}월</p>
        </div>
        <Image
          src="/icon/chevron-right.svg"
          alt="right arrow"
          width={24}
          height={24}
          className={isLast ? "opacity-30" : "cursor-pointer"}
          onClick={
            isLast
              ? undefined
              : () =>
                  router.push(
                    `/schedule?year=${month === 12 ? year + 1 : year}&month=${
                      month === 12 ? 1 : month + 1
                    }`
                  )
          }
        />
      </div>
    </div>
  );
};
