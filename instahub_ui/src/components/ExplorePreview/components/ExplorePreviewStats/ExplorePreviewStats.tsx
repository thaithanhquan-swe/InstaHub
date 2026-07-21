import { SuggestedUser } from '@/data/suggestion.data';

interface ExplorePreviewStatsProps {
  stats: SuggestedUser['stats'];
}

function formatCount(count: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(count);
}

function ExplorePreviewStats({ stats }: ExplorePreviewStatsProps) {
  const items = [
    {
      label: 'posts',
      value: stats.posts,
    },
    {
      label: 'followers',
      value: stats.followers,
    },
    {
      label: 'following',
      value: stats.following,
    },
  ];

  return (
    <div className="mb-3 grid grid-cols-3 px-4 text-center">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-sm font-semibold text-white">
            {formatCount(item.value)}
          </p>

          <p className="text-sm text-white">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default ExplorePreviewStats;
