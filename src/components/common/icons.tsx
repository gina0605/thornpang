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

export interface XProps {
  size?: number;
}

export const X = ({ size = 36 }: XProps) => (
  <Image
    src="/icon/x.svg"
    width={size}
    height={size}
    className="top-2 right-2 fixed z-40"
    alt="close button"
  />
);
