"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const AppleProfile = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <div
      className={`w-full pt-[75%] relative transition-all duration-1000 ease-out opacity-100 mt-0 mb-0 ${
        visible ? "" : "md:opacity-0 md:mt-4 md:-mb-4"
      }`}
    >
      <Image
        src="/profile/apple.jpeg"
        alt="THORNAPPLE profile picture max-h-screen"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
};
