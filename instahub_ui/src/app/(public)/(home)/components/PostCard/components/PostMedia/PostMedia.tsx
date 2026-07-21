'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CarouselButton from '@/components/CarouselButton/CarouselButton';
import { PostMedia as PostMediaItem } from '@/types/post.types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PostMediaProps {
  media: PostMediaItem[];
  alt: string;
}

function PostMedia({ media, alt }: PostMediaProps) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const hasMultipleMedia = media.length > 1;

  if (!media.length) {
    return null;
  }

  return (
    <div className="post-media relative aspect-square w-full overflow-hidden rounded-sm bg-black">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={
          hasMultipleMedia && prevEl && nextEl
            ? {
                prevEl,
                nextEl,
              }
            : false
        }
        pagination={
          hasMultipleMedia
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        className="h-full w-full"
      >
        {media.map((item, index) => (
          <SwiperSlide key={`${alt}-${index}`} className="h-full!">
            <div className="relative h-full w-full bg-black">
              {item.type === 'video' ? (
                <video
                  src={item.url as string}
                  controls
                  playsInline
                  preload="metadata"
                  className="size-full object-contain"
                />
              ) : (
                <Image
                  src={item.url}
                  alt={`${alt} - image ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 470px"
                  className="object-cover"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {hasMultipleMedia && (
        <>
          <CarouselButton ref={setPrevEl} direction="left" />
          <CarouselButton ref={setNextEl} direction="right" />
        </>
      )}
    </div>
  );
}

export default PostMedia;
