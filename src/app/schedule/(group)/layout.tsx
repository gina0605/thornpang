import { MonthSelecter } from "@/components/schedule/monthSelecter";
import { minYear, maxYear } from "@/data/schedule";

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full min-h-full-body flex flex-col items-center">
      <MonthSelecter minYear={minYear} maxYear={maxYear} />
      {children}
    </main>
  );
};
