"use client";

import reels from "@/data/reels";
import { useEffect, useRef, useState } from "react";

export function useReels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  const [playingId, setPlayingId] = useState<number | null>(
    reels[0]?.id ?? null,
  );

  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [followingIds, setFollowingIds] = useState<number[]>([]);

  const [commentReelId, setCommentReelId] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          )[0];

        if (!visibleEntry) return;

        const index = Number(
          (visibleEntry.target as HTMLElement).dataset.reelIndex,
        );

        if (Number.isNaN(index)) return;

        const activeReel = reels[index];

        if (!activeReel) return;

        setActiveIndex(index);

        setCommentReelId((currentId) =>
          currentId === activeReel.id ? currentId : null,
        );

        videoRefs.current.forEach((video, videoIndex) => {
          if (!video) return;

          if (videoIndex === index) {
            video.play().catch(() => undefined);
            setPlayingId(activeReel.id);
          } else {
            video.pause();
          }
        });
      },
      {
        root: container,
        threshold: [0.6, 0.8],
      },
    );

    const reelElements =
      container.querySelectorAll<HTMLElement>("[data-reel-index]");

    reelElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setVideoRef = (
    index: number,
    element: HTMLVideoElement | null,
  ) => {
    videoRefs.current[index] = element;
  };

  const toggleVideo = (index: number, reelId: number) => {
    const video = videoRefs.current[index];

    if (!video) return;

    if (video.paused) {
      video.play().catch(() => undefined);
      setPlayingId(reelId);
      return;
    }

    video.pause();
    setPlayingId(null);
  };

  const toggleLike = (reelId: number) => {
    setLikedIds((currentIds) =>
      currentIds.includes(reelId)
        ? currentIds.filter((id) => id !== reelId)
        : [...currentIds, reelId],
    );
  };

  const toggleSaved = (reelId: number) => {
    setSavedIds((currentIds) =>
      currentIds.includes(reelId)
        ? currentIds.filter((id) => id !== reelId)
        : [...currentIds, reelId],
    );
  };

  const toggleFollowing = (reelId: number) => {
    setFollowingIds((currentIds) =>
      currentIds.includes(reelId)
        ? currentIds.filter((id) => id !== reelId)
        : [...currentIds, reelId],
    );
  };

  const toggleMuted = () => {
    setMuted((currentMuted) => !currentMuted);
  };

  const toggleComments = (reelId: number) => {
    setCommentReelId((currentId) =>
      currentId === reelId ? null : reelId,
    );
  };

  const closeComments = () => {
    setCommentReelId(null);
  };

  const scrollToReel = (index: number) => {
    const targetIndex = Math.min(
      Math.max(index, 0),
      reels.length - 1,
    );

    containerRef.current
      ?.querySelector<HTMLElement>(
        `[data-reel-index="${targetIndex}"]`,
      )
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return {
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
  };
}