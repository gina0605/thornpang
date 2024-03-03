"use client";

import { useRouter } from "next/navigation";
import { X } from "./icons";

export interface ClientModalProps {
  children: React.ReactNode;
}

export const ClientModal = ({ children }: ClientModalProps) => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 bg-black/65 flex items-center justify-center z-30"
      onClick={() => router.back()}
    >
      <X />
      {children}
    </div>
  );
};
