'use client';

import Image from 'next/image';
import {
  AtSign,
  Bell,
  CircleOff,
  EyeOff,
  Heart,
  LockKeyhole,
  MessageCircle,
  Search,
  Settings2,
  ShieldCheck,
  Star,
  UserRound,
  UserRoundPlus,
  UsersRound
} from 'lucide-react';
import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';

type SettingsItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

type SettingsGroup = {
  title: string;
  items: SettingsItem[];
};

const settingsGroups: SettingsGroup[] = [
  {
    title: 'How you use Instagram',
    items: [
      { id: 'edit-profile', label: 'Edit profile', icon: UserRound },
      { id: 'notifications', label: 'Notifications', icon: Bell }
    ]
  },
  {
    title: 'Who can see your content',
    items: [
      {
        id: 'account-privacy',
        label: 'Account privacy',
        icon: LockKeyhole
      },
      { id: 'close-friends', label: 'Close Friends', icon: Star },
      { id: 'blocked', label: 'Blocked', icon: CircleOff },
      {
        id: 'story-location',
        label: 'Story and location',
        icon: Heart
      }
    ]
  },
  {
    title: 'How others can interact with you',
    items: [
      {
        id: 'messages',
        label: 'Messages and story replies',
        icon: MessageCircle
      },
      { id: 'tags', label: 'Tags and mentions', icon: AtSign },
      { id: 'hidden-words', label: 'Hidden Words', icon: EyeOff },
      { id: 'restricted', label: 'Restricted accounts', icon: UsersRound }
    ]
  },
  {
    title: 'What you see',
    items: [
      {
        id: 'follow-invite',
        label: 'Follow and invite friends',
        icon: UserRoundPlus
      },
      {
        id: 'content-preferences',
        label: 'Content preferences',
        icon: Settings2
      }
    ]
  }
];

const sectionCopy: Record<string, { title: string; description: string }> = {
  notifications: {
    title: 'Notifications',
    description: 'Choose what notifications you receive from InstaHub.'
  },
  'close-friends': {
    title: 'Close Friends',
    description: 'Choose who can see your Close Friends stories and posts.'
  },
  'story-location': {
    title: 'Story and location',
    description:
      'Manage how people can interact with your stories and location.'
  },
  messages: {
    title: 'Messages and story replies',
    description: 'Control who can message you and reply to your stories.'
  },
  tags: {
    title: 'Tags and mentions',
    description: 'Choose who can tag or mention you on InstaHub.'
  },
  'hidden-words': {
    title: 'Hidden Words',
    description: 'Hide comments and message requests containing unwanted words.'
  },
  restricted: {
    title: 'Restricted accounts',
    description: 'Protect yourself from unwanted interactions without blocking.'
  },
  'follow-invite': {
    title: 'Follow and invite friends',
    description: 'Find people you know and invite friends to join InstaHub.'
  },
  'content-preferences': {
    title: 'Content preferences',
    description: 'Manage the types of content you see across InstaHub.'
  },
  'accounts-center': {
    title: 'Accounts Center',
    description:
      'Manage your connected experiences and account settings across Meta technologies.'
  }
};

const profileImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev1GqxHajibRl6Ote8SwM9DhdYNN2NuWLSwXP2pn8F-fpKxd5S1sLWQU&s=10';

function EditProfilePanel() {
  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <h1 className='mb-10 text-xl font-bold'>Edit profile</h1>

      <div className='mb-8 flex items-center rounded-2xl bg-[#26292e] p-4'>
        <Image
          src={profileImage}
          alt='Profile'
          width={56}
          height={56}
          className='h-14 w-14 rounded-full object-cover'
        />
        <div className='ml-4 min-w-0 flex-1'>
          <p className='truncate text-base font-semibold'>instahub_user</p>
          <p className='truncate text-sm text-[#a8a8a8]'>InstaHub User</p>
        </div>
        <button
          type='button'
          className='cursor-pointer rounded-lg bg-[#0095f6] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
        >
          Change photo
        </button>
      </div>

      <label className='mb-3 block text-base font-semibold' htmlFor='bio'>
        Bio
      </label>
      <textarea
        id='bio'
        maxLength={150}
        placeholder='Bio'
        className='h-24 w-full resize-none rounded-xl border border-[#363a40] bg-transparent p-4 text-sm outline-none transition-colors placeholder:text-[#737373] focus:border-[#737373]'
      />
      <p className='mt-2 text-right text-xs text-[#a8a8a8]'>0 / 150</p>

      <label
        className='mt-7 mb-3 block text-base font-semibold'
        htmlFor='gender'
      >
        Gender
      </label>
      <button
        id='gender'
        type='button'
        className='flex h-12 w-full cursor-pointer items-center justify-between rounded-xl border border-[#363a40] px-4 text-sm'
      >
        <span>Prefer not to say</span>
        <span className='text-[#a8a8a8]'>›</span>
      </button>
      <p className='mt-2 text-xs text-[#a8a8a8]'>
        This won&apos;t be part of your public profile.
      </p>

      <div className='mt-8 flex justify-end'>
        <button
          type='button'
          className='cursor-pointer rounded-lg bg-[#0095f6] px-8 py-2.5 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function PrivacyPanel() {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <h1 className='mb-10 text-xl font-bold'>Account privacy</h1>
      <div className='flex items-center justify-between border-b border-white/10 pb-6'>
        <div className='pr-8'>
          <p className='font-semibold'>Private account</p>
          <p className='mt-2 text-sm leading-5 text-[#a8a8a8]'>
            When your account is private, only people you approve can see your
            photos and videos.
          </p>
        </div>
        <button
          type='button'
          role='switch'
          aria-checked={isPrivate}
          onClick={() => setIsPrivate((value) => !value)}
          className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
            isPrivate ? 'bg-[#0095f6]' : 'bg-[#737373]'
          }`}
        >
          <span
            className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${
              isPrivate ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

function BlockedPanel() {
  return (
    <div className='flex h-full w-full flex-col py-10'>
      <div className='mx-auto w-full max-w-2xl'>
        <h1 className='text-xl font-bold'>Blocked accounts</h1>
        <p className='mt-8 text-base'>
          You can block people anytime from their profiles.
        </p>
      </div>
      <p className='mt-28 text-center text-sm'>
        You haven&apos;t blocked anyone.
      </p>
    </div>
  );
}

function MetaVerifiedPanel() {
  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#0095f6]/15 text-[#0095f6]'>
        <ShieldCheck size={30} />
      </div>
      <h1 className='text-2xl font-bold'>Meta Verified</h1>
      <p className='mt-4 max-w-lg leading-6 text-[#a8a8a8]'>
        Build confidence with a verified badge, added account protection and
        direct support.
      </p>
      <button
        type='button'
        className='mt-8 cursor-pointer rounded-lg bg-[#0095f6] px-5 py-2.5 text-sm font-semibold hover:bg-[#1877f2]'
      >
        Learn more
      </button>
    </div>
  );
}

function GenericPanel({ sectionId }: { sectionId: string }) {
  const copy = sectionCopy[sectionId];

  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <h1 className='text-xl font-bold'>{copy.title}</h1>
      <p className='mt-8 text-base text-[#a8a8a8]'>{copy.description}</p>
    </div>
  );
}

export default function SettingsClient() {
  const [activeSection, setActiveSection] = useState('edit-profile');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return settingsGroups;

    return settingsGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(query)
        )
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery]);

  const renderPanel = () => {
    if (activeSection === 'edit-profile') return <EditProfilePanel />;
    if (activeSection === 'account-privacy') return <PrivacyPanel />;
    if (activeSection === 'blocked') return <BlockedPanel />;
    if (activeSection === 'meta-verified') return <MetaVerifiedPanel />;

    return <GenericPanel sectionId={activeSection} />;
  };

  return (
    <div className='fixed inset-y-0 right-0 left-18 z-40 flex overflow-hidden text-[#f5f5f5]'>
      <aside className='h-full w-[390px] shrink-0 overflow-y-auto border-r border-white/10 px-6 py-8'>
        <h1 className='px-4 text-xl font-bold'>Settings</h1>

        <label className='mt-6 flex h-11 items-center gap-3 rounded-xl bg-[#26292e] px-4 text-[#a8a8a8]'>
          <Search size={18} />
          <input
            type='search'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder='Search'
            aria-label='Search settings'
            className='min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#a8a8a8]'
          />
        </label>

        {!searchQuery && (
          <div className='mt-7'>
            <div className='mb-3 flex items-center justify-between px-4 text-xs text-[#a8a8a8]'>
              <span>Your account</span>
              <span className='font-semibold text-white'>∞ Meta</span>
            </div>
            <button
              type='button'
              onClick={() => setActiveSection('accounts-center')}
              className={`flex w-full cursor-pointer gap-3 rounded-xl p-4 text-left transition-colors hover:bg-[#26292e] ${
                activeSection === 'accounts-center' ? 'bg-[#26292e]' : ''
              }`}
            >
              <UserRound size={24} className='mt-0.5 shrink-0' />
              <span>
                <span className='block text-sm font-semibold'>
                  Accounts Center
                </span>
                <span className='mt-1 block text-xs leading-5 text-[#c7c7c7]'>
                  Password, security, personal details, connected experiences
                  and ad preferences
                </span>
              </span>
            </button>

            <button
              type='button'
              onClick={() => setActiveSection('meta-verified')}
              className={`mt-2 flex h-12 w-full cursor-pointer items-center gap-3 rounded-xl px-4 text-sm transition-colors hover:bg-[#26292e] ${
                activeSection === 'meta-verified' ? 'bg-[#26292e]' : ''
              }`}
            >
              <ShieldCheck size={22} />
              Meta Verified
            </button>
          </div>
        )}

        <nav className='pb-8'>
          {filteredGroups.map((group) => (
            <section key={group.title} className='mt-7'>
              <h2 className='mb-3 px-4 text-xs text-[#a8a8a8]'>
                {group.title}
              </h2>
              <ul className='space-y-1'>
                {group.items.map(({ id, label, icon: Icon }) => (
                  <li key={id}>
                    <button
                      type='button'
                      onClick={() => setActiveSection(id)}
                      className={`flex h-12 w-full cursor-pointer items-center gap-4 rounded-xl px-4 text-left text-sm transition-colors hover:bg-[#26292e] ${
                        activeSection === id ? 'bg-[#26292e]' : ''
                      }`}
                    >
                      <Icon size={22} className='shrink-0' />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {filteredGroups.length === 0 && (
            <p className='mt-10 text-center text-sm text-[#a8a8a8]'>
              No settings found.
            </p>
          )}
        </nav>
      </aside>

      <main className='min-w-0 flex-1 overflow-y-auto px-10'>
        {renderPanel()}
      </main>
    </div>
  );
}
