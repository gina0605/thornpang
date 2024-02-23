import { MonthSelecter } from "@/components/schedule/monthSelecter";
import data, { minYear, maxYear } from "@/data/schedule";

const getSchedules = (year: number, month: number) =>
  (data[year] ?? {})[month] ?? [];

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full flex flex-col items-center">
      <MonthSelecter minYear={minYear} maxYear={maxYear} />
      {children}
    </main>
  );
};
