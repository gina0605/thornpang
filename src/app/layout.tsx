"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./globals.css";

interface TabProps {
  text: string;
  link: string;
}

const Tab = ({ text, link }: TabProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`grow text-center ${pathname === link ? "font-bold" : ""}`}
    >
      {text}
    </Link>
  );
};

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <header className="flex flex-col w-screen">
          <div className="bg-slate-800 text-white text-center">header!</div>
          <div className="flex w-full">
            <Tab text="profile" link="/" />
            <Tab text="video" link="/video" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};
