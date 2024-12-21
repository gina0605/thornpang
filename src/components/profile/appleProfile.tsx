"use client";

import Image from "next/image";
import { useState } from "react";

export const AppleProfile = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full pt-[66%] relative">
      <Image
        src="/profile/apple3.jpeg"
        alt="THORNAPPLE profile picture"
        fill
        style={{ objectFit: "contain" }}
        priority
        className={`transition-appear duration-1000 ease-out ${
          visible ? "opacity-100" : "md:opacity-0 md:translate-y-4"
        }`}
        onLoad={() => setVisible(true)}
      />
    </div>
  );
};
