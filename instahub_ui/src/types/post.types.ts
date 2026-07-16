import { StaticImageData } from "next/image";

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
  likes?: string;
  replies?: number;
}

export interface Post {
  id: number;
  author: PostAuthor;
  createdAt: string;
  images: Array<StaticImageData | string>;
  likes: string;
  comments: string;
  caption: string;
  commentList: PostComment[];
}
