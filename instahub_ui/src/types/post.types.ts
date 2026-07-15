import type { StaticImageData } from "next/image";

export interface PostAuthor {
  username: string;
  avatar: StaticImageData | string;
  verified?: boolean;
}

export interface Post {
  id: number;
  author: PostAuthor;
  createdAt: string;
  images: Array<StaticImageData | string>;
  likes: string;
  comments: string;
  caption: string;
  location?: string;
}
