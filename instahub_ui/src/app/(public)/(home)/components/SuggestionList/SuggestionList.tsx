import { suggestedUsers } from '@/data/suggestion.data';
import CurrentUserCard from './components/CurrentUserCard/CurrentUserCard';
import SuggestionItem from './components/SuggestionItem/SuggestionItem';
import SuggestionFooter from './components/SuggestionFooter/SuggestionFooter';
import Link from 'next/link';
import { profileData } from '@/data/settings';

function SuggestionList() {
  return (
    <aside className="mt-9 w-full max-w-90 pl-16">
      <CurrentUserCard
        slug={profileData.slug}
        username={profileData.username}
        fullName={profileData.displayName}
        avatar={profileData.image}
      />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#f5f5f5]">
          Suggested for you
        </h2>

        <Link
          href={'/explore/people'}
          className="cursor-pointer text-xs font-semibold text-(--text-white) transition-colors hover:text-[#a8a8a8]"
        >
          See all
        </Link>
      </div>

      <div className="space-y-4">
        {suggestedUsers.slice(0, 5).map((user) => (
          <SuggestionItem key={user.id} user={user} />
        ))}
      </div>

      <SuggestionFooter />
    </aside>
  );
}

export default SuggestionList;
