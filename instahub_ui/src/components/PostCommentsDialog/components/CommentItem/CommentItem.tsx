import Image from "next/image";
import { Heart } from "lucide-react";

import { PostComment } from "@/types/post.types";

interface CommentItemProps {
  comment: PostComment;
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex gap-3">
      <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
        <Image
          src={comment.avatar}
          alt={comment.username}
          fill
          sizes="32px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1 text-sm">
        <p>
          <span className="mr-1 font-semibold">{comment.username}</span>

          <span>{comment.content}</span>
        </p>

        <div className="mt-2 flex items-center gap-3 text-xs text-(--text-secondary)">
          <span>{comment.createdAt}</span>

          {comment.likes && <span>{comment.likes} likes</span>}

          <button type="button" className="cursor-pointer font-semibold">
            Reply
          </button>
        </div>

        {!!comment.replies && (
          <button
            type="button"
            className="mt-3 flex cursor-pointer items-center gap-3 text-xs font-semibold text-(--text-secondary)"
          >
            <span className="h-px w-6 bg-(--text-secondary)" />
            View replies ({comment.replies})
          </button>
        )}
      </div>

      <button
        type="button"
        aria-label={`Like comment by ${comment.username}`}
        className="shrink-0 cursor-pointer self-start pt-1"
      >
        <Heart size={13} />
      </button>
    </div>
  );
}

export default CommentItem;
