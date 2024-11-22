"use client";

import { getDemoLimits } from "@/lib/fileDemoApi";
import { useEffect } from "react";
import { toast } from "sonner";

export default function DailyQuota() {
  useEffect(() => {
    getDemoLimits().then((data) => {
      if (data.data.used === data.data.limit) {
        toast.error(
          "The daily demo limit has been reached. Please try again tomorrow."
        );
      }
    });
  }, []);

  return <></>;
}
