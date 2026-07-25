import Image from 'next/image';
import Link from 'next/link';
import { Images, Play } from 'lucide-react';

import type { ArchivedStory } from '@/data/archive-stories';

interface ArchiveStoryCardProps {
  story: ArchivedStory;
}

export default function ArchiveStoryCard({ story }: ArchiveStoryCardProps) {
  const previewMedia = story.media[0];

  if (!previewMedia) {
    return null;
  }

  return (
    <Link
      href={`/stories/archive/${story.id}`}
      aria-label={`View archived story from ${story.archivedAt.day} ${story.archivedAt.month}`}
      className='group relative aspect-[9/16] overflow-hidden bg-[#1a1a1a]'
    >
      {previewMedia.type === 'image' ? (
        <Image
          src={previewMedia.url}
          alt={`Archived story from ${story.archivedAt.day} ${story.archivedAt.month}`}
          fill
          sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px'
          className='object-cover transition-transform duration-300 group-hover:scale-[1.02]'
        />
      ) : (
        <video
          src={
            typeof previewMedia.url === 'string'
              ? previewMedia.url
              : previewMedia.url.src
          }
          muted
          playsInline
          preload='metadata'
          className='size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
        />
      )}

      <div className='absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15' />

      <div className='absolute top-2 left-2 z-10 flex min-w-9 flex-col items-center rounded-lg bg-white px-2 py-1 text-[11px] leading-3.5 font-semibold text-black shadow-sm'>
        <span className='text-sm'>{story.archivedAt.day}</span>
        <span>{story.archivedAt.month}</span>
        {story.archivedAt.year && <span>{story.archivedAt.year}</span>}
      </div>

      <span className='absolute top-3 right-3 z-10 text-white drop-shadow-md'>
        {previewMedia.type === 'video' ? (
          <Play size={20} fill='currentColor' />
        ) : story.media.length > 1 ? (
          <Images size={20} />
        ) : null}
      </span>
    </Link>
  );
}
