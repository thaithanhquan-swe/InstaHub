'use client';

import { X } from 'lucide-react';

interface CommentsHeaderProps {
  onClose: () => void;
}

function CommentsHeader({ onClose }: CommentsHeaderProps) {
  return (
    <header className="relative flex h-17 shrink-0 items-center justify-center border-b border-white/5">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close comments"
        className="absolute left-5 cursor-pointer text-white/90 transition-transform hover:scale-110 active:scale-95"
      >
        <X size={22} />
      </button>

      <h2 className="text-sm font-bold">Comments</h2>
    </header>
  );
}

export default CommentsHeader;
