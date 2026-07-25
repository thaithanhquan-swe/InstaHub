import { Bookmark } from 'lucide-react';

import PostGridItem from '@/components/PostGridItem/PostGridItem';
import type { Post } from '@/types/post.types';

interface ProfileSavedProps {
  posts: Post[];
}

export default function ProfileSaved({ posts }: ProfileSavedProps) {
  if (posts.length === 0) {
    return (
      <div className='flex min-h-80 flex-col items-center justify-center px-4 text-center'>
        <span className='flex size-16 items-center justify-center rounded-full border-2 border-white'>
          <Bookmark size={30} />
        </span>
        <h2 className='mt-4 text-2xl font-bold'>No saved posts yet</h2>
        <p className='mt-2 max-w-sm text-sm text-[#a8a8a8]'>
          Save photos and videos that you want to see again. Only you can see
          what you&apos;ve saved.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className='px-4 py-4'>
        <p className='text-[14px] text-[#a8a8a8]'>Saved</p>
        <h1 className='text-[20px] text-white'>All Posts</h1>
      </div>

      <div className='grid grid-cols-2 gap-0.5 sm:grid-cols-3 lg:grid-cols-4'>
        {posts.map((post) => (
          <PostGridItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
