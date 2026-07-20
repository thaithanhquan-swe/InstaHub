"use client";

import CarouselButton from "@/components/CarouselButton/CarouselButton";
import stories from "@/data/stories";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import StoryPreviewList from "../StoryPreviewList/StoryPreviewList";
import StoryViewer from "../StoryViewer/StoryViewer";

const DEFAULT_STORY_DURATION = 6000;
const TIMER_INTERVAL = 50;
const PREVIEW_STORY_COUNT = 2;

interface StoriesClientProps {
  storyId: number;
}

function StoriesClient({ storyId }: StoriesClientProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(() =>
    stories.findIndex((story) => story.id === storyId)
  );
  const activeStory = stories[activeIndex];

  const [mediaIndex, setMediaIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [likedMediaKeys, setLikedMediaKeys] = useState<string[]>([]);
  const lastViewedMediaByStory = useRef<Record<number, number>>({});

  const currentMedia = activeStory?.media[mediaIndex];

  const isFirstStory = activeIndex === 0;
  const isLastStory = activeIndex === stories.length - 1;
  const isFirstMedia = mediaIndex === 0;
  const isLastMedia = mediaIndex >= (activeStory?.media.length ?? 1) - 1;
  const currentMediaKey =
    activeStory && currentMedia ? `${activeStory.id}-${currentMedia.id}` : "";
  const isLiked =
    currentMediaKey !== "" && likedMediaKeys.includes(currentMediaKey);

  const resetPlayback = useCallback((nextMediaIndex: number) => {
    setMediaIndex(nextMediaIndex);
    setProgress(0);
    setIsPlaying(true);
  }, []);

  const changeMedia = useCallback(
    (nextMediaIndex: number) => {
      if (!activeStory?.media[nextMediaIndex]) {
        return;
      }

      lastViewedMediaByStory.current[activeStory.id] = nextMediaIndex;
      resetPlayback(nextMediaIndex);
    },
    [activeStory, resetPlayback]
  );

  const goToStory = useCallback(
    (index: number, targetMediaIndex?: number) => {
      const targetStory = stories[index];

      if (!targetStory || targetStory.media.length === 0) {
        return;
      }

      if (activeStory) {
        lastViewedMediaByStory.current[activeStory.id] = mediaIndex;
      }

      const rememberedMediaIndex =
        lastViewedMediaByStory.current[targetStory.id];
      const requestedMediaIndex = targetMediaIndex ?? rememberedMediaIndex ?? 0;

      const safeMediaIndex = Math.min(
        Math.max(requestedMediaIndex, 0),
        targetStory.media.length - 1
      );

      setActiveIndex(index);
      resetPlayback(safeMediaIndex);
      window.history.replaceState(null, "", `/stories/${targetStory.id}`);
    },
    [activeStory, mediaIndex, resetPlayback]
  );

  const handleNext = useCallback(() => {
    if (!activeStory) return;

    if (!isLastMedia) {
      changeMedia(mediaIndex + 1);
      return;
    }

    if (isLastStory) {
      router.push("/");
      return;
    }

    goToStory(activeIndex + 1, 0);
  }, [
    activeIndex,
    activeStory,
    changeMedia,
    goToStory,
    isLastMedia,
    isLastStory,
    mediaIndex,
    router,
  ]);

  const handlePrevious = useCallback(() => {
    if (!activeStory) return;

    if (!isFirstMedia) {
      changeMedia(mediaIndex - 1);
      return;
    }

    if (isFirstStory) return;

    const previousStoryIndex = activeIndex - 1;
    const previousStory = stories[previousStoryIndex];

    if (!previousStory || previousStory.media.length === 0) {
      return;
    }

    const rememberedMediaIndex =
      lastViewedMediaByStory.current[previousStory.id];
    const targetMediaIndex =
      rememberedMediaIndex ?? previousStory.media.length - 1;

    goToStory(previousStoryIndex, targetMediaIndex);
  }, [
    activeIndex,
    activeStory,
    changeMedia,
    goToStory,
    isFirstMedia,
    isFirstStory,
    mediaIndex,
  ]);

  const handleSelectPreviousStory = useCallback(
    (index: number) => {
      const targetStory = stories[index];

      if (!targetStory) return;

      const rememberedMediaIndex =
        lastViewedMediaByStory.current[targetStory.id];
      const targetMediaIndex =
        rememberedMediaIndex ?? targetStory.media.length - 1;

      goToStory(index, targetMediaIndex);
    },
    [goToStory]
  );

  const handleSelectNextStory = useCallback(
    (index: number) => goToStory(index, 0),
    [goToStory]
  );

  const handleToggleLike = () => {
    if (!currentMediaKey) return;

    setLikedMediaKeys((currentKeys) =>
      currentKeys.includes(currentMediaKey)
        ? currentKeys.filter((key) => key !== currentMediaKey)
        : [...currentKeys, currentMediaKey]
    );
  };

  useEffect(() => {
    if (!isPlaying || !currentMedia) {
      return;
    }

    const duration =
      currentMedia.duration != null
        ? currentMedia.duration * 1000
        : DEFAULT_STORY_DURATION;
    const progressStep = (TIMER_INTERVAL / duration) * 100;

    const timer = window.setInterval(() => {
      setProgress((currentProgress) => {
        const nextProgress = currentProgress + progressStep;

        if (nextProgress < 100) {
          return nextProgress;
        }

        window.clearInterval(timer);
        window.setTimeout(handleNext, 0);

        return 100;
      });
    }, TIMER_INTERVAL);

    return () => {
      window.clearInterval(timer);
    };
  }, [currentMedia, handleNext, isPlaying]);

  const previousStartIndex = Math.max(0, activeIndex - PREVIEW_STORY_COUNT);

  const previousStories = stories
    .slice(previousStartIndex, activeIndex)
    .map((story, index) => ({
      story,
      index: previousStartIndex + index,
    }));

  const nextStories = stories
    .slice(activeIndex + 1, activeIndex + PREVIEW_STORY_COUNT + 1)
    .map((story, index) => ({
      story,
      index: activeIndex + index + 1,
    }));

  const disablePrevious = isFirstStory && isFirstMedia;

  if (!activeStory || !currentMedia) {
    return null;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1a1a1a] text-white">
      <Link
        href="/"
        className="fixed top-4 left-5 z-50 hidden font-serif text-2xl font-semibold italic lg:block"
      >
        InstaHub
      </Link>

      <Link
        href="/"
        aria-label="Close stories"
        className="fixed top-4 right-5 z-50 flex size-11 items-center justify-center transition-transform hover:scale-110"
      >
        <X size={34} strokeWidth={1.8} />
      </Link>

      <section className="flex min-h-screen items-center justify-center gap-7 px-4 py-3">
        <StoryPreviewList
          stories={previousStories}
          side="left"
          onSelectStory={handleSelectPreviousStory}
        />

        <div className="relative size-6 shrink-0">
          <CarouselButton
            direction="left"
            disabled={disablePrevious}
            onClick={handlePrevious}
            className="static translate-y-0"
          />
        </div>

        <StoryViewer
          story={activeStory}
          mediaIndex={mediaIndex}
          progress={progress}
          isPlaying={isPlaying}
          isLiked={isLiked}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onTogglePlaying={() => setIsPlaying((isPlaying) => !isPlaying)}
          onToggleLike={handleToggleLike}
        />

        <div className="relative size-6 shrink-0">
          <CarouselButton
            direction="right"
            onClick={handleNext}
            className="static translate-y-0"
          />
        </div>

        <StoryPreviewList
          stories={nextStories}
          side="right"
          onSelectStory={handleSelectNextStory}
        />
      </section>
    </main>
  );
}

export default StoriesClient;
