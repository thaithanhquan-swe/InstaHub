import Image from "next/image";
import { BadgeCheck, Dot, MoreHorizontal } from "lucide-react";
import { PostAuthor } from "@/types/post.types";

interface PostHeaderProps {
  author: PostAuthor;
  createdAt: string;
}

function PostHeader({ author, createdAt }: PostHeaderProps) {
  return (
    <header className="flex items-center justify-between px-2 pb-3">
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-(image:--ig-gradient-close-friends) p-0.5">
          <div className="rounded-full bg-black p-0.5">
            <Image
              src={author.avatar}
              alt={`${author.username} avatar`}
              width={34}
              height={34}
              className="size-8 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center text-sm">
          <span className="pr-0.5 font-semibold">{author.username}</span>

          {author.verified && (
            <BadgeCheck size={14} fill="var(--text-primary)" color="white" />
          )}
          <Dot color="var(--text-secondary)" size={14} />
          <span className="text-(--text-secondary)">{createdAt}</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="More options"
        className="cursor-pointer rounded-full p-2 transition hover:bg-(--hover-color)"
      >
        <MoreHorizontal size={22} />
      </button>
    </header>
  );
}

export default PostHeader;
