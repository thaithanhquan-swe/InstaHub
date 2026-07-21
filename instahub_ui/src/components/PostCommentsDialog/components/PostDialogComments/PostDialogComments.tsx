import Image from 'next/image';

import { Post } from '@/types/post.types';
import CommentItem from '../CommentItem/CommentItem';

interface PostDialogCommentsProps {
  post: Post;
}

function PostDialogComments({ post }: PostDialogCommentsProps) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
      <div className="flex gap-3">
        <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
          <Image
            src={post.author.avatar}
            alt={post.author.username}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 text-sm">
          <p>
            <span className="mr-1 font-semibold">{post.author.username}</span>

            <span>{post.caption}</span>
          </p>

          <p className="mt-2 text-xs text-(--text-secondary)">
            {post.createdAt}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {post.commentList.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostDialogComments;
