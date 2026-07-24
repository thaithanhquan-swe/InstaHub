import { CircleOff, LockKeyhole, UserRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SettingsItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type SettingsGroup = {
  title: string;
  items: SettingsItem[];
};

export type SectionCopy = {
  title: string;
  description: string;
};

export const settingsGroups: SettingsGroup[] = [
  {
    title: 'How you use Instagram',
    items: [{ id: 'edit-profile', label: 'Edit profile', icon: UserRound }]
  },
  {
    title: 'Who can see your content',
    items: [
      {
        id: 'account-privacy',
        label: 'Account privacy',
        icon: LockKeyhole
      },
      { id: 'blocked', label: 'Blocked', icon: CircleOff }
    ]
  }
];

export const profileData = {
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev1GqxHajibRl6Ote8SwM9DhdYNN2NuWLSwXP2pn8F-fpKxd5S1sLWQU&s=10',
  slug: 'instahub-user',
  username: 'instahub_user',
  displayName: 'InstaHub User',
  email: 'thaithanhquan11102005@gmail.com',
  phone: '+84792267973',
  birthday: 'October 11, 2000'
};

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];
