import { SuggestedUser } from '@/data/suggestion.data';

import ExplorePreviewHeader from './components/ExplorePreviewHeader/ExplorePreviewHeader';
import ExplorePreviewStats from './components/ExplorePreviewStats/ExplorePreviewStats';
import ExplorePreviewContent from './components/ExplorePreviewContent/ExplorePreviewContent';
import ExplorePreviewFollowButton from './components/ExplorePreviewFollowButton/ExplorePreviewFollowButton';

interface ExplorePreviewProps {
  user: SuggestedUser;
  isFollowing: boolean;
  onToggleFollow: () => void;
}

function ExplorePreview({
  user,
  isFollowing,
  onToggleFollow,
}: ExplorePreviewProps) {
  return (
    <div className="invisible absolute top-full right-0 z-50 mt-2 w-92 translate-y-1 overflow-hidden rounded-2xl bg-[#24262b] opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <ExplorePreviewHeader user={user} />

      <ExplorePreviewStats stats={user.stats} />

      <ExplorePreviewContent user={user} />

      <ExplorePreviewFollowButton
        isFollowing={isFollowing}
        onToggleFollow={onToggleFollow}
      />
    </div>
  );
}

export default ExplorePreview;
