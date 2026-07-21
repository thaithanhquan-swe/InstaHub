'use client';

import { useState } from 'react';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';

import { SuggestedUser } from '@/data/suggestion.data';
import ExplorePreview from '@/components/ExplorePreview/ExplorePreview';

function FollowedBy({
  usernames,
  avatars,
}: NonNullable<SuggestedUser['followedBy']>) {
  return (
    <div className="flex min-w-0 items-center gap-1">
      <div className="flex shrink-0 items-center">
        {avatars.slice(0, 2).map((avatar, index) => (
          <Image
            key={index}
            src={avatar}
            alt=""
            width={14}
            height={14}
            className={[
              'size-3.5 rounded-full border border-[#0c1014] object-cover',
              index > 0 ? '-ml-1' : '',
            ].join(' ')}
          />
        ))}
      </div>

      <p className="truncate text-xs text-[#a8a8a8]">Followed by {usernames}</p>
    </div>
  );
}

interface SuggestionItemProps {
  user: SuggestedUser;
}

function SuggestionItem({ user }: SuggestionItemProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing((previous) => !previous);
  };

  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={user.avatar}
            alt={`${user.username} avatar`}
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-full object-cover"
          />

          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <p className="truncate text-sm font-semibold text-(--text-white)">
                {user.username}
              </p>

              {user.verified && (
                <BadgeCheck
                  size={14}
                  fill="var(--text-primary)"
                  color="white"
                />
              )}
            </div>

            {user.followedBy ? (
              <FollowedBy {...user.followedBy} />
            ) : (
              <p className="truncate text-xs text-(--text-secondary)">
                Suggested for you
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleFollow}
          className="shrink-0 cursor-pointer text-xs font-semibold text-[#7595ff] transition-colors hover:text-[#8b9ede]"
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>

      <ExplorePreview
        user={user}
        isFollowing={isFollowing}
        onToggleFollow={handleToggleFollow}
      />
    </div>
  );
}

export default SuggestionItem;
