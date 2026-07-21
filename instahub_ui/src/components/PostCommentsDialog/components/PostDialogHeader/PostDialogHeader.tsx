import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

import { PostAuthor } from '@/types/post.types';

interface PostDialogHeaderProps {
  author: PostAuthor;
}

function PostDialogHeader({ author }: PostDialogHeaderProps) {
  return (
    <div className="flex h-15 shrink-0 items-center justify-between border-b border-(--border-color) px-4">
      <div className="flex items-center gap-3">
        <div className="relative size-8 overflow-hidden rounded-full">
          <Image
            src={author.avatar}
            alt={author.username}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold">{author.username}</span>

          {author.verified && (
            <BadgeCheck size={14} fill="var(--text-primary)" color="white" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDialogHeader;
