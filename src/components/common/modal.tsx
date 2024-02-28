import Image from "next/image";
import Link from "next/link";

export interface ModalProps {
  children: React.ReactNode;
  closeLink: string;
}

export const Modal = ({ children, closeLink }: ModalProps) => (
  <div className="fixed inset-0 bg-black/65 flex items-center justify-center flex-col md:flex-row overflow-y-auto z-30">
    <Link
      className="fixed inset-0 z-30 cursor-default"
      href={closeLink}
      scroll={false}
    />
    <Link href={closeLink} scroll={false}>
      <Image
        src="/icon/x.svg"
        width={36}
        height={36}
        className="top-2 right-2 fixed z-40"
        alt="close button"
      />
    </Link>
    {children}
  </div>
);
