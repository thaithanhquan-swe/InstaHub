"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import StoryItem from "./components/StoryItem/StoryItem";
import stories from "@/data/stories";
import CarouselButton from "@/components/CarouselButton/CarouselButton";

function StoryList() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const hasCarousel = stories.length > 6;

  const updateNavigationState = (instance: SwiperType) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  return (
    <div className="relative mt-4 mb-6 w-full max-w-157.5 text-(--text-white)">
      <Swiper
        slidesPerView={6}
        slidesPerGroup={3}
        spaceBetween={12}
        allowTouchMove={hasCarousel}
        onSwiper={(instance) => {
          setSwiper(instance);
          updateNavigationState(instance);
        }}
        onSlideChange={updateNavigationState}
        onReachBeginning={updateNavigationState}
        onReachEnd={updateNavigationState}
        className="w-full cursor-pointer"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id}>
            <StoryItem username={story.username} avatar={story.avatar} />
          </SwiperSlide>
        ))}
      </Swiper>

      {hasCarousel && !isBeginning && (
        <CarouselButton
          direction="left"
          onClick={() => swiper?.slidePrev()}
          className="-left-px"
        />
      )}

      {hasCarousel && !isEnd && (
        <CarouselButton
          direction="right"
          onClick={() => swiper?.slideNext()}
          className="-right-px"
        />
      )}
    </div>
  );
}

export default StoryList;
