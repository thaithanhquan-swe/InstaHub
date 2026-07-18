import { images } from "@/assets/images";
import { StaticImageData } from "next/image";

type ImageSource = StaticImageData | string;

export interface SuggestedUser {
  id: number;
  username: string;
  nickname: string;
  avatar: ImageSource;
  verified?: boolean;
  isPrivate?: boolean;

  stats: {
    posts: number;
    followers: number;
    following: number;
  };

  previewImages?: ImageSource[];

  followedBy?: {
    usernames: string;
    avatars: ImageSource[];
  };
}

export const suggestedUsers: SuggestedUser[] = [
  {
    id: 1,
    username: "bt_thuytrangg",
    nickname: "BT Thùy Trangg",
    avatar: images.loginPreview,
    isPrivate: true,
    stats: {
      posts: 7,
      followers: 132,
      following: 166,
    },
  },
  {
    id: 2,
    username: "marzuz",
    nickname: "Marzuz",
    avatar: images.loginPreview,
    verified: true,
    stats: {
      posts: 12,
      followers: 2450,
      following: 321,
    },
    followedBy: {
      usernames: "datlee.th",
      avatars: [images.loginPreview],
    },
  },
  {
    id: 3,
    username: "kimngann",
    nickname: "Kim Ngân",
    avatar: images.loginPreview,
    stats: {
      posts: 24,
      followers: 4890,
      following: 405,
    },
    previewImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    ],
    followedBy: {
      usernames: "hnb_huong + 1 more",
      avatars: [images.loginPreview, images.loginPreview],
    },
  },
  {
    id: 4,
    username: "nhomnhom",
    nickname: "Nhomnhom",
    avatar: images.loginPreview,
    stats: {
      posts: 15,
      followers: 768,
      following: 214,
    },
    previewImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    ],
  },
  {
    id: 5,
    username: "roses_are_rosie",
    nickname: "ROSÉ",
    avatar: images.loginPreview,
    verified: true,
    isPrivate: true,
    stats: {
      posts: 1060,
      followers: 83200000,
      following: 0,
    },
    followedBy: {
      usernames: "hhl.mthu_04 + 6 more",
      avatars: [images.loginPreview, images.loginPreview],
    },
  },
  {
    id: 6,
    username: "bt_thuytrangg_2",
    nickname: "BT Thùy Trangg",
    avatar: images.loginPreview,
    stats: {
      posts: 18,
      followers: 412,
      following: 198,
    },
    previewImages: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    ],
  },
  {
    id: 7,
    username: "marzuz_2",
    nickname: "Marzuz",
    avatar: images.loginPreview,
    verified: true,
    stats: {
      posts: 31,
      followers: 7210,
      following: 521,
    },
    previewImages: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    ],
    followedBy: {
      usernames: "datlee.th",
      avatars: [images.loginPreview],
    },
  },
  {
    id: 8,
    username: "kimngann_2",
    nickname: "Kim Ngân",
    avatar: images.loginPreview,
    isPrivate: true,
    stats: {
      posts: 9,
      followers: 856,
      following: 302,
    },
    followedBy: {
      usernames: "hnb_huong + 1 more",
      avatars: [images.loginPreview, images.loginPreview],
    },
  },
  {
    id: 9,
    username: "nhomnhom_2",
    nickname: "Nhomnhom",
    avatar: images.loginPreview,
    stats: {
      posts: 42,
      followers: 3650,
      following: 678,
    },
    previewImages: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    ],
  },
  {
    id: 10,
    username: "roses_are_rosie_2",
    nickname: "ROSÉ",
    avatar: images.loginPreview,
    verified: true,
    stats: {
      posts: 1060,
      followers: 83200000,
      following: 0,
    },
    previewImages: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
    ],
    followedBy: {
      usernames: "hhl.mthu_04 + 6 more",
      avatars: [images.loginPreview, images.loginPreview],
    },
  },
];