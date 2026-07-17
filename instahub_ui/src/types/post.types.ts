import { StaticImageData } from "next/image";

export type PostType = "image" | "carousel" | "reel";
export type PostMediaType = "image" | "video";

export interface PostMedia {
  type: PostMediaType;
  url: StaticImageData | string;
}

export interface PostAuthor {
  username: string;
  avatar: StaticImageData | string;
  verified: boolean;
}

export interface PostComment {
  id: number;
  username: string;
  avatar: StaticImageData | string;
  content: string;
  createdAt: string;
  likes?: number;
  replies?: number;
}

export interface Post {
  id: number;
  type?: PostType;
  author: PostAuthor;
  createdAt: string;

  media: PostMedia[];

  likes: number;
  comments: number;
  caption: string;
  commentList: PostComment[];
}
