"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const AppleProfile = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  return (
    <div className="w-full pt-[75%] relative">
      <Image
        src="/profile/apple.jpeg"
        alt="THORNAPPLE profile picture"
        fill
        style={{ objectFit: "contain" }}
        priority
        className={`transition-appear duration-1000 ease-out ${
          visible ? "opacity-100" : "md:opacity-0 md:translate-y-4"
        }`}
      />
    </div>
  );
};
