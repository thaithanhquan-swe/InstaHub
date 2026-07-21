'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Post } from '@/types/post.types';
import CarouselButton from '@/components/CarouselButton/CarouselButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PostDialogMediaProps {
  post: Post;
}

function PostDialogMedia({ post }: PostDialogMediaProps) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const hasMultipleMedia = post.media.length > 1;

  return (
    <div className="post-media relative min-h-0 min-w-0 overflow-hidden bg-black">
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
              }
            : false
        }
        className="h-full w-full"
      >
        {post.media.map((item, index) => (
          <SwiperSlide key={`${post.id}-${index}`} className="h-full!">
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
                  alt={`${post.author.username} post image ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="617px"
                  className="object-contain"
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

export default PostDialogMedia;
