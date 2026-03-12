"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type OpenGraphImageProps = {
  alt: string;
  cacheKey: string;
  className: string;
  pageUrl: string;
  sizes: string;
};

const CACHE_PREFIX = "open-graph-image:";

export function OpenGraphImage({
  alt,
  cacheKey,
  className,
  pageUrl,
  sizes,
}: OpenGraphImageProps) {
  const storageKey = `${CACHE_PREFIX}${cacheKey}`;
  const [src, setSrc] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const cachedSrc = window.localStorage.getItem(storageKey);

    if (cachedSrc) {
      setSrc(cachedSrc);
      setStatus("ready");
      return;
    }

    let isActive = true;

    void fetch(`/api/open-graph-image?url=${encodeURIComponent(pageUrl)}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to resolve image");
        }

        const data = (await response.json()) as { imageUrl?: string };

        if (!data.imageUrl || !isActive) {
          return;
        }

        window.localStorage.setItem(storageKey, data.imageUrl);
        setSrc(data.imageUrl);
        setStatus("ready");
      })
      .catch(() => {
        if (!isActive) {
          return;
        }

        setStatus("error");
      });

    return () => {
      isActive = false;
    };
  }, [pageUrl, storageKey]);

  if (status === "loading") {
    return <Skeleton className="h-full w-full rounded-lg" />;
  }

  if (status === "error" || !src) {
    return (
      <div className="h-full w-full rounded-lg bg-muted" aria-hidden="true" />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        window.localStorage.removeItem(storageKey);
        setStatus("error");
      }}
    />
  );
}
