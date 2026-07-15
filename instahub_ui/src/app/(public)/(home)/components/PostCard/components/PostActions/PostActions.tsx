"use client";

import { useState } from "react";
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react";
import { Post } from "@/types/post.types";

interface PostCardProps {
  post: Post;
}

function PostActions({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="px-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={liked ? "Unlike post" : "Like post"}
              onClick={() => setLiked((value) => !value)}
              className="cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-90"
            >
              <Heart
                size={26}
                fill={liked ? "currentColor" : "none"}
                className={liked ? "text-red-500" : ""}
              />
            </button>

            <p className="text-sm font-semibold">{post.likes}</p>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Comment"
              className="cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-90"
            >
              <MessageCircle size={26} />
            </button>

            <p className="text-sm font-semibold">{post.comments}</p>
          </div>

          <button
            type="button"
            aria-label="Share post"
            className="cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-90"
          >
            <Send size={25} />
          </button>
        </div>

        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save post"}
          onClick={() => setSaved((value) => !value)}
          className="cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-90"
        >
          <Bookmark size={26} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
}

export default PostActions;
