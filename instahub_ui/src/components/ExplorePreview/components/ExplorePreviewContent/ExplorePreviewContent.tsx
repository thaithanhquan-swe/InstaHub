import { SuggestedUser } from '@/data/suggestion.data';
import { Camera, Lock } from 'lucide-react';
import Image from 'next/image';

interface ExplorePreviewContentProps {
  user: SuggestedUser;
}

function ExplorePreviewContent({ user }: ExplorePreviewContentProps) {
  if (user.isPrivate) {
    return <PrivateAccount />;
  }

  if (user.previewImages?.length) {
    return (
      <PreviewGrid
        userId={user.id}
        username={user.username}
        images={user.previewImages}
      />
    );
  }

  return <EmptyPosts username={user.username} />;
}

interface PreviewGridProps {
  userId: number;
  username: string;
  images: SuggestedUser['previewImages'];
}

function PreviewGrid({ userId, username, images }: PreviewGridProps) {
  if (!images) {
    return null;
  }

  return (
    <div className="grid grid-cols-3">
      {images.slice(0, 3).map((image, index) => (
        <div
          key={`${userId}-${index}`}
          className="relative aspect-square overflow-hidden bg-neutral-800"
        >
          <Image
            src={image}
            alt={`${username} preview ${index + 1}`}
            fill
            sizes="123px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function PrivateAccount() {
  return (
    <div className="flex flex-col items-center justify-center p-5 text-center">
      <div className="flex size-14 items-center justify-center rounded-full border border-neutral-500">
        <Lock size={30} className="text-white" />
      </div>

      <h3 className="mt-2 text-sm font-semibold text-white">
        This account is private
      </h3>

      <p className="mt-1 text-sm text-neutral-300">
        Follow this account to see their photos and videos.
      </p>
    </div>
  );
}

interface EmptyPostsProps {
  username: string;
}

function EmptyPosts({ username }: EmptyPostsProps) {
  return (
    <div className="flex flex-col items-center justify-center border-y border-neutral-800 px-4 py-5 text-center">
      <div className="flex size-14 items-center justify-center rounded-full border border-neutral-500">
        <Camera size={30} className="text-white" />
      </div>

      <h3 className="mt-2 text-sm font-semibold text-white">No posts yet</h3>

      <p className="mt-0.5 max-w-80 text-sm leading-4.5 text-neutral-300">
        When <span className="text-white">{username}</span> shares photos and
        reels, you&apos;ll see them here.
      </p>
    </div>
  );
}

export default ExplorePreviewContent;
