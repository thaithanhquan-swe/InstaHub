import Image from "next/image";

import type { Story } from "@/data/stories";
import { cn } from "@/lib/utils";

interface PreviewStory {
  story: Story;
  index: number;
}

interface StoryPreviewListProps {
  stories: PreviewStory[];
  side: "left" | "right";
  onSelectStory: (index: number) => void;
}

function StoryPreviewList({
  stories,
  side,
  onSelectStory,
}: StoryPreviewListProps) {
  const displayStories =
    side === "left" ? [...stories] : stories;

  return (
    <div
      className={cn(
        "hidden items-center gap-12 2xl:flex",
        side === "left" ? "justify-end" : "justify-start",
      )}
    >
      {displayStories.map(({ story, index }, previewIndex) => {
        const previewMedia = story.media[0];

        if (!previewMedia) return null;

        const isClosestToActive =
          side === "left"
            ? previewIndex === displayStories.length - 1
            : previewIndex === 0;

        return (
          <button
            key={story.id}
            type="button"
            onClick={() => onSelectStory(index)}
            className={cn(
              "group relative shrink-0 cursor-pointer overflow-hidden rounded-lg bg-neutral-800 transition-all duration-300 hover:scale-[1.02]",
              isClosestToActive
                ? "h-72 w-40 opacity-75"
                : "h-64 w-36 opacity-55",
            )}
          >
            {previewMedia.type === "image" ? (
              <Image
                src={previewMedia.url}
                alt={`${story.username}'s story preview`}
                fill
                sizes="160px"
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            ) : (
              <video
                src={
                  typeof previewMedia.url === "string"
                    ? previewMedia.url
                    : previewMedia.url.src
                }
                muted
                playsInline
                preload="metadata"
                className="size-full object-cover"
              />
            )}

            <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="rounded-full bg-(image:--ig-gradient-close-friends) p-0.5">
                <div className="rounded-full bg-[#1a1a1a] p-0.5">
                  <div className="relative size-14 overflow-hidden rounded-full">
                    <Image
                      src={story.avatar}
                      alt={story.username}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <span className="mt-3 max-w-30 truncate text-sm font-semibold">
                {story.username}
              </span>

              <span className="text-sm text-white/80">
                {story.time}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default StoryPreviewList;