import { Heart, Send } from 'lucide-react';

interface StoryActionsProps {
  username: string;
  isLiked: boolean;
  onToggleLike: () => void;
}

function StoryActions({ username, isLiked, onToggleLike }: StoryActionsProps) {
  return (
    <div className="absolute right-5 bottom-4 left-5 z-20 flex items-center gap-4">
      <button
        type="button"
        className="h-12 min-w-0 flex-1 rounded-full border border-white/90 px-5 text-left text-sm transition-colors hover:bg-white/10"
      >
        Reply to {username}...
      </button>

      <button
        type="button"
        onClick={onToggleLike}
        aria-label={isLiked ? 'Unlike story' : 'Like story'}
        className="cursor-pointer transition-transform hover:scale-110 active:scale-90"
      >
        <Heart
          size={31}
          strokeWidth={1.8}
          className={isLiked ? 'fill-red-500 text-red-500' : 'text-white'}
        />
      </button>

      <button
        type="button"
        aria-label="Share story"
        className="cursor-pointer transition-transform hover:scale-110 active:scale-90"
      >
        <Send size={30} strokeWidth={1.8} />
      </button>
    </div>
  );
}

export default StoryActions;
