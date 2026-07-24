import ProfilePageClient from './components/ProfilePageClient/ProfilePageClient';
import { getUserProfile } from '@/data/profiles';

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getUserProfile(slug);

  return <ProfilePageClient profile={profile} />;
}
