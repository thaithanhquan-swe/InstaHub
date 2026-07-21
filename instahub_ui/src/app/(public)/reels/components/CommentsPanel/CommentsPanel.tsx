'use client';

import type { Reel, ReelComment } from '@/data/reels';
import { FormEvent, useState } from 'react';
import CommentsHeader from './components/CommentsHeader/CommentsHeader';
import CommentsList from './components/CommentsList/CommentsList';
import CommentForm from './components/CommentForm/CommentForm';
import EmojiPickerPopover from './components/EmojiPickerPopover/EmojiPickerPopover';

interface CommentsPanelProps {
  reel: Reel;
  onClose: () => void;
}

function CommentsPanel({ reel, onClose }: CommentsPanelProps) {
  const [content, setContent] = useState('');
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const [localComments, setLocalComments] = useState<ReelComment[]>(
    reel.comments,
  );

  const [likedCommentIds, setLikedCommentIds] = useState<number[]>([]);

  const handleToggleCommentLike = (commentId: number) => {
    setLikedCommentIds((currentIds) =>
      currentIds.includes(commentId)
        ? currentIds.filter((id) => id !== commentId)
        : [...currentIds, commentId],
    );
  };

  const handleEmojiClick = (emoji: string) => {
    setContent((currentContent) => {
      return `${currentContent}${emoji}`;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    const newComment: ReelComment = {
      id: Date.now(),
      username: 'quan.thai_',
      avatar: 'https://i.pravatar.cc/100?img=12',
      content: trimmedContent,
      createdAt: 'now',
      likes: 0,
    };

    setLocalComments((currentComments) => [...currentComments, newComment]);

    setContent('');
    setIsEmojiPickerOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Close comments overlay"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 xl:hidden"
      />

      <aside className="fixed inset-x-3 bottom-3 z-50 flex h-[72vh] flex-col overflow-visible rounded-[26px] border border-white/5 bg-[#1d2126] shadow-2xl sm:inset-x-auto sm:right-4 sm:w-[380px] xl:absolute xl:top-[60%] xl:left-[40%] xl:bottom-auto xl:ml-[190px] xl:h-[510px] xl:w-[344px] xl:-translate-y-1/2">
        <div className="flex h-full flex-col overflow-hidden rounded-[26px]">
          <CommentsHeader onClose={onClose} />

          <CommentsList
            comments={localComments}
            likedCommentIds={likedCommentIds}
            onToggleLike={handleToggleCommentLike}
          />

          <CommentForm
            content={content}
            onContentChange={setContent}
            onSubmit={handleSubmit}
            onToggleEmojiPicker={() =>
              setIsEmojiPickerOpen((currentState) => !currentState)
            }
          />
        </div>

        <EmojiPickerPopover
          open={isEmojiPickerOpen}
          onClose={() => setIsEmojiPickerOpen(false)}
          onEmojiClick={handleEmojiClick}
        />
      </aside>
    </>
  );
}

export default CommentsPanel;
