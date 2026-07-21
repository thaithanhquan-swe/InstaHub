'use client';

import { BadgeCheck, ChevronLeft, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import { searchUsers } from '@/data/search-users.data';

function ExploreSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredUsers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!normalizedQuery) return searchUsers;

    return searchUsers.filter((user) =>
      `${user.username} ${user.name}`
        .toLocaleLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    if (!isSearching) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearching(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearching]);

  const closeSearch = () => {
    setIsSearching(false);
    setQuery('');
  };

  if (!isSearching) {
    return (
      <div className="mx-auto w-full max-w-164">
        <button
          type="button"
          onClick={() => setIsSearching(true)}
          className="flex h-10 w-full cursor-text items-center gap-3 rounded-full bg-[#26292d] px-4 text-left"
        >
          <Search
            size={17}
            strokeWidth={2}
            className="shrink-0 text-(--text-secondary)"
          />
          <span className="text-sm text-(--text-secondary)">Search</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-(--background-color) text-white">
      <div className="mx-auto w-full max-w-164 px-4 pt-6 pb-10 sm:px-0">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={closeSearch}
            aria-label="Close search"
            className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <ChevronLeft size={30} strokeWidth={1.8} />
          </button>

          <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full bg-[#26292d] px-4">
            <Search
              size={17}
              strokeWidth={2}
              className="shrink-0 text-[#9ca3af]"
            />
            <input
              ref={inputRef}
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              aria-label="Search accounts"
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#9ca3af]"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="flex size-4 cursor-pointer items-center justify-center rounded-full bg-[#b4b8bd] text-[#30343a]"
              >
                <X size={11} strokeWidth={3} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-9 pl-14">
          {filteredUsers.length ? (
            <div className="space-y-1">
              {filteredUsers.map((user) => (
                <Link
                  key={user.id}
                  href={`/${user.username}`}
                  onClick={closeSearch}
                  className="flex items-center gap-3 rounded-lg px-1 py-2 transition-colors hover:bg-white/6"
                >
                  <Image
                    src={user.avatar}
                    alt={`${user.username} avatar`}
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-full object-cover"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="truncate text-sm font-semibold">
                        {user.username}
                      </p>
                      {user.verified && (
                        <BadgeCheck
                          size={15}
                          aria-label="Verified account"
                          className="shrink-0 fill-[#0095f6] text-[#0095f6] [&>path:last-child]:text-white"
                        />
                      )}
                    </div>
                    <p className="truncate text-sm text-[#b5bac1]">
                      {user.name} · {user.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="pt-10 text-center text-sm font-semibold text-[#a8a8a8]">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExploreSearch;
