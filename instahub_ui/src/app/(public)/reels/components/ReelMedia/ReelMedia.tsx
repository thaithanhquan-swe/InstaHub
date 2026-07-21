"use client";

import type { Reel } from "@/data/reels";
import {
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useRef, useState } from "react";

interface ReelMediaProps {
  reel: Reel;
  index: number;
  muted: boolean;
  isPlaying: boolean;

  setVideoRef: (
    index: number,
    element: HTMLVideoElement | null,
  ) => void;

  onToggleVideo: () => void;
  onToggleMuted: () => void;
}

function ReelMedia({
  reel,
  index,
  muted,
  isPlaying,
  setVideoRef,
  onToggleVideo,
  onToggleMuted,
}: ReelMediaProps) {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const lastAudibleVolumeRef = useRef(1);
  const [volume, setVolume] = useState(1);

  const handleVideoRef = (element: HTMLVideoElement | null) => {
    videoElementRef.current = element;

    if (element) {
      element.volume = volume;
    }

    setVideoRef(index, element);
  };

  const handleVolumeChange = (nextVolume: number) => {
    setVolume(nextVolume);

    if (videoElementRef.current) {
      videoElementRef.current.volume = nextVolume;
    }

    if (nextVolume > 0) {
      lastAudibleVolumeRef.current = nextVolume;
    }

    if ((nextVolume === 0 && !muted) || (nextVolume > 0 && muted)) {
      onToggleMuted();
    }
  };

  const handleToggleMuted = () => {
    if (muted && volume === 0) {
      const restoredVolume = lastAudibleVolumeRef.current;

      setVolume(restoredVolume);

      if (videoElementRef.current) {
        videoElementRef.current.volume = restoredVolume;
      }
    }

    onToggleMuted();
  };

  return (
    <div className="absolute inset-0">
      <video
        ref={handleVideoRef}
        src={reel.videoUrl}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="size-full object-cover"
        onClick={onToggleVideo}
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/10" />

      {!isPlaying && (
        <button
          type="button"
          onClick={onToggleVideo}
          aria-label="Play reel"
          className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 backdrop-blur-sm"
        >
          <Play
            size={32}
            className="translate-x-0.5 fill-white text-white"
          />
        </button>
      )}

      <div className="group/volume absolute right-4 bottom-4 z-20 flex flex-col items-center rounded-full bg-black/55 p-1 backdrop-blur-sm">
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(event) => handleVolumeChange(Number(event.target.value))}
          aria-label="Reel volume"
          aria-valuetext={`${Math.round(volume * 100)}%`}
          className="h-0 w-1 cursor-pointer accent-white opacity-0 transition-all duration-300 ease-out [direction:rtl] [writing-mode:vertical-lr] group-hover/volume:mb-2 group-hover/volume:h-20 group-hover/volume:opacity-100 group-focus-within/volume:mb-2 group-focus-within/volume:h-20 group-focus-within/volume:opacity-100"
        />

        <button
          type="button"
          onClick={handleToggleMuted}
          aria-label={muted || volume === 0 ? "Unmute reel" : "Mute reel"}
          className="flex size-6 cursor-pointer items-center justify-center transition-transform hover:scale-110"
        >
          {muted || volume === 0 ? (
            <VolumeX size={17} />
          ) : (
            <Volume2 size={17} />
          )}
        </button>
      </div>

      <button
        type="button"
        onClick={onToggleVideo}
        aria-label={isPlaying ? "Pause reel" : "Play reel"}
        className="absolute top-4 right-4 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-opacity hover:opacity-100"
      >
        {isPlaying ? (
          <Pause size={17} className="fill-white" />
        ) : (
          <Play size={17} className="fill-white" />
        )}
      </button>
    </div>
  );
}

export default ReelMedia;
