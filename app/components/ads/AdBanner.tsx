"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({
  slot,
  format = "auto",
  responsive = true,
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || !adRef.current) return;

    const adElement = adRef.current;

    if (adElement.getAttribute("data-adsbygoogle-status")) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [client]);

  if (!client) return null;

  return (
    <div className="my-6 flex w-full justify-center overflow-hidden">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
        }}
        data-ad-client={client}
        {...(slot ? { "data-ad-slot": slot } : {})}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
