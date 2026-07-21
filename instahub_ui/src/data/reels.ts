export interface ReelComment {
  id: number;
  username: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  replies?: number;
}

export interface Reel {
  id: number;

  author: {
    username: string;
    avatar: string;
    verified?: boolean;
  };

  videoUrl: string;
  caption: string;
  audio?: string;
  likes: number;
  comments: ReelComment[];
}

const reels: Reel[] = [
  {
    id: 1,
    author: {
      username: "_ngocnt_",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    caption: "A perfect sunset 🌅",
    audio: "Original audio",
    likes: 1056,
    comments: [
      {
        id: 1,
        username: "haeun.luv",
        avatar: "https://i.pravatar.cc/100?img=44",
        content: "thịt đó thịt phần nào vậy chị",
        createdAt: "1w",
        likes: 3,
        replies: 1,
      },
      {
        id: 2,
        username: "tbh.264",
        avatar: "https://i.pravatar.cc/100?img=47",
        content: "Sốt đó vào thịt là sốt gì vậy ạ",
        createdAt: "1w",
        likes: 1,
        replies: 1,
      },
      {
        id: 3,
        username: "z.6es_",
        avatar: "https://i.pravatar.cc/100?img=13",
        content: "khỏi sữa được không ạ",
        createdAt: "1w",
        likes: 0,
        replies: 1,
      },
      {
        id: 4,
        username: "le_trung_tin_",
        avatar: "https://i.pravatar.cc/100?img=11",
        content: "Ok",
        createdAt: "1w",
        likes: 0,
      },
    ],
  },
  {
    id: 2,
    author: {
      username: "linhchi.daily",
      avatar: "https://i.pravatar.cc/150?img=32",
      verified: true,
    },
    videoUrl: "https://www.w3schools.com/tags/mov_bbb.mp4",
    caption: "Weekend vibes 🤍",
    audio: "Linh Chi · Original audio",
    likes: 24800,
    comments: [
      {
        id: 1,
        username: "haeun.luv",
        avatar: "https://i.pravatar.cc/100?img=44",
        content: "thịt đó thịt phần nào vậy chị",
        createdAt: "1w",
        likes: 3,
        replies: 1,
      },
      {
        id: 2,
        username: "tbh.264",
        avatar: "https://i.pravatar.cc/100?img=47",
        content: "Sốt đó vào thịt là sốt gì vậy ạ",
        createdAt: "1w",
        likes: 1,
        replies: 1,
      },
      {
        id: 3,
        username: "z.6es_",
        avatar: "https://i.pravatar.cc/100?img=13",
        content: "khỏi sữa được không ạ",
        createdAt: "1w",
        likes: 0,
        replies: 1,
      },
      {
        id: 4,
        username: "le_trung_tin_",
        avatar: "https://i.pravatar.cc/100?img=11",
        content: "Ok",
        createdAt: "1w",
        likes: 0,
      },
    ],
  },
  {
    id: 3,
    author: {
      username: "travelwithme",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    caption: "Travel memories 🌊",
    audio: "Summer vibes",
    likes: 93800,
    comments: [
      {
        id: 1,
        username: "haeun.luv",
        avatar: "https://i.pravatar.cc/100?img=44",
        content: "thịt đó thịt phần nào vậy chị",
        createdAt: "1w",
        likes: 3,
        replies: 1,
      },
      {
        id: 2,
        username: "tbh.264",
        avatar: "https://i.pravatar.cc/100?img=47",
        content: "Sốt đó vào thịt là sốt gì vậy ạ",
        createdAt: "1w",
        likes: 1,
        replies: 1,
      },
      {
        id: 3,
        username: "z.6es_",
        avatar: "https://i.pravatar.cc/100?img=13",
        content: "khỏi sữa được không ạ",
        createdAt: "1w",
        likes: 0,
        replies: 1,
      },
      {
        id: 4,
        username: "le_trung_tin_",
        avatar: "https://i.pravatar.cc/100?img=11",
        content: "Ok",
        createdAt: "1w",
        likes: 0,
      },
    ],
  },
  {
    id: 4,
    author: {
      username: "coffee.time",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    caption: "Morning coffee ☕",
    audio: "Coffee House",
    likes: 125000,
    comments: [
      {
        id: 1,
        username: "minhthu",
        avatar: "https://i.pravatar.cc/100?img=25",
        content: "Nhìn ngon quá",
        createdAt: "2d",
        likes: 12,
        replies: 2,
      },
    ],
  },
  {
    id: 5,
    author: {
      username: "street.life",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    caption: "City lights ✨",
    audio: "Original audio",
    likes: 65200,
    comments: [
      {
        id: 1,
        username: "minhthu",
        avatar: "https://i.pravatar.cc/100?img=25",
        content: "Nhìn ngon quá",
        createdAt: "2d",
        likes: 12,
        replies: 2,
      },
    ],
  },
];

export default reels;