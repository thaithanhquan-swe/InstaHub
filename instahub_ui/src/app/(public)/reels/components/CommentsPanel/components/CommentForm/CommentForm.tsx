'use client';

import { Smile } from 'lucide-react';
import type { FormEvent } from 'react';

interface CommentFormProps {
  content: string;
  onContentChange: (content: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onToggleEmojiPicker: () => void;
}

function CommentForm({
  content,
  onContentChange,
  onSubmit,
  onToggleEmojiPicker,
}: CommentFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="relative shrink-0 border-t border-white/5 p-3"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2">
        <div className="size-7 shrink-0 overflow-hidden rounded-full bg-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Your avatar"
            className="size-full object-cover"
          />
        </div>

        <input
          type="text"
          value={content}
          onChange={(event) => onContentChange(event.target.value)}
          placeholder="Add a comment..."
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
        />

        {content.trim() ? (
          <button
            type="submit"
            className="cursor-pointer text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            Post
          </button>
        ) : (
          <button
            type="button"
            onClick={onToggleEmojiPicker}
            aria-label="Choose emoji"
            className="cursor-pointer text-white/65 transition-colors hover:text-white"
          >
            <Smile size={22} />
          </button>
        )}
      </div>
    </form>
  );
}

export default CommentForm;
