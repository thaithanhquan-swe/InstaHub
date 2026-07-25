import Link from 'next/link';
import { ArrowLeft, History } from 'lucide-react';

import archiveStories from '@/data/archive-stories';
import { CURRENT_USER_SLUG } from '@/data/profiles';

import ArchiveStoryCard from './components/ArchiveStoryCard/ArchiveStoryCard';

export default function ArchivePage() {
  return (
    <main className='min-h-screen w-full max-w-281 px-5 pt-8 pb-16 text-white'>
      <header className='flex items-center gap-4'>
        <Link
          href={`/${CURRENT_USER_SLUG}`}
          aria-label='Back to profile'
          className='flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/10'
        >
          <ArrowLeft size={25} />
        </Link>
        <h1 className='text-xl font-medium'>Archive</h1>
      </header>

      <div className='mt-11 border-b border-[#262626] text-center'>
        <div className='mx-auto flex w-fit items-center gap-2 border-b border-white px-3 pb-4 text-xs font-semibold'>
          <History size={14} />
          <span>STORIES</span>
        </div>
      </div>

      <p className='mt-9 text-xs text-[#a8a8a8]'>
        Only you can see your archived stories unless you choose to share them.
      </p>

      <section
        aria-label='Archived stories'
        className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-7'
      >
        {archiveStories.map((story) => (
          <ArchiveStoryCard key={story.id} story={story} />
        ))}
      </section>
    </main>
  );
}
