import { notFound } from 'next/navigation';

import StoriesClient from '@/app/stories/[storyId]/components/StoriesClient/StoriesClient';
import {
  CURRENT_USER_SLUG,
  getProfileHighlightStories,
} from '@/data/profiles';

interface HighlightStoryPageProps {
  params: Promise<{
    highlightId: string;
  }>;
}

export default async function HighlightStoryPage({
  params,
}: HighlightStoryPageProps) {
  const { highlightId } = await params;
  const parsedHighlightId = Number(highlightId);
  const highlight = getProfileHighlightStories(parsedHighlightId);

  if (!highlight) {
    notFound();
  }

  return (
    <StoriesClient
      key={parsedHighlightId}
      storyId={parsedHighlightId}
      storyList={highlight.highlightStories}
      closeHref={`/${highlight.ownerSlug}`}
      storyPathPrefix='/stories/highlights'
      showStoryActions={false}
      allowHighlightDeletion={highlight.ownerSlug === CURRENT_USER_SLUG}
    />
  );
}
