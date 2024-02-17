import Image from "next/image";
import { useRouter } from "next/navigation";

export interface MonthSelecterProps {
  year: number;
  month: number;
  minYear: number;
  maxYear: number;
}

export const MonthSelecter = ({
  year,
  month,
  minYear,
  maxYear,
}: MonthSelecterProps) => {
  const router = useRouter();

  const isFirst = year === minYear && month === 1;
  const isLast = year === maxYear && month === 12;

  return (
    <div className="w-full max-w-xl px-4 h-14 flex justify-between font-pyeongchang text-xl font-semibold">
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
        <p>{year}년</p>
        <p>{month}월</p>
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
  );
};
