import { flatten, range } from "@/common/utils";
import { minYear, maxYear } from "@/data/schedule";

export const generateStaticParams = () =>
  flatten(
    range(maxYear - minYear + 1, minYear).map((y) =>
      range(12, 1).map((m) => ({ year: y.toString(), month: m.toString() }))
    )
  );

export const dynamicParams = false;

export default () => <></>;
