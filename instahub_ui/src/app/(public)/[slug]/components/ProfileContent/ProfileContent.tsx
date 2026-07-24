'use client';

import { useMemo, useState } from 'react';
import { Bookmark, Grid3X3, Heart, LockKeyhole } from 'lucide-react';

import ExploreItem from '@/app/(public)/explore/components/ExploreItem/ExploreItem';
import type { UserProfile } from '@/data/profiles';

type ProfileTab = 'posts' | 'save' | 'like';

const tabs: { id: ProfileTab; icon: typeof Grid3X3 }[] = [
  { id: 'posts', icon: Grid3X3 },
  { id: 'save', icon: Bookmark },
  { id: 'like', icon: Heart }
];

interface ProfileContentProps {
  profile: UserProfile;
}

export default function ProfileContent({ profile }: ProfileContentProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>('posts');

  const visiblePosts = useMemo(() => {
    if (activeTab === 'save' || activeTab === 'like') {
      return [];
    }

    return profile.posts;
  }, [activeTab, profile.posts]);

  return (
    <section className='mt-6'>
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {profile.isPrivate && !profile.isCurrentUser ? (
        <PrivateProfile />
      ) : visiblePosts.length > 0 ? (
        <div className='grid grid-cols-4 '>
          {visiblePosts.map((post) => (
            <ExploreItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <EmptyTab />
      )}
    </section>
  );
}

function ProfileTabs({
  activeTab,
  onTabChange
}: {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
}) {
  return (
    <div className='flex h-13 items-stretch justify-center gap-50'>
      {tabs.map(({ id, icon: Icon }) => (
        <button
          type='button'
          key={id}
          onClick={() => onTabChange(id)}
          className={`relative flex cursor-pointer items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
            activeTab === id ? 'text-white' : 'text-[#a8a8a8]'
          }`}
        >
          {activeTab === id && (
            <span className='absolute bottom-0 left-1/2 h-0.5 w-15 -translate-x-1/2 bg-white' />
          )}
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
}

function PrivateProfile() {
  return (
    <div className='flex min-h-72 flex-col items-center justify-center border-b border-[#262626] px-4 text-center'>
      <span className='flex size-16 items-center justify-center rounded-full border-2 border-white'>
        <LockKeyhole size={30} strokeWidth={1.8} />
      </span>
      <h2 className='mt-4 text-base font-semibold'>This account is private</h2>
      <p className='mt-1 text-sm text-[#a8a8a8]'>
        Follow this account to see their photos and videos.
      </p>
    </div>
  );
}

function EmptyTab() {
  return (
    <div className='flex min-h-72 flex-col items-center justify-center px-4 text-center'>
      <span className='flex size-16 items-center justify-center rounded-full border-2 border-white'>
        <Bookmark size={30} />
      </span>
      <h2 className='mt-4 text-2xl font-bold'>No saved posts yet</h2>
    </div>
  );
}
