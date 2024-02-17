import { minmax, paramToInt } from "@/common/utils";
import schedules, { minYear, maxYear } from "@/data/schedule";

export default ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const paramYear = paramToInt(searchParams.year);
  const paramMonth = paramToInt(searchParams.month);
  const currentDate = new Date(Date.now() + 32400000);
  const year =
    paramYear === null
      ? currentDate.getUTCFullYear()
      : minmax(paramYear, minYear, maxYear);
  const month =
    paramMonth === null ? currentDate.getUTCMonth() : minmax(paramMonth, 1, 12);

  console.log(year, month);

  return (
    <main className="w-full max-w-5xl flex flex-col">
      <div className="flex"></div>
    </main>
  );
};
