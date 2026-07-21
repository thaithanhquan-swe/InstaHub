import { Pause, Play, Volume2, VolumeX } from "lucide-react";

interface ReelVideoProps {
  videoUrl: string;
  index: number;
  muted: boolean;
  isPlaying: boolean;
  videoRef: (element: HTMLVideoElement | null) => void;
  onToggleVideo: () => void;
  onToggleMuted: () => void;
}

function ReelVideo({
  videoUrl,
  index,
  muted,
  isPlaying,
  videoRef,
  onToggleVideo,
  onToggleMuted,
}: ReelVideoProps) {
  return (
    <>
      <video
        ref={videoRef}
        src={videoUrl}
        muted={muted}
        loop
        playsInline
        preload={index <= 1 ? "auto" : "metadata"}
        onClick={onToggleVideo}
        className="h-full w-full cursor-pointer object-cover"
      />

      <button
        type="button"
        aria-label={isPlaying ? "Pause reel" : "Play reel"}
        onClick={onToggleVideo}
        className="absolute inset-0 flex cursor-pointer items-center justify-center"
      >
        <span
          className={`flex size-20 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition-all duration-200 ${
            isPlaying
              ? "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
              : "scale-100 opacity-100"
          }`}
        >
          {isPlaying ? (
            <Pause size={34} fill="white" />
          ) : (
            <Play size={34} fill="white" />
          )}
        </span>
      </button>

      <button
        type="button"
        aria-label={muted ? "Unmute reel" : "Mute reel"}
        onClick={onToggleMuted}
        className="absolute right-3 bottom-3 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 transition-transform hover:scale-110"
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </>
  );
}

export default ReelVideo;