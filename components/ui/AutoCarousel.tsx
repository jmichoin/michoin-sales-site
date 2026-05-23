"use client";

import { useMemo } from "react";

type AutoCarouselProps = {
  images: string[];
};

export function AutoCarousel({ images }: AutoCarouselProps) {
  const duplicatedImages = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-0 motion-safe:animate-[carousel-marquee_18s_linear_infinite] will-change-transform">
        {duplicatedImages.map((src, index) => (
          <div className="relative h-[180px] min-w-[310px] overflow-hidden md:h-[220px] md:min-w-[380px]" key={`${src}-${index}`}>
            <img alt={`Selected design work preview ${(index % images.length) + 1}`} className="h-full w-full object-cover" decoding="async" loading="lazy" src={src} />
          </div>
        ))}
      </div>
    </div>
  );
}
