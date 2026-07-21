"use client";

import reels from "@/data/reels";
import { useReels } from "@/hooks/useReels";

import CommentsPanel from "../CommentsPanel/CommentsPanel";
import ReelCard from "../ReelCard/ReelCard";
import ReelsNavigation from "../ReelNavigation/ReelNavigation";

function ReelsClient() {
  const {
    containerRef,
    activeIndex,
    muted,
    playingId,
    likedIds,
    savedIds,
    followingIds,
    commentReelId,
    setVideoRef,
    toggleVideo,
    toggleLike,
    toggleSaved,
    toggleFollowing,
    toggleMuted,
    toggleComments,
    closeComments,
    scrollToReel,
  } = useReels();

  return (
    <main className="relative h-screen w-[calc(100%-4.5rem)] overflow-hidden text-white">
      <div
        ref={containerRef}
        className="h-full w-full snap-y snap-mandatory overflow-y-auto overscroll-none scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {reels.map((reel, index) => {
          const isCommentsOpen = commentReelId === reel.id;

          return (
            <section
              key={reel.id}
              data-reel-index={index}
              className="relative flex h-full min-h-full w-full snap-center snap-always items-center justify-center overflow-hidden"
            >
              <div
                className={`transition-transform duration-300 ease-out ${
                  isCommentsOpen
                    ? "xl:-translate-x-47.5"
                    : "translate-x-0"
                }`}
              >
                <ReelCard
                  reel={reel}
                  index={index}
                  muted={muted}
                  isPlaying={playingId === reel.id}
                  isLiked={likedIds.includes(reel.id)}
                  isSaved={savedIds.includes(reel.id)}
                  isFollowing={followingIds.includes(reel.id)}
                  isCommentsOpen={isCommentsOpen}
                  setVideoRef={setVideoRef}
                  onToggleVideo={() =>
                    toggleVideo(index, reel.id)
                  }
                  onToggleMuted={toggleMuted}
                  onToggleLike={() =>
                    toggleLike(reel.id)
                  }
                  onToggleSaved={() =>
                    toggleSaved(reel.id)
                  }
                  onToggleFollowing={() =>
                    toggleFollowing(reel.id)
                  }
                  onToggleComments={() =>
                    toggleComments(reel.id)
                  }
                />
              </div>

              {isCommentsOpen && (
                <CommentsPanel
                  reel={reel}
                  onClose={closeComments}
                />
              )}
            </section>
          );
        })}
      </div>

      <ReelsNavigation
        activeIndex={activeIndex}
        totalReels={reels.length}
        onPrevious={() =>
          scrollToReel(activeIndex - 1)
        }
        onNext={() =>
          scrollToReel(activeIndex + 1)
        }
      />
    </main>
  );
}

export default ReelsClient;