import type { UserProfile } from '@/data/profiles';

import ProfileContent from '../ProfileContent/ProfileContent';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileHighlights from '../ProfileHighlights/ProfileHighlights';

interface ProfilePageClientProps {
  profile: UserProfile;
}

export default function ProfilePageClient({ profile }: ProfilePageClientProps) {
  return (
    <main className='min-h-screen text-(--text-white)'>
      <div className='mx-auto w-full max-w-233 pt-8 '>
        <ProfileHeader profile={profile} />
        <ProfileHighlights profile={profile} />
      </div>
      <ProfileContent profile={profile} />
    </main>
  );
}
