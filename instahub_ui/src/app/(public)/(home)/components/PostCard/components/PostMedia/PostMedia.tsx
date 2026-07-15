"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PostMediaProps {
  images: Array<StaticImageData | string>;
  alt: string;
}

function PostMedia({ images, alt }: PostMediaProps) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const hasMultipleImages = images.length > 1;

  return (
    <div className="post-media relative aspect-square w-full overflow-hidden rounded-sm bg-black">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={
          hasMultipleImages && prevEl && nextEl ? { prevEl, nextEl } : false
        }
        pagination={
          hasMultipleImages
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${alt}-${index}`}>
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`${alt} - image ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 470px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMultipleImages && (
        <>
          <button
            ref={setPrevEl}
            type="button"
            aria-label="Previous image"
            className="absolute top-1/2 left-3 z-10 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-black shadow disabled:hidden"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            ref={setNextEl}
            type="button"
            aria-label="Next image"
            className="absolute top-1/2 right-3 z-10 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-black shadow disabled:hidden"
          >
            <ChevronRight size={15} />
          </button>
        </>
      )}
    </div>
  );
}

export default PostMedia;
