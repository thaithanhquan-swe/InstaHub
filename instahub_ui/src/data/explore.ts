import { images } from '@/assets/images';
import { Post } from '@/types/post.types';

const explorePosts: Post[] = [
  {
    id: 1,
    type: 'carousel',
    author: {
      username: 'cortis',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '6h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      },
    ],
    likes: 871400,
    comments: 8400,
    caption: '짧은 한 입 🍜',
    commentList: [
      {
        id: 1,
        username: 'jennie',
        avatar: images.loginPreview,
        content: 'Love this 😍',
        createdAt: '2h',
        likes: 842,
        replies: 12,
      },
      {
        id: 2,
        username: 'minho',
        avatar: images.loginPreview,
        content: 'Amazing shot 🔥',
        createdAt: '1h',
        likes: 352,
        replies: 6,
      },
      {
        id: 3,
        username: 'hailey',
        avatar: images.loginPreview,
        content: 'Where is this place?',
        createdAt: '58m',
        likes: 127,
        replies: 3,
      },
    ],
  },

  {
    id: 2,
    type: 'reel',
    author: {
      username: 'jennie',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '2h',
    media: [
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
    ],
    likes: 2100000,
    comments: 19700,
    caption: 'Summer 🌊',
    commentList: [
      {
        id: 1,
        username: 'jennie',
        avatar: images.loginPreview,
        content: 'Love this 😍',
        createdAt: '2h',
        likes: 842,
        replies: 12,
      },
      {
        id: 2,
        username: 'minho',
        avatar: images.loginPreview,
        content: 'Amazing shot 🔥',
        createdAt: '1h',
        likes: 352,
        replies: 6,
      },
      {
        id: 3,
        username: 'hailey',
        avatar: images.loginPreview,
        content: 'Where is this place?',
        createdAt: '58m',
        likes: 127,
        replies: 3,
      },
    ],
  },

  {
    id: 3,
    type: 'image',
    author: {
      username: 'travel.daily',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '5h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    ],
    likes: 97500,
    comments: 1100,
    caption: 'Golden hour 🌅',
    commentList: [],
  },

  {
    id: 4,
    type: 'carousel',
    author: {
      username: 'hyunjin',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '1d',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      },
    ],
    likes: 524000,
    comments: 5600,
    caption: '📸',
    commentList: [],
  },

  {
    id: 5,
    type: 'image',
    author: {
      username: 'daily.coffee',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '9h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      },
    ],
    likes: 32800,
    comments: 823,
    caption: 'Morning coffee ☕',
    commentList: [],
  },

  {
    id: 6,
    type: 'reel',
    author: {
      username: 'football.edit',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '4h',
    media: [
      {
        type: 'video',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    likes: 618000,
    comments: 6900,
    caption: 'Best moments ⚽',
    commentList: [],
  },

  {
    id: 7,
    type: 'carousel',
    author: {
      username: 'nature',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '3d',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453',
      },
    ],
    likes: 211000,
    comments: 2400,
    caption: 'Into the wild 🌿',
    commentList: [],
  },

  {
    id: 8,
    type: 'image',
    author: {
      username: 'street.snap',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '12h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
      },
    ],
    likes: 76200,
    comments: 981,
    caption: 'City lights ✨',
    commentList: [],
  },

  {
    id: 9,
    type: 'reel',
    author: {
      username: 'gym.daily',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '7h',
    media: [
      {
        type: 'video',
        url: 'https://www.w3schools.com/html/movie.mp4',
      },
    ],
    likes: 439000,
    comments: 3800,
    caption: 'No excuses 💪',
    commentList: [],
  },

  {
    id: 10,
    type: 'carousel',
    author: {
      username: 'foodlover',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '18h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
      },
    ],
    likes: 1300000,
    comments: 14500,
    caption: 'Dinner time 🍣',
    commentList: [],
  },
  {
    id: 11,
    type: 'carousel',
    author: {
      username: 'cortis',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '6h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      },
    ],
    likes: 871400,
    comments: 8400,
    caption: '짧은 한 입 🍜',
    commentList: [],
  },

  {
    id: 12,
    type: 'reel',
    author: {
      username: 'jennie',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '2h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
    ],
    likes: 2100000,
    comments: 19700,
    caption: 'Summer 🌊',
    commentList: [],
  },

  {
    id: 13,
    type: 'image',
    author: {
      username: 'travel.daily',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '5h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    ],
    likes: 97500,
    comments: 1100,
    caption: 'Golden hour 🌅',
    commentList: [],
  },

  {
    id: 14,
    type: 'carousel',
    author: {
      username: 'hyunjin',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '1d',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      },
    ],
    likes: 524000,
    comments: 5600,
    caption: '📸',
    commentList: [],
  },

  {
    id: 15,
    type: 'image',
    author: {
      username: 'daily.coffee',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '9h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      },
    ],
    likes: 32800,
    comments: 823,
    caption: 'Morning coffee ☕',
    commentList: [],
  },

  {
    id: 16,
    type: 'reel',
    author: {
      username: 'football.edit',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '4h',
    media: [
      {
        type: 'video',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      },
    ],
    likes: 618000,
    comments: 6900,
    caption: 'Best moments ⚽',
    commentList: [],
  },

  {
    id: 17,
    type: 'carousel',
    author: {
      username: 'nature',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '3d',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453',
      },
    ],
    likes: 211000,
    comments: 2400,
    caption: 'Into the wild 🌿',
    commentList: [],
  },

  {
    id: 18,
    type: 'image',
    author: {
      username: 'street.snap',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '12h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
      },
    ],
    likes: 76200,
    comments: 981,
    caption: 'City lights ✨',
    commentList: [],
  },

  {
    id: 19,
    type: 'reel',
    author: {
      username: 'gym.daily',
      avatar: images.loginPreview,
      verified: false,
    },
    createdAt: '7h',
    media: [
      {
        type: 'video',
        url: 'https://www.w3schools.com/html/movie.mp4',
      },
    ],
    likes: 439000,
    comments: 3800,
    caption: 'No excuses 💪',
    commentList: [],
  },

  {
    id: 20,
    type: 'carousel',
    author: {
      username: 'foodlover',
      avatar: images.loginPreview,
      verified: true,
    },
    createdAt: '18h',
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      },
      {
        type: 'video',
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      },
    ],
    likes: 1300000,
    comments: 14500,
    caption: 'Dinner time 🍣',
    commentList: [],
  },
];

export default explorePosts;
