interface Notification {
  id: number;
  user: string;
  avatar: string;
  message: string;
  time: string;
  followedBy?: string;
  action?: 'follow' | 'following';
  thumbnail?: string;
}

const notificationGroups: { title: string; items: Notification[] }[] = [
  {
    title: 'Today',
    items: [
      {
        id: 1,
        user: 'linh.nguyen',
        avatar: 'https://i.pravatar.cc/120?img=47',
        message: 'liked your photo.',
        time: '2m',
        thumbnail:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80'
      },
      {
        id: 2,
        user: 'minhthu',
        avatar: 'https://i.pravatar.cc/120?img=32',
        message: 'started following you.',
        time: '18m',
        followedBy: 'Followed by quang.huy + 3 more',
        action: 'follow'
      },
      {
        id: 3,
        user: 'viet.tran',
        avatar: 'https://i.pravatar.cc/120?img=12',
        message: 'mentioned you in a comment: Nice shot!',
        time: '1h',
        thumbnail:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=120&q=80'
      },
      {
        id: 8,
        user: 'thao.my',
        avatar: 'https://i.pravatar.cc/120?img=49',
        message: 'commented on your post: So beautiful!',
        time: '2h',
        thumbnail:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=120&q=80'
      },
      {
        id: 9,
        user: 'duc.anh',
        avatar: 'https://i.pravatar.cc/120?img=13',
        message: 'started following you.',
        time: '3h',
        followedBy: 'Followed by viet.tran + 2 more',
        action: 'follow'
      },
      {
        id: 10,
        user: 'ngoc.han',
        avatar: 'https://i.pravatar.cc/120?img=45',
        message: 'liked your story.',
        time: '5h'
      },
      {
        id: 11,
        user: 'quang.huy',
        avatar: 'https://i.pravatar.cc/120?img=8',
        message: 'shared your post.',
        time: '8h',
        thumbnail:
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=120&q=80'
      }
    ]
  },
  {
    title: 'Yesterday',
    items: [
      {
        id: 4,
        user: 'an.pham',
        avatar: 'https://i.pravatar.cc/120?img=25',
        message: 'started following you.',
        time: '1d',
        action: 'following'
      },
      {
        id: 5,
        user: 'hoangnam',
        avatar: 'https://i.pravatar.cc/120?img=11',
        message: 'and 24 others liked your reel.',
        time: '1d',
        thumbnail:
          'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=120&q=80'
      },
      {
        id: 12,
        user: 'bao.ngoc',
        avatar: 'https://i.pravatar.cc/120?img=36',
        message: 'mentioned you in a story.',
        time: '1d'
      },
      {
        id: 13,
        user: 'khanh.ly',
        avatar: 'https://i.pravatar.cc/120?img=41',
        message: 'started following you.',
        time: '1d',
        followedBy: 'Followed by linh.nguyen',
        action: 'following'
      },
      {
        id: 14,
        user: 'nhat.minh',
        avatar: 'https://i.pravatar.cc/120?img=5',
        message: 'liked your photo.',
        time: '1d',
        thumbnail:
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=120&q=80'
      }
    ]
  },
  {
    title: 'This week',
    items: [
      {
        id: 6,
        user: 'mai.chi',
        avatar: 'https://i.pravatar.cc/120?img=44',
        message: 'liked your comment: Amazing place!',
        time: '3d'
      },
      {
        id: 7,
        user: 'tuanle',
        avatar: 'https://i.pravatar.cc/120?img=15',
        message: 'started following you.',
        time: '5d',
        followedBy: 'Followed by mai.chi',
        action: 'follow'
      },
      {
        id: 15,
        user: 'yen.nhi',
        avatar: 'https://i.pravatar.cc/120?img=48',
        message: 'and 12 others liked your post.',
        time: '4d',
        thumbnail:
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=120&q=80'
      },
      {
        id: 16,
        user: 'phuc.long',
        avatar: 'https://i.pravatar.cc/120?img=3',
        message: 'replied to your comment: Thank you!',
        time: '5d'
      },
      {
        id: 17,
        user: 'ha.vy',
        avatar: 'https://i.pravatar.cc/120?img=43',
        message: 'started following you.',
        time: '6d',
        followedBy: 'Followed by thao.my + 4 more',
        action: 'follow'
      },
      {
        id: 18,
        user: 'trung.kien',
        avatar: 'https://i.pravatar.cc/120?img=7',
        message: 'liked your reel.',
        time: '6d',
        thumbnail:
          'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=120&q=80'
      }
    ]
  },
  {
    title: 'Earlier',
    items: [
      {
        id: 19,
        user: 'thu.ha',
        avatar: 'https://i.pravatar.cc/120?img=46',
        message: 'started following you.',
        time: '2w',
        action: 'following'
      },
      {
        id: 20,
        user: 'gia.bao',
        avatar: 'https://i.pravatar.cc/120?img=6',
        message: 'commented on your reel: Great video!',
        time: '2w',
        thumbnail:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=120&q=80'
      },
      {
        id: 21,
        user: 'tram.nguyen',
        avatar: 'https://i.pravatar.cc/120?img=38',
        message: 'liked your comment.',
        time: '3w'
      }
    ]
  }
];

export default notificationGroups;
