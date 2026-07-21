'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import type { Story } from '@/data/stories';
import StoryActions from '../StoryActions/StoryActions';
import StoryHeader from '../StoryHeader/StoryHeader';
import StoryProgress from '../StoryProgress/StoryProgress';

interface StoryViewerProps {
  story: Story;
  mediaIndex: number;
  progress: number;
  isPlaying: boolean;
  isLiked: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onTogglePlaying: () => void;
  onToggleLike: () => void;
}

function StoryViewer({
  story,
  mediaIndex,
  progress,
  isPlaying,
  isLiked,
  onPrevious,
  onNext,
  onTogglePlaying,
  onToggleLike,
}: StoryViewerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastAudibleVolumeRef = useRef(1);
  const [volume, setVolume] = useState(1);

  const currentMedia = story.media[mediaIndex] ?? story.media[0];

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !currentMedia || currentMedia.type !== 'video') {
      return;
    }

    if (isPlaying) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [currentMedia, isPlaying]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || currentMedia?.type !== 'video') {
      return;
    }

    video.volume = volume;
    video.muted = volume === 0;
  }, [currentMedia, volume]);

  const handleVolumeChange = (nextVolume: number) => {
    setVolume(nextVolume);

    if (nextVolume > 0) {
      lastAudibleVolumeRef.current = nextVolume;
    }
  };

  const handleToggleMuted = () => {
    handleVolumeChange(volume === 0 ? lastAudibleVolumeRef.current : 0);
  };

  if (!currentMedia) {
    return null;
  }

  return (
    <article className="relative h-svh w-full overflow-hidden bg-black sm:h-[min(94vh,900px)] sm:w-[min(52.9vh,475px)] sm:rounded-lg">
      <div key={`${story.id}-${currentMedia.id}`} className="absolute inset-0">
        {currentMedia.type === 'image' ? (
          <Image
            src={currentMedia.url}
            alt={`${story.username}'s story`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 475px"
            className="object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            src={currentMedia.url as string}
            autoPlay
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-linear-to-b from-black/65 via-black/20 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      <StoryProgress
        media={story.media}
        activeMediaIndex={mediaIndex}
        progress={progress}
      />

      <StoryHeader
        story={story}
        isPlaying={isPlaying}
        isVideo={currentMedia.type === 'video'}
        volume={volume}
        onTogglePlaying={onTogglePlaying}
        onToggleMuted={handleToggleMuted}
        onVolumeChange={handleVolumeChange}
      />

      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous story media"
        className="absolute top-20 bottom-24 left-0 z-10 w-[35%] cursor-default"
      />

      <button
        type="button"
        onClick={onNext}
        aria-label="Next story media"
        className="absolute top-20 right-0 bottom-24 z-10 w-[35%] cursor-default"
      />

      <StoryActions
        username={story.username}
        isLiked={isLiked}
        onToggleLike={onToggleLike}
      />
    </article>
  );
}

export default StoryViewer;
