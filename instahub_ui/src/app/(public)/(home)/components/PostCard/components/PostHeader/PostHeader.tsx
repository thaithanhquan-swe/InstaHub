import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Dot } from 'lucide-react';
import { PostAuthor } from '@/types/post.types';
import { getProfileSlug } from '@/lib/getProfileSlug';
import PostMenu from './components/PostMenu/PostMenu';

interface PostHeaderProps {
  author: PostAuthor;
  createdAt: string;
}

function PostHeader({ author, createdAt }: PostHeaderProps) {
  return (
    <header className="flex items-center justify-between px-2 pb-3">
      <div className="flex items-center gap-2">
        <Link
          href={`/${getProfileSlug(author.username)}`}
          aria-label={`View ${author.username}'s profile`}
          className="rounded-full bg-(image:--ig-gradient-close-friends) p-0.5"
        >
          <div className="rounded-full bg-black p-0.5">
            <Image
              src={author.avatar}
              alt={`${author.username} avatar`}
              width={34}
              height={34}
              className="size-8 rounded-full object-cover"
            />
          </div>
        </Link>

        <div className="flex items-center text-sm">
          <Link
            href={`/${getProfileSlug(author.username)}`}
            className="pr-0.5 font-semibold hover:opacity-70"
          >
            {author.username}
          </Link>

          {author.verified && (
            <BadgeCheck size={14} fill="var(--text-primary)" color="white" />
          )}
          <Dot color="var(--text-secondary)" size={14} />
          <span className="text-(--text-secondary)">{createdAt}</span>
        </div>
      </div>

      <PostMenu />
    </header>
  );
}

export default PostHeader;
