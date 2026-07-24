export interface SearchUser {
  id: number;
  slug: string;
  username: string;
  name: string;
  avatar: string;
  verified?: boolean;
  description: string;
}

export const searchUsers: SearchUser[] = [
  {
    id: 1,
    slug: 'dasstudios-vn',
    username: 'dasstudios.vn',
    name: 'DAS',
    avatar: 'https://i.pravatar.cc/150?img=8',
    description: 'Followed by maikyhan',
  },
  {
    id: 2,
    slug: 'dashberlin',
    username: 'dashberlin',
    name: 'Dash Berlin',
    avatar: 'https://i.pravatar.cc/150?img=12',
    verified: true,
    description: '454K followers',
  },
  {
    id: 3,
    slug: 'das-archieve',
    username: 'das.archieve',
    name: 'DAS ARCHIVEE ™',
    avatar: 'https://i.pravatar.cc/150?img=11',
    description: 'Followed by weantdodle + 2 more',
  },
  {
    id: 4,
    slug: 'taaarannn',
    username: 'taaarannn',
    name: 'Dasha Taran',
    avatar: 'https://i.pravatar.cc/150?img=47',
    verified: true,
    description: '6.2M followers',
  },
  {
    id: 5,
    slug: 'dsavvofb',
    username: 'dsavvofb_',
    name: 'DSA Visuals',
    avatar: 'https://i.pravatar.cc/150?img=53',
    verified: true,
    description: '901K followers',
  },
  {
    id: 6,
    slug: 'cortis',
    username: 'cortis',
    name: 'Cortis',
    avatar: 'https://i.pravatar.cc/150?img=15',
    verified: true,
    description: '2.1M followers',
  },
  {
    id: 7,
    slug: 'jennie',
    username: 'jennie',
    name: 'JENNIE',
    avatar: 'https://i.pravatar.cc/150?img=25',
    verified: true,
    description: 'Followed by roses_are_rosie + 8 more',
  },
  {
    id: 8,
    slug: 'travel-daily',
    username: 'travel.daily',
    name: 'Travel Daily',
    avatar: 'https://i.pravatar.cc/150?img=32',
    description: '125K followers',
  },
];
