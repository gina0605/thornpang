import Link from "next/link";
import { X } from "./icons";

export interface ServerModalProps {
  children: React.ReactNode;
  closeLink: string;
}

export const ServerModal = ({ children, closeLink }: ServerModalProps) => (
  <div className="fixed inset-0 bg-black/65 flex items-center justify-center flex-col md:flex-row overflow-y-auto z-30">
    <Link
      className="fixed inset-0 z-30 cursor-default"
      href={closeLink}
      scroll={false}
    />
    <Link href={closeLink} scroll={false}>
      <X />
    </Link>
    {children}
  </div>
);