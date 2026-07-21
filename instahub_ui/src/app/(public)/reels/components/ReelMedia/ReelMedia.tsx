"use client";

import type { Reel } from "@/data/reels";
import {
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

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
  return (
    <div className="absolute inset-0">
      <video
        ref={(element) => setVideoRef(index, element)}
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

      <button
        type="button"
        onClick={onToggleMuted}
        aria-label={muted ? "Unmute reel" : "Mute reel"}
        className="absolute right-4 bottom-4 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition-transform hover:scale-110"
      >
        {muted ? (
          <VolumeX size={17} />
        ) : (
          <Volume2 size={17} />
        )}
      </button>

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