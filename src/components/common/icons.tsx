import Image from "next/image";

export interface ChevronProps {
  direction: string;
  className?: string;
  size?: number;
}

export const Chevron = ({ direction, className, size = 24 }: ChevronProps) => (
  <Image
    src={`/icon/chevron-${direction}.svg`}
    alt={`${direction} arrow`}
    width={size}
    height={size}
    className={className}
  />
);
