import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

interface CurrentUserCardProps {
  slug: string;
  username: string;
  fullName: string;
  avatar: StaticImageData | string;
}

function CurrentUserCard({
  slug,
  username,
  fullName,
  avatar,
}: CurrentUserCardProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <Link href={`/${slug}`} className="flex min-w-0 items-center gap-3">
        <Image
          src={avatar}
          alt={`${username} avatar`}
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-(--text-white)">
            {username}
          </p>

          <p className="truncate text-sm text-[#a8a8a8]">{fullName}</p>
        </div>
      </Link>
    </div>
  );
}

export default CurrentUserCard;
