'use client';

import type { ReelComment } from '@/data/reels';
import { Heart } from 'lucide-react';
import Image from 'next/image';

interface CommentItemProps {
  comment: ReelComment;
  isLiked: boolean;
  onToggleLike: () => void;
}

function CommentItem({ comment, isLiked, onToggleLike }: CommentItemProps) {
  const totalLikes = comment.likes + (isLiked ? 1 : 0);

  return (
    <article className='mb-5 flex gap-3 last:mb-0'>
      <div className='size-8 shrink-0 overflow-hidden rounded-full bg-white/10'>
        <Image
          src={comment.avatar}
          alt={comment.username}
          width={100}
          height={100}
          className='size-full object-cover'
        />
      </div>

      <div className='min-w-0 flex-1'>
        <p className='text-sm leading-5'>
          <span className='mr-1 font-semibold text-white'>
            {comment.username}
          </span>

          <span className='text-white/45'>{comment.createdAt}</span>
        </p>

        <p className='wrap-break-word text-sm leading-5 text-white/95'>
          {comment.content}
        </p>

        <div className='mt-2 flex items-center gap-4 text-xs font-medium text-white/45'>
          {totalLikes > 0 && (
            <span>
              {totalLikes} {totalLikes === 1 ? 'like' : 'likes'}
            </span>
          )}

          <button
            type='button'
            className='cursor-pointer transition-colors hover:text-white/80'
          >
            Reply
          </button>
        </div>

        {!!comment.replies && comment.replies > 0 && (
          <button
            type='button'
            className='mt-4 flex cursor-pointer items-center gap-3 text-xs font-semibold text-white/45 transition-colors hover:text-white/70'
          >
            <span className='h-px w-6 bg-white/25' />

            <span>
              View all {comment.replies}{' '}
              {comment.replies === 1 ? 'reply' : 'replies'}
            </span>
          </button>
        )}
      </div>

      <button
        type='button'
        onClick={onToggleLike}
        aria-label={isLiked ? 'Unlike comment' : 'Like comment'}
        className='mt-4 shrink-0 cursor-pointer transition-transform hover:scale-110 active:scale-90'
      >
        <Heart
          size={15}
          className={isLiked ? 'fill-red-500 text-red-500' : 'text-white/50'}
        />
      </button>
    </article>
  );
}

export default CommentItem;
