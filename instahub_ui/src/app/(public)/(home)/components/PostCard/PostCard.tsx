'use client';

import { useState } from 'react';

import PostHeader from './components/PostHeader/PostHeader';
import PostMedia from './components/PostMedia/PostMedia';
import PostActions from './components/PostActions/PostActions';
import PostCaption from './components/PostCaption/PostCaption';

import { Post } from '@/types/post.types';
import PostCommentsDialog from '@/components/PostCommentsDialog/PostCommentsDialog';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <>
      <article className="w-full max-w-117.5 text-(--text-white)">
        <PostHeader author={post.author} createdAt={post.createdAt} />

        <PostMedia media={post.media} alt={`${post.author.username} post`} />

        <PostActions post={post} onViewComments={() => setCommentsOpen(true)} />

        <PostCaption
          username={post.author.username}
          caption={post.caption}
          onViewComments={() => setCommentsOpen(true)}
        />
      </article>

      <PostCommentsDialog
        post={post}
        open={commentsOpen}
        onOpenChange={setCommentsOpen}
      />
    </>
  );
}

export default PostCard;
