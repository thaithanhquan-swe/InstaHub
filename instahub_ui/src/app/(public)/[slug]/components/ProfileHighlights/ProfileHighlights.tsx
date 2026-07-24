'use client';

import Image from 'next/image';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import type { ProfileHighlight, UserProfile } from '@/data/profiles';

import CreateHighlightDialog from './components/CreateHighlightDialog';

interface ProfileHighlightsProps {
  profile: UserProfile;
}

export default function ProfileHighlights({ profile }: ProfileHighlightsProps) {
  const [highlights, setHighlights] = useState(profile.highlights);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  if (
    profile.isPrivate ||
    (!profile.isCurrentUser && highlights.length === 0)
  ) {
    return null;
  }

  return (
    <>
      <section
        aria-label='Story highlights'
        className='mt-8 flex gap-5 overflow-x-auto pb-2 sm:mt-11 sm:gap-11 sm:px-6'
      >
        {profile.isCurrentUser && (
          <button
            type='button'
            onClick={() => setIsCreateOpen(true)}
            className='w-18 shrink-0 cursor-pointer text-center sm:w-20'
          >
            <span className='mx-auto flex aspect-square items-center justify-center rounded-full border border-[#737373] bg-[#121212]'>
              <Plus size={38} strokeWidth={1.5} className='text-[#a8a8a8]' />
            </span>
            <span className='mt-2 block truncate text-xs font-semibold'>
              New
            </span>
          </button>
        )}

        {highlights.map((highlight) => (
          <button
            type='button'
            key={highlight.id}
            className='w-18 shrink-0 cursor-pointer text-center sm:w-20'
          >
            <span className='mx-auto block rounded-full border border-[#737373] p-0.75'>
              <span className='relative block aspect-square overflow-hidden rounded-full border-2 border-black bg-[#262626]'>
                <Image
                  src={highlight.image}
                  alt=''
                  fill
                  sizes='80px'
                  className='object-cover'
                />
              </span>
            </span>
            <span className='mt-2 block truncate text-xs font-semibold'>
              {highlight.title}
            </span>
          </button>
        ))}
      </section>

      <CreateHighlightDialog
        open={isCreateOpen}
        onOpenChange={setIsCreateOpen}
        onCreate={(highlight: ProfileHighlight) =>
          setHighlights((current) => [...current, highlight])
        }
      />
    </>
  );
}
