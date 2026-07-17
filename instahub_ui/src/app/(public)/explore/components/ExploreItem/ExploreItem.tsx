"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Images, MessageCircle, Play } from "lucide-react";

import { formatCount } from "@/lib/formatCount";
import { Post } from "@/types/post.types";
import PostCommentsDialog from "@/components/PostCommentsDialog/PostCommentsDialog";

interface ExploreItemProps {
  post: Post;
}

function ExploreItem({ post }: ExploreItemProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const firstMedia = post.media[0];

  if (!firstMedia) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setDialogOpen(true)}
        aria-label={`Open post by ${post.author.username}`}
        className="group relative aspect-square cursor-pointer overflow-hidden bg-[#1a1a1a]"
      >
        {firstMedia.type === "video" ? (
          <video
            src={firstMedia.url as string}
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <Image
            src={firstMedia.url}
            alt={`Post by ${post.author.username}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}

        <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/40" />

        {post.type && post.type !== "image" && (
          <div className="absolute top-3 right-3 z-10 text-white drop-shadow-md">
            {post.type === "reel" ? (
              <Play size={21} fill="white" strokeWidth={0} />
            ) : (
              <Images size={21} strokeWidth={2} />
            )}
          </div>
        )}

        <div className="absolute inset-0 z-10 flex items-center justify-center gap-7 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Heart size={22} fill="white" />
            <span>{formatCount(post.likes)}</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <MessageCircle size={22} fill="white" />
            <span>{formatCount(post.comments)}</span>
          </div>
        </div>
      </button>

      <PostCommentsDialog
        post={post}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}

export default ExploreItem;
