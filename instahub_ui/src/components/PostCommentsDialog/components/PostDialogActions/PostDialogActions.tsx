import { formatCount } from "@/lib/formatCount";
import { Bookmark, Heart, MessageCircle, Send, Smile } from "lucide-react";

interface PostDialogActionsProps {
  likes: number;
  createdAt: string;
}

function PostDialogActions({ likes, createdAt }: PostDialogActionsProps) {
  return (
    <div className="shrink-0 border-t border-(--border-color)">
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Like" className="cursor-pointer">
            <Heart size={27} />
          </button>

          <button type="button" aria-label="Comment" className="cursor-pointer">
            <MessageCircle size={27} />
          </button>

          <button type="button" aria-label="Share" className="cursor-pointer">
            <Send size={27} />
          </button>
        </div>

        <button type="button" aria-label="Save" className="cursor-pointer">
          <Bookmark size={27} />
        </button>
      </div>

      <div className="px-4 pt-3 pb-4">
        <p className="text-sm font-semibold">{formatCount(likes)} likes</p>

        <p className="mt-1 text-xs text-(--text-secondary)">{createdAt}</p>
      </div>

      <div className="flex h-13 items-center gap-3 border-t border-(--border-color) px-4">
        <button
          type="button"
          aria-label="Choose emoji"
          className="cursor-pointer"
        >
          <Smile size={21} />
        </button>

        <input
          type="text"
          placeholder="Add a comment..."
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-(--text-secondary)"
        />

        <button
          type="button"
          className="cursor-pointer text-sm font-semibold text-[#0095f6]"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostDialogActions;
