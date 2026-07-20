import {
  BadgeCheck,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";

import type { Story } from "@/data/stories";

interface StoryHeaderProps {
  story: Story;
  isPlaying: boolean;
  onTogglePlaying: () => void;
}

function StoryHeader({
  story,
  isPlaying,
  onTogglePlaying,
}: StoryHeaderProps) {
  return (
    <header className="absolute top-8 right-4 left-4 z-20 flex items-center justify-between">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
          <Image
            src={story.avatar}
            alt={story.username}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 items-center gap-1.5 text-sm">
          <span className="truncate font-semibold">
            {story.username}
          </span>

          {story.verified && (
            <BadgeCheck
              size={15}
              className="shrink-0 fill-[#0095f6] text-white"
            />
          )}

          <span className="text-white/65">{story.time}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onTogglePlaying}
          aria-label={isPlaying ? "Pause story" : "Play story"}
          className="cursor-pointer transition-transform hover:scale-110"
        >
          {isPlaying ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" />
          )}
        </button>
      </div>
    </header>
  );
}

export default StoryHeader;