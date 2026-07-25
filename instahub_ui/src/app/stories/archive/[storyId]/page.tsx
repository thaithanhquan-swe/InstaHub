import { notFound } from 'next/navigation';

import archiveStories from '@/data/archive-stories';
import StoriesClient from '@/app/stories/[storyId]/components/StoriesClient/StoriesClient';

interface ArchiveStoryPageProps {
  params: Promise<{
    storyId: string;
  }>;
}

export default async function ArchiveStoryPage({
  params,
}: ArchiveStoryPageProps) {
  const { storyId } = await params;
  const parsedStoryId = Number(storyId);
  const storyExists = archiveStories.some(
    (story) => story.id === parsedStoryId,
  );

  if (!storyExists) {
    notFound();
  }

  return (
    <StoriesClient
      key={parsedStoryId}
      storyId={parsedStoryId}
      storyList={archiveStories}
      closeHref='/archive'
      storyPathPrefix='/stories/archive'
      showStoryActions={false}
    />
  );
}
