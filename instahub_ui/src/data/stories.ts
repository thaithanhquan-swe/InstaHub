import { images } from "@/assets/images";
import { StaticImageData } from "next/image";

export interface StoryMedia {
  id: number;
  type: "image" | "video";
  url: StaticImageData | string;
  duration?: number;
}

export interface Story {
  id: number;
  username: string;
  avatar: StaticImageData | string;
  verified?: boolean;
  seen?: boolean;
  time: string;
  media: StoryMedia[];
}

const stories: Story[] = [
  {
    id: 1,
    username: "_quanthai._",
    avatar: images.loginPreview,
    time: "5m",
    verified: false,
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: images.loginPreview,
      },
       {
        id: 2,
        type: "image",
        url: images.loginPreview,
      },
        {
        id: 3,
        type: "video",
        url: "https://www.w3schools.com/html/movie.mp4",
      },
    ],
  },
  {
    id: 2,
    username: "nguyenvana",
    avatar: images.loginPreview,
    time: "12m",
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1200",
      },
      {
        id: 2,
        type: "image",
        url: images.loginPreview,
      },
    ],
  },
  {
    id: 3,
    username: "thaidev",
    avatar: images.loginPreview,
    time: "25m",
    verified: true,
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      },
    ],
  },
  {
    id: 4,
    username: "socialgram",
    avatar: images.loginPreview,
    time: "38m",
    verified: true,
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
      },
    ],
  },
  {
    id: 5,
    username: "frontend.dev",
    avatar: images.loginPreview,
    time: "45m",
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      },
    ],
  },
  {
    id: 6,
    username: "spring.boot",
    avatar: images.loginPreview,
    time: "58m",
    verified: true,
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
      },
    ],
  },
  {
    id: 7,
    username: "nextjs.dev",
    avatar: images.loginPreview,
    time: "1h",
    verified: true,
    seen: false,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200",
      },
    ],
  },
  {
    id: 8,
    username: "react.dev",
    avatar: images.loginPreview,
    time: "1h",
    verified: true,
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
      },
    ],
  },
  {
    id: 9,
    username: "java.dev",
    avatar: images.loginPreview,
    time: "2h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200",
      },
    ],
  },
  {
    id: 10,
    username: "node.master",
    avatar: images.loginPreview,
    time: "2h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
      },
    ],
  },
  {
    id: 11,
    username: "typescript",
    avatar: images.loginPreview,
    time: "3h",
    verified: true,
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200",
      },
    ],
  },
  {
    id: 12,
    username: "tailwindcss",
    avatar: images.loginPreview,
    time: "3h",
    verified: true,
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",
      },
    ],
  },
  {
    id: 13,
    username: "shadcn.ui",
    avatar: images.loginPreview,
    time: "4h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
      },
    ],
  },
  {
    id: 14,
    username: "lucide.icons",
    avatar: images.loginPreview,
    time: "4h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
      },
    ],
  },
  {
    id: 15,
    username: "zustand.dev",
    avatar: images.loginPreview,
    time: "5h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?q=80&w=1200",
      },
    ],
  },
  {
    id: 16,
    username: "dockerhub",
    avatar: images.loginPreview,
    time: "5h",
    verified: true,
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200",
      },
    ],
  },
  {
    id: 17,
    username: "springcloud",
    avatar: images.loginPreview,
    time: "6h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      },
    ],
  },
  {
    id: 18,
    username: "microservice",
    avatar: images.loginPreview,
    time: "7h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
      },
    ],
  },
  {
    id: 19,
    username: "mongodb.dev",
    avatar: images.loginPreview,
    time: "8h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200",
      },
    ],
  },
  {
    id: 20,
    username: "postgresql",
    avatar: images.loginPreview,
    time: "9h",
    verified: true,
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200",
      },
    ],
  },
  {
    id: 21,
    username: "redis.cache",
    avatar: images.loginPreview,
    time: "10h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
      },
    ],
  },
  {
    id: 22,
    username: "kafka.event",
    avatar: images.loginPreview,
    time: "12h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      },
    ],
  },
  {
    id: 23,
    username: "thaidev.id",
    avatar: images.loginPreview,
    time: "14h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      },
    ],
  },
  {
    id: 24,
    username: "social.app",
    avatar: images.loginPreview,
    time: "18h",
    seen: true,
    media: [
      {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
      },
    ],
  },
];

export default stories;