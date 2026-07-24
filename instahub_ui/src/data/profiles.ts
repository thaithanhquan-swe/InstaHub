import type { StaticImageData } from 'next/image';

import explorePosts from '@/data/explore';
import { searchUsers } from '@/data/search-users.data';
import { profileData } from '@/data/settings';
import { suggestedUsers } from '@/data/suggestion.data';
import { createProfileSlug } from '@/lib/createProfileSlug';
import type { Post } from '@/types/post.types';

type ImageSource = StaticImageData | string;

export interface ProfileHighlight {
  id: number;
  title: string;
  image: ImageSource;
}

export interface UserProfile {
  slug: string;
  username: string;
  displayName: string;
  avatar: ImageSource;
  verified: boolean;
  isPrivate: boolean;
  isCurrentUser: boolean;
  bio: string[];
  website?: string;
  followedBy?: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  highlights: ProfileHighlight[];
  posts: Post[];
}

export const CURRENT_USER_USERNAME = profileData.username;
export const CURRENT_USER_SLUG = profileData.slug;

const galleryImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
  'https://images.unsplash.com/photo-1519501025264-65ba15a82390',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
];

const highlightTitles = ['Daily', 'Travel', 'Friends', 'Favorites'];

function getHash(value: string) {
  return Array.from(value).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );
}

function makePosts(
  username: string,
  avatar: ImageSource,
  verified: boolean,
  images: ImageSource[] = galleryImages,
): Post[] {
  const start = getHash(username) % images.length;
  const rotatedImages = [...images.slice(start), ...images.slice(0, start)];

  return rotatedImages.slice(0, 9).map((url, index) => ({
    id: getHash(username) * 100 + index,
    type: index === 2 || index === 7 ? 'carousel' : 'image',
    author: { username, avatar, verified },
    createdAt: `${index + 1}d`,
    media: [{ type: 'image', url }],
    likes: 640 + ((getHash(username) * (index + 3)) % 18500),
    comments: 18 + ((getHash(username) * (index + 1)) % 730),
    caption: index === 0 ? 'A little piece of my day ✨' : '',
    commentList: [],
  }));
}

function getHighlights(username: string): ProfileHighlight[] {
  const start = getHash(username) % galleryImages.length;

  return highlightTitles.map((title, index) => ({
    id: index + 1,
    title,
    image: galleryImages[(start + index) % galleryImages.length],
  }));
}

function findAuthoredPosts(username: string) {
  return explorePosts.filter(
    (post) => post.author.username.toLowerCase() === username.toLowerCase(),
  );
}

function parseFollowerDescription(description: string) {
  const matchedValue = description.match(/([\d.]+)\s*([KM])?\s*followers/i);
  if (!matchedValue) return undefined;

  const amount = Number(matchedValue[1]);
  const multiplier =
    matchedValue[2]?.toUpperCase() === 'M'
      ? 1_000_000
      : matchedValue[2]?.toUpperCase() === 'K'
        ? 1_000
        : 1;

  return Math.round(amount * multiplier);
}

function createCurrentUserProfile(): UserProfile {
  const posts = makePosts(
    CURRENT_USER_USERNAME,
    profileData.image,
    false,
  );

  return {
    slug: CURRENT_USER_SLUG,
    username: CURRENT_USER_USERNAME,
    displayName: profileData.displayName,
    avatar: profileData.image,
    verified: false,
    isPrivate: false,
    isCurrentUser: true,
    bio: [
      'Creating, connecting, and sharing moments.',
      'Based in Ho Chi Minh City 🇻🇳',
    ],
    website: 'instahub.social',
    stats: {
      posts: 18,
      followers: 1286,
      following: 348,
    },
    highlights: getHighlights(CURRENT_USER_USERNAME),
    posts,
  };
}

export function getUserProfile(profileSlug: string): UserProfile {
  const slug = createProfileSlug(decodeURIComponent(profileSlug));

  if (slug === CURRENT_USER_SLUG) {
    return createCurrentUserProfile();
  }

  const suggestedUser = suggestedUsers.find(
    (user) => user.slug === slug,
  );

  if (suggestedUser) {
    const authoredPosts = findAuthoredPosts(suggestedUser.username);
    const posts =
      authoredPosts.length > 0
        ? authoredPosts
        : makePosts(
            suggestedUser.username,
            suggestedUser.avatar,
            Boolean(suggestedUser.verified),
            suggestedUser.previewImages?.length
              ? suggestedUser.previewImages
              : galleryImages,
          );

    return {
      slug: suggestedUser.slug,
      username: suggestedUser.username,
      displayName: suggestedUser.nickname,
      avatar: suggestedUser.avatar,
      verified: Boolean(suggestedUser.verified),
      isPrivate: Boolean(suggestedUser.isPrivate),
      isCurrentUser: false,
      bio: ['Sharing the moments that make life memorable.'],
      followedBy: suggestedUser.followedBy?.usernames,
      stats: suggestedUser.stats,
      highlights: getHighlights(suggestedUser.username),
      posts,
    };
  }

  const searchUser = searchUsers.find(
    (user) => user.slug === slug,
  );

  if (searchUser) {
    const authoredPosts = findAuthoredPosts(searchUser.username);
    const posts =
      authoredPosts.length > 0
        ? authoredPosts
        : makePosts(
            searchUser.username,
            searchUser.avatar,
            Boolean(searchUser.verified),
          );

    return {
      slug: searchUser.slug,
      username: searchUser.username,
      displayName: searchUser.name,
      avatar: searchUser.avatar,
      verified: Boolean(searchUser.verified),
      isPrivate: false,
      isCurrentUser: false,
      bio: ['Digital creator', 'Photos, stories, and everyday inspiration.'],
      followedBy: searchUser.description.startsWith('Followed by')
        ? searchUser.description.replace('Followed by ', '')
        : undefined,
      stats: {
        posts: posts.length,
        followers:
          parseFollowerDescription(searchUser.description) ??
          1200 + getHash(searchUser.username) * 7,
        following: 120 + (getHash(searchUser.username) % 540),
      },
      highlights: getHighlights(searchUser.username),
      posts,
    };
  }

  const matchedAuthor = explorePosts.find(
    (post) => createProfileSlug(post.author.username) === slug,
  )?.author;
  const username = matchedAuthor?.username ?? slug;
  const authoredPosts = findAuthoredPosts(username);
  const firstPost = authoredPosts[0];
  const avatar =
    firstPost?.author.avatar ?? `https://i.pravatar.cc/300?u=${username}`;
  const verified = Boolean(firstPost?.author.verified);
  const posts =
    authoredPosts.length > 0
      ? authoredPosts
      : makePosts(username, avatar, verified);

  return {
    slug,
    username,
    displayName: username
      .split(/[._-]/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' '),
    avatar,
    verified,
    isPrivate: false,
    isCurrentUser: false,
    bio: ['Welcome to my InstaHub profile.'],
    stats: {
      posts: posts.length,
      followers: 860 + getHash(username) * 3,
      following: 95 + (getHash(username) % 420),
    },
    highlights: getHighlights(username),
    posts,
  };
}
