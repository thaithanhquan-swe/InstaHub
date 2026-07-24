'use client';

import ExplorePreview from '@/components/ExplorePreview/ExplorePreview';
import { SuggestedUser } from '@/data/suggestion.data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ExplorePeopleItemProps {
  user: SuggestedUser;
}

function ExplorePeopleItem({ user }: ExplorePeopleItemProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  function handleToggleFollow() {
    setIsFollowing((previous) => !previous);
  }

  return (
    <div className="flex w-full items-center gap-3 px-4 py-2">
      <div className="group relative flex min-w-0 flex-1 items-center gap-3">
        <Link
          href={`/${user.slug}`}
          className="relative size-11 shrink-0 overflow-hidden rounded-full bg-neutral-800"
        >
          <Image
            src={user.avatar}
            alt={`${user.username} avatar`}
            fill
            sizes="44px"
            className="object-cover"
          />
        </Link>

        <div className="min-w-0 flex-1">
          <Link
            href={`/${user.slug}`}
            className="block truncate text-sm font-semibold text-(--text-white)"
          >
            {user.nickname}
          </Link>

          <p className="truncate text-sm text-(--text-secondary)">
            {user.username}
          </p>

          <p className="truncate text-xs text-(--text-secondary)">
            {user.followedBy?.usernames
              ? `Followed by ${user.followedBy.usernames}`
              : 'Suggested for you'}
          </p>
        </div>

        <ExplorePreview
          user={user}
          isFollowing={isFollowing}
          onToggleFollow={handleToggleFollow}
        />
      </div>

      <button
        type="button"
        onClick={handleToggleFollow}
        className={`ml-5 min-w-20 cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
          isFollowing
            ? 'bg-transparent text-(--text-white) hover:bg-(--hover-color)'
            : 'bg-[#4f5df5] text-white hover:bg-[#4050ed]'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default ExplorePeopleItem;
