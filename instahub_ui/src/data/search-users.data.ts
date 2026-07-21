export interface SearchUser {
  id: number;
  username: string;
  name: string;
  avatar: string;
  verified?: boolean;
  description: string;
}

export const searchUsers: SearchUser[] = [
  {
    id: 1,
    username: 'dasstudios.vn',
    name: 'DAS',
    avatar: 'https://i.pravatar.cc/150?img=8',
    description: 'Followed by maikyhan',
  },
  {
    id: 2,
    username: 'dashberlin',
    name: 'Dash Berlin',
    avatar: 'https://i.pravatar.cc/150?img=12',
    verified: true,
    description: '454K followers',
  },
  {
    id: 3,
    username: 'das.archieve',
    name: 'DAS ARCHIVEE ™',
    avatar: 'https://i.pravatar.cc/150?img=11',
    description: 'Followed by weantdodle + 2 more',
  },
  {
    id: 4,
    username: 'taaarannn',
    name: 'Dasha Taran',
    avatar: 'https://i.pravatar.cc/150?img=47',
    verified: true,
    description: '6.2M followers',
  },
  {
    id: 5,
    username: 'dsavvofb_',
    name: 'DSA Visuals',
    avatar: 'https://i.pravatar.cc/150?img=53',
    verified: true,
    description: '901K followers',
  },
  {
    id: 6,
    username: 'cortis',
    name: 'Cortis',
    avatar: 'https://i.pravatar.cc/150?img=15',
    verified: true,
    description: '2.1M followers',
  },
  {
    id: 7,
    username: 'jennie',
    name: 'JENNIE',
    avatar: 'https://i.pravatar.cc/150?img=25',
    verified: true,
    description: 'Followed by roses_are_rosie + 8 more',
  },
  {
    id: 8,
    username: 'travel.daily',
    name: 'Travel Daily',
    avatar: 'https://i.pravatar.cc/150?img=32',
    description: '125K followers',
  },
];
