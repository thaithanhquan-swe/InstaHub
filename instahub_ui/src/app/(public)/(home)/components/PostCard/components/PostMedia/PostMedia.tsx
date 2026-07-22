'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
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
  onLike: () => void;
}

function PostMedia({ media, alt, onLike }: PostMediaProps) {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [likeAnimationKey, setLikeAnimationKey] = useState(0);

  const hasMultipleMedia = media.length > 1;

  if (!media.length) {
    return null;
  }

  const handleDoubleClick = () => {
    onLike();
    setLikeAnimationKey((value) => value + 1);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className='post-media relative aspect-square w-full overflow-hidden rounded-sm bg-black'
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={
          hasMultipleMedia && prevEl && nextEl
            ? {
                prevEl,
                nextEl
              }
            : false
        }
        pagination={
          hasMultipleMedia
            ? {
                clickable: true,
                dynamicBullets: true
              }
            : false
        }
        className='h-full w-full'
      >
        {media.map((item, index) => (
          <SwiperSlide key={`${alt}-${index}`} className='h-full!'>
            <div className='relative h-full w-full bg-black'>
              {item.type === 'video' ? (
                <video
                  src={item.url as string}
                  controls
                  playsInline
                  preload='metadata'
                  className='size-full object-contain'
                />
              ) : (
                <Image
                  src={item.url}
                  alt={`${alt} - image ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes='(max-width: 768px) 100vw, 470px'
                  className='object-cover'
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {likeAnimationKey > 0 && (
        <div
          key={likeAnimationKey}
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-20 flex items-center justify-center'
        >
          <Heart
            size={112}
            fill='red'
            strokeWidth={0}
            className='animate-post-like-pop text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]'
          />
        </div>
      )}

      {hasMultipleMedia && (
        <>
          <CarouselButton ref={setPrevEl} direction='left' />
          <CarouselButton ref={setNextEl} direction='right' />
        </>
      )}
    </div>
  );
}

export default PostMedia;
