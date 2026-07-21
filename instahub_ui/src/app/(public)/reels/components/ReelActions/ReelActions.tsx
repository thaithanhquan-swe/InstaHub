'use client';

import type { Reel } from '@/data/reels';
import { formatCount } from '@/lib/formatCount';
import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from 'lucide-react';

interface ReelActionsProps {
  reel: Reel;
  isLiked: boolean;
  isSaved: boolean;
  isCommentsOpen: boolean;
  onToggleLike: () => void;
  onToggleSaved: () => void;
  onToggleComments: () => void;
}

function ReelActions({
  reel,
  isLiked,
  isSaved,
  isCommentsOpen,
  onToggleLike,
  onToggleSaved,
  onToggleComments,
}: ReelActionsProps) {
  const totalLikes = reel.likes + (isLiked ? 1 : 0);

  return (
    <aside className="flex flex-col items-center gap-5 pb-2">
      <button
        type="button"
        onClick={onToggleLike}
        aria-label={isLiked ? 'Unlike reel' : 'Like reel'}
        className="flex cursor-pointer flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-90"
      >
        <Heart
          size={30}
          strokeWidth={2}
          className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
        />

        <span className="text-xs font-semibold">{formatCount(totalLikes)}</span>
      </button>

      <button
        type="button"
        onClick={onToggleComments}
        aria-label={isCommentsOpen ? 'Close comments' : 'Open comments'}
        className="flex cursor-pointer flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-90"
      >
        <MessageCircle
          size={30}
          strokeWidth={2}
          className={isCommentsOpen ? 'fill-white text-white' : 'text-white'}
        />

        <span className="text-xs font-semibold">
          {formatCount(reel.comments.length)}
        </span>
      </button>

      <button
        type="button"
        aria-label="Share reel"
        className="flex cursor-pointer flex-col items-center gap-1 transition-transform hover:scale-105 active:scale-90"
      >
        <Send size={29} strokeWidth={2} />
      </button>

      <button
        type="button"
        onClick={onToggleSaved}
        aria-label={isSaved ? 'Remove saved reel' : 'Save reel'}
        className="cursor-pointer transition-transform hover:scale-105 active:scale-90"
      >
        <Bookmark
          size={29}
          strokeWidth={2}
          className={isSaved ? 'fill-white text-white' : 'text-white'}
        />
      </button>

      <button
        type="button"
        aria-label="More options"
        className="cursor-pointer transition-transform hover:scale-105 active:scale-90"
      >
        <MoreHorizontal size={28} strokeWidth={2} />
      </button>
    </aside>
  );
}

export default ReelActions;
