"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type OptimizedImageProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string;
};

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.jpg",
  className = "",
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`} style={props.style}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
        sizes={props.sizes || "100vw"}
        {...props}
      />
    </div>
  );
}
