'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BadgeCheck, ChevronDown } from 'lucide-react';

import type { UserProfile } from '@/data/profiles';
import { formatCount } from '@/lib/formatCount';

interface ProfileHeaderProps {
  profile: UserProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <>
      <div className='flex items-center gap-5'>
        <div className='flex justify-center sm:pt-1'>
          <div className='relative size-20 overflow-hidden rounded-full bg-[#262626] sm:size-38'>
            <Image
              src={profile.avatar}
              alt={`${profile.username} profile picture`}
              fill
              priority
              sizes='(max-width: 640px) 80px, 152px'
              className='object-cover'
            />
          </div>
        </div>

        <div className='min-w-0'>
          <div className='my-4 space-y-2'>
            <div className='flex min-w-0 items-center gap-1.5'>
              <h1 className='text-[24px] font-bold'>{profile.username}</h1>
              {profile.verified && (
                <BadgeCheck
                  size={18}
                  fill='var(--text-primary)'
                  color='white'
                  className='shrink-0'
                />
              )}
            </div>
            <h1 className='text-[14px] font-normal'>{profile.displayName}</h1>

            <div className='flex items-center gap-5'>
              <ProfileStat value={profile.stats.posts} label='posts' />
              <ProfileStat value={profile.stats.followers} label='followers' />
              <ProfileStat value={profile.stats.following} label='following' />
            </div>
          </div>

          <div className='hidden text-sm leading-5 sm:block'>
            <ProfileBio profile={profile} isFollowing={isFollowing} />
          </div>
        </div>
      </div>

      <div className='my-5'>
        <ProfileActions
          profile={profile}
          isFollowing={isFollowing}
          onToggleFollow={() => setIsFollowing((value) => !value)}
        />
      </div>

      <div className='mt-7 flex items-center justify-around border-y border-[#262626] py-3 sm:mt-9 sm:hidden'>
        <ProfileStat value={profile.stats.posts} label='posts' compact />
        <ProfileStat
          value={profile.stats.followers}
          label='followers'
          compact
        />
        <ProfileStat
          value={profile.stats.following}
          label='following'
          compact
        />
      </div>
    </>
  );
}

function ProfileActions({
  profile,
  isFollowing,
  onToggleFollow
}: {
  profile: UserProfile;
  isFollowing: boolean;
  onToggleFollow: () => void;
}) {
  if (profile.isCurrentUser) {
    return (
      <div className='flex items-center gap-2 '>
        <Link
          href='/settings'
          className='min-w-81.25 rounded-lg bg-[#363636] px-6 py-3.25 text-center text-sm font-semibold transition-colors hover:bg-[#454545]'
        >
          Edit profile
        </Link>

        <Link
          href='/settings'
          aria-label='View archive'
          className='min-w-81.25 rounded-lg bg-[#363636] px-6 py-3.25 text-center text-sm font-semibold transition-colors hover:bg-[#454545]'
        >
          View archive
        </Link>
      </div>
    );
  }

  return (
    <div className='flex items-center gap-2'>
      <button
        type='button'
        onClick={onToggleFollow}
        className={`min-w-81.25 rounded-lg px-6 py-3.25 text-center text-sm font-semibold transition-colors cursor-pointer ${
          isFollowing
            ? 'bg-[#363636] hover:bg-[#454545]'
            : 'bg-[#0095f6] text-white hover:bg-[#1877f2]'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
        {isFollowing && (
          <ChevronDown
            size={14}
            className='ml-1 inline-block align-text-bottom'
          />
        )}
      </button>
      <Link
        href='/messages'
        className='min-w-81.25 rounded-lg bg-[#363636] px-6 py-3.25 text-center text-sm font-semibold transition-colors hover:bg-[#454545]'
      >
        Message
      </Link>
    </div>
  );
}

function ProfileBio({
  profile
}: {
  profile: UserProfile;
  isFollowing: boolean;
}) {
  return (
    <>
      <p className='font-semibold'>{profile.displayName}</p>
      {profile.bio.map((line) => (
        <p key={line}>{line}</p>
      ))}
      {profile.website && (
        <a
          href={`https://${profile.website}`}
          target='_blank'
          rel='noreferrer'
          className='font-semibold text-[#e0f1ff] hover:underline'
        >
          {profile.website}
        </a>
      )}
      {!profile.isCurrentUser && profile.followedBy && (
        <p className='mt-3 text-xs text-[#a8a8a8]'>
          Followed by{' '}
          <span className='font-semibold text-white'>{profile.followedBy}</span>
        </p>
      )}
    </>
  );
}

function ProfileStat({
  value,
  label,
  compact = false
}: {
  value: number;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? 'text-center text-sm' : ''}>
      <span className='font-semibold'>{formatCount(value)}</span>{' '}
      <span className={compact ? 'block text-[#a8a8a8]' : ''}>{label}</span>
    </div>
  );
}
