import { searchUsers } from '@/data/search-users.data';
import { profileData } from '@/data/settings';
import { suggestedUsers } from '@/data/suggestion.data';
import { createProfileSlug } from '@/lib/createProfileSlug';

export function getProfileSlug(username: string) {
  if (profileData.username.toLowerCase() === username.toLowerCase()) {
    return profileData.slug;
  }

  const suggestedUser = suggestedUsers.find(
    (user) => user.username.toLowerCase() === username.toLowerCase(),
  );
  if (suggestedUser) return suggestedUser.slug;

  const searchUser = searchUsers.find(
    (user) => user.username.toLowerCase() === username.toLowerCase(),
  );
  if (searchUser) return searchUser.slug;

  return createProfileSlug(username);
}
