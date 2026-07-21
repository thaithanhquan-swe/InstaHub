"use client";

import type { ReelComment } from "@/data/reels";
import CommentItem from "../CommentItem/CommentItem";


interface CommentsListProps {
  comments: ReelComment[];
  likedCommentIds: number[];
  onToggleLike: (commentId: number) => void;
}

function CommentsList({
  comments,
  likedCommentIds,
  onToggleLike,
}: CommentsListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 [scrollbar-color:#777_transparent] scrollbar-thin">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isLiked={likedCommentIds.includes(
              comment.id,
            )}
            onToggleLike={() =>
              onToggleLike(comment.id)
            }
          />
        ))
      ) : (
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h3 className="text-lg font-bold">
            No comments yet
          </h3>

          <p className="mt-1 text-sm text-white/45">
            Start the conversation.
          </p>
        </div>
      )}
    </div>
  );
}

export default CommentsList;