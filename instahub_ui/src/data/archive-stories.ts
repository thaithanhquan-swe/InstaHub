import { profileData } from '@/data/settings';
import stories, { type Story } from '@/data/stories';

export interface ArchivedStory extends Story {
  archivedAt: {
    day: number;
    month: string;
    year?: number;
  };
}

const archiveDates: ArchivedStory['archivedAt'][] = [
  { day: 12, month: 'Jul', year: 2026 },
  { day: 9, month: 'Jul' },
  { day: 23, month: 'Jun' },
  { day: 21, month: 'Jun' },
  { day: 18, month: 'Jun' },
  { day: 1, month: 'Jun' },
  { day: 28, month: 'May' },
  { day: 16, month: 'May' },
  { day: 7, month: 'May' },
  { day: 30, month: 'Apr' },
  { day: 14, month: 'Apr' },
  { day: 2, month: 'Apr' },
];

const archiveStories: ArchivedStory[] = archiveDates.map((archivedAt, index) => {
  const sourceStory = stories[index];
  const archivedVideo = stories[0]?.media.find(
    (media) => media.type === 'video',
  );
  const media =
    index === 3 && archivedVideo
      ? [archivedVideo]
      : (sourceStory?.media ?? []);

  return {
    id: index + 1,
    username: profileData.username,
    avatar: profileData.image,
    time: index < 2 ? `${index + 1}w` : `${index + 1}mo`,
    seen: true,
    media,
    archivedAt,
  };
});

export default archiveStories;
