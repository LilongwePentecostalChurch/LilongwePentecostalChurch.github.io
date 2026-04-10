import React, { useState, useEffect } from "react";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const { src, alt, className, style, ...rest } = props;

  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  if (!imgSrc) {
    return (
      <div
        className={`bg-gradient-to-br from-[#1A0500] to-[#7A1A0A]/50 flex items-center justify-center ${className ?? ""}`}
        style={style}
      >
        <span className="text-white/30 text-sm">No Image</span>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt || ""}
      className={className}
      style={style}
      {...rest}
      onError={() => {
        console.log("Image failed to load:", imgSrc);
        setImgSrc(undefined); // triggers fallback UI
      }}
    />
  );
}