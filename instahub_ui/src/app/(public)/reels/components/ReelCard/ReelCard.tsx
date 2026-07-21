"use client";

import type { Reel } from "@/data/reels";
import ReelActions from "../ReelActions/ReelActions";
import ReelInfo from "../ReelInfo/ReelInfo";
import ReelMedia from "../ReelMedia/ReelMedia";

interface ReelCardProps {
  reel: Reel;
  index: number;
  muted: boolean;
  isPlaying: boolean;
  isLiked: boolean;
  isSaved: boolean;
  isFollowing: boolean;
  isCommentsOpen: boolean;

  setVideoRef: (
    index: number,
    element: HTMLVideoElement | null,
  ) => void;

  onToggleVideo: () => void;
  onToggleMuted: () => void;
  onToggleLike: () => void;
  onToggleSaved: () => void;
  onToggleFollowing: () => void;
  onToggleComments: () => void;
}

function ReelCard({
  reel,
  index,
  muted,
  isPlaying,
  isLiked,
  isSaved,
  isFollowing,
  isCommentsOpen,
  setVideoRef,
  onToggleVideo,
  onToggleMuted,
  onToggleLike,
  onToggleSaved,
  onToggleFollowing,
  onToggleComments,
}: ReelCardProps) {
  return (
    <article className="relative flex items-end gap-4">
      <div className="relative h-[calc(100vh-32px)] max-h-185 w-[min(430px,calc(100vw-90px))] overflow-hidden rounded-md bg-black">
        <ReelMedia
          reel={reel}
          index={index}
          muted={muted}
          isPlaying={isPlaying}
          setVideoRef={setVideoRef}
          onToggleVideo={onToggleVideo}
          onToggleMuted={onToggleMuted}
        />

        <ReelInfo
          reel={reel}
          isFollowing={isFollowing}
          onToggleFollowing={onToggleFollowing}
        />
      </div>

      <ReelActions
        reel={reel}
        isLiked={isLiked}
        isSaved={isSaved}
        isCommentsOpen={isCommentsOpen}
        onToggleLike={onToggleLike}
        onToggleSaved={onToggleSaved}
        onToggleComments={onToggleComments}
      />
    </article>
  );
}

export default ReelCard;