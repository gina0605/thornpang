import { range } from "@/common/utils";
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

  const routerPush = (y: number | string, m: number | string) =>
    router.push(`schedule?year=${y}&month=${m}`);

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
                routerPush(
                  month === 1 ? year - 1 : year,
                  month === 1 ? 12 : month - 1
                )
        }
      />
      <div className="flex justify-center items-center space-x-2">
        <select
          value={year}
          className="customized-select"
          onChange={(e) => routerPush(e.target.value, month)}
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
          onChange={(e) => routerPush(year, e.target.value)}
        >
          {range(12, 1).map((m) => (
            <option value={m} key={m}>
              {m}월
            </option>
          ))}
        </select>
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
