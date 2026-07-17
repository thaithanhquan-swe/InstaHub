import { images } from "@/assets/images";
import { StaticImageData } from "next/image";

export interface SuggestedUser {
  id: number;
  username: string;
  avatar: StaticImageData | string;
  verified?: boolean;
  suggestedText?: string;
  followedBy?: {
    usernames: string;
    avatars: StaticImageData[] | string[];
  };
}

export const suggestedUsers: SuggestedUser[] = [
  {
    id: 1,
    username: "BT Thùy Trangg",
    avatar: images.loginPreview,
    suggestedText: "Suggested for you",
  },
  {
    id: 2,
    username: "marzuz",
    avatar: images.loginPreview,
    verified: true,
    followedBy: {
      usernames: "datlee.th",
      avatars: [images.loginPreview],
    },
  },
  {
    id: 3,
    username: "Kim Ngân",
    avatar: images.loginPreview,
    followedBy: {
      usernames: "hnb_huong + 1 more",
      avatars: [images.loginPreview, images.loginPreview],
    },
  },
  {
    id: 4,
    username: "Nhomnhom",
    avatar: images.loginPreview,
    suggestedText: "Suggested for you",
  },
  {
    id: 5,
    username: "ROSÉ",
    avatar: images.loginPreview,
    verified: true,
    followedBy: {
      usernames: "hhl.mthu_04 + 6 more",
      avatars: [images.loginPreview, images.loginPreview],
    },
  },
];
