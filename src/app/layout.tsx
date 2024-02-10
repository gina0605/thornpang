"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";

const sunbatang = localFont({
  src: [
    { path: "../font/SunBatang-Light.otf", weight: "300", style: "normal" },
    { path: "../font/SunBatang-Medium.otf", weight: "500", style: "normal" },
    { path: "../font/SunBatang-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sunbatang",
});

const pyeongchang = localFont({
  src: [
    { path: "../font/PyeongChang-Regular.otf", weight: "400", style: "normal" },
    { path: "../font/PyeongChang-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-pyeongchang",
});

interface TabProps {
  text: string;
  link: string;
}

const Tab = ({ text, link }: TabProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className="grow w-0 flex flex-col items-center h-full justify-center text-base hover:text-lg"
    >
      <p
        className={`text-center transition-all duration-200 font-pyeongchang ${
          pathname === link
            ? "text-rose-700 font-extrabold"
            : "text-slate-500 font-bold"
        }`}
      >
        {text}
      </p>
    </Link>
  );
};

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className={`${sunbatang.variable} ${pyeongchang.variable}`}>
      <body className="bg-white">
        <header className="flex flex-col w-screen prevent-select">
          <Link
            href="/"
            className="bg-black text-white text-center flex flex-col items-center py-1"
          >
            <Image
              src={"/logo-white.png"}
              alt="thornapple logo"
              width={300}
              height={48}
            />
            <p className="text-sm font-sunbatang font-light">
              팬페이지 by 어떤 쏜팡이
            </p>
          </Link>
          <div className="flex w-full h-10 justify-center border border-slate-200">
            <div className="flex w-full max-w-5xl items-center">
              <Tab text="프로필" link="/" />
              <Tab text="가사" link="/lyrics" />
              <Tab text="일정" link="/calendar" />
              <Tab text="영상" link="/video" />
              <Tab text="인터뷰" link="/interview" />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};
