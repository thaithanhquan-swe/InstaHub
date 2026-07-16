"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Post } from "@/types/post.types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselButton from "@/components/CarouselButton/CarouselButton";

interface PostDialogMediaProps {
  post: Post;
}

function PostDialogMedia({ post }: PostDialogMediaProps) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const hasMultipleImages = post.images.length > 1;

  return (
    <div className="post-media relative min-h-0 min-w-0 overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={
          hasMultipleImages && prevEl && nextEl
            ? {
                prevEl,
                nextEl,
              }
            : false
        }
        pagination={
          hasMultipleImages
            ? {
                clickable: true,
              }
            : false
        }
        className="h-full w-full"
      >
        {post.images.map((image, index) => (
          <SwiperSlide key={`${post.id}-${index}`} className="h-full!">
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={`${post.author.username} post image ${index + 1}`}
                fill
                priority={index === 0}
                sizes="617px"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMultipleImages && (
        <>
          <CarouselButton ref={setPrevEl} direction="left" />

          <CarouselButton ref={setNextEl} direction="right" />
        </>
      )}
    </div>
  );
}

export default PostDialogMedia;
