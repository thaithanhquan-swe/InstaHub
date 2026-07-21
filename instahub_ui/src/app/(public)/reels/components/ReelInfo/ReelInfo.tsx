"use client";

import type { Reel } from "@/data/reels";
import {
  BadgeCheck,
  Music2,
} from "lucide-react";

interface ReelInfoProps {
  reel: Reel;
  isFollowing: boolean;
  onToggleFollowing: () => void;
}

function ReelInfo({
  reel,
  isFollowing,
  onToggleFollowing,
}: ReelInfoProps) {
  return (
    <div className="absolute right-4 bottom-5 left-4 z-10">
      <div className="flex items-center gap-2">
        <div className="size-8 shrink-0 overflow-hidden rounded-full border border-white/30 bg-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={reel.author.avatar}
            alt={reel.author.username}
            className="size-full object-cover"
          />
        </div>

        <span className="text-sm font-semibold">
          {reel.author.username}
        </span>

        {reel.author.verified && (
          <BadgeCheck
            size={16}
            className="fill-blue-500 text-white"
          />
        )}

        <span className="text-sm text-white/70">•</span>

        <button
          type="button"
          onClick={onToggleFollowing}
          className="cursor-pointer text-sm font-semibold text-blue-400 transition-colors hover:text-white"
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <p className="mt-4 max-w-[340px] text-sm leading-5 text-white">
        {reel.caption}
      </p>

      <div className="mt-3 flex items-center gap-2 text-sm">
        <Music2 size={15} />

        <p className="max-w-[280px] truncate">
          {reel.audio}
        </p>
      </div>
    </div>
  );
}

export default ReelInfo;