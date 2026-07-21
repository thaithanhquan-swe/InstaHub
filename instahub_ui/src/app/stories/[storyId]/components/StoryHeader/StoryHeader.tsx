import { BadgeCheck, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';

import type { Story } from '@/data/stories';

interface StoryHeaderProps {
  story: Story;
  isPlaying: boolean;
  isVideo: boolean;
  volume: number;
  onTogglePlaying: () => void;
  onToggleMuted: () => void;
  onVolumeChange: (volume: number) => void;
}

function StoryHeader({
  story,
  isPlaying,
  isVideo,
  volume,
  onTogglePlaying,
  onToggleMuted,
  onVolumeChange,
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
          <span className="truncate font-semibold">{story.username}</span>

          {story.verified && (
            <BadgeCheck
              size={15}
              className="shrink-0 fill-[#0095f6] text-white"
            />
          )}

          <span className="text-white/65">{story.time}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        {isVideo && (
          <div className="group flex items-center rounded-full bg-black/40 px-2 py-1">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(event) => onVolumeChange(Number(event.target.value))}
              aria-label="Story volume"
              className=" h-1 w-0 opacity-0 accent-white transition-all duration-300 
             ease-out group-hover:mr-2 group-hover:w-16 group-hover:opacity-100 sm:group-hover:w-20"
            />
            <button
              type="button"
              onClick={onToggleMuted}
              aria-label={volume === 0 ? 'Unmute story' : 'Mute story'}
              className="cursor-pointer transition-transform hover:scale-110"
            >
              {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={onTogglePlaying}
          aria-label={isPlaying ? 'Pause story' : 'Play story'}
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
