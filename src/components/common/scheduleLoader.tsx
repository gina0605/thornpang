"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const ScheduleLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const d = new Date(Date.now() + 32400000);
    router.prefetch(`/schedule/${d.getUTCFullYear()}/${d.getUTCMonth() + 1}`);
  }, []);

  return null;
};
