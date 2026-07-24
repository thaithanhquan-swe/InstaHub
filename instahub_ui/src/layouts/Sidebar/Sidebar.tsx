'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  House,
  LogOut,
  Plus,
  Search,
  Send,
  Settings,
  SquarePlay,
  UserRound
} from 'lucide-react';
import { InstagramIcon } from '@/assets/icon';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import NotificationsPanel from './components/NotificationsPanel/NotificationsPanel';
import CreatePostDialog from './components/CreatePostDialog/CreatePostDialog';
import { profileData } from '@/data/settings';

const menuItems = [
  {
    label: 'Home',
    href: '/',
    icon: House
  },
  {
    label: 'Reels',
    href: '/reels',
    icon: SquarePlay
  },
  {
    label: 'Messages',
    href: '/messages',
    icon: Send
  },
  {
    label: 'Search',
    href: '/explore',
    icon: Search
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: Heart
  },
  {
    label: 'Create',
    href: '/create',
    icon: Plus
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const profileMenuRef = useRef<HTMLLIElement>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isNotificationsOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsNotificationsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isNotificationsOpen]);

  useEffect(() => {
    if (!isProfileMenuOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsProfileMenuOpen(false);
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isProfileMenuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const handleLogout = () => {
    setIsProfileMenuOpen(false);
    router.replace('/login');
  };

  return (
    <>
      <button
        type='button'
        aria-label='Close notifications'
        tabIndex={-1}
        onClick={() => setIsNotificationsOpen(false)}
        className={`fixed inset-0 z-30 bg-black/20 transition-opacity duration-300 ${
          isNotificationsOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      <NotificationsPanel
        open={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      <CreatePostDialog open={isCreateOpen} onOpenChange={setIsCreateOpen} />

      <aside
        aria-hidden={isNotificationsOpen}
        inert={isNotificationsOpen}
        className={`group/sidebar fixed top-0 left-0 z-50 flex h-screen w-18 flex-col overflow-hidden bg-(--background-color) px-3 py-6 text-(--text-white) transition-[width,transform,opacity] duration-300 ease-in-out ${
          isNotificationsOpen
            ? 'pointer-events-none -translate-x-full opacity-0'
            : `translate-x-0 opacity-100 hover:w-64 ${
                isProfileMenuOpen ? 'w-64' : ''
              }`
        }`}
      >
        {/* Logo */}
        <Link
          href='/'
          onClick={() => setIsNotificationsOpen(false)}
          className='flex h-13 w-13 items-center justify-center rounded-[10px] transition-colors duration-200 hover:bg-(--hover-color)'
        >
          <InstagramIcon size={24} />
        </Link>

        {/* Navigation */}
        <nav className='flex flex-1 items-center'>
          <ul className='flex w-full flex-col gap-1'>
            {menuItems.map(({ label, href, icon: Icon }) => {
              const active = isActive(href);

              if (label === 'Notifications') {
                return (
                  <li key={label}>
                    <button
                      type='button'
                      aria-expanded={isNotificationsOpen}
                      aria-controls='notifications-panel'
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        setIsNotificationsOpen((open) => !open);
                      }}
                      className={`flex h-13 w-full items-center gap-4 rounded-[10px] px-3 text-left transition-colors duration-200 hover:bg-(--hover-color) cursor-pointer ${
                        isNotificationsOpen ? 'bg-(--hover-color)' : ''
                      }`}
                    >
                      <Icon
                        size={27}
                        fill={isNotificationsOpen ? 'currentColor' : 'none'}
                        className='shrink-0'
                      />

                      <span
                        className={`translate-x-2 text-base whitespace-nowrap opacity-0 transition-all duration-300 ${
                          isNotificationsOpen
                            ? ''
                            : 'group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100'
                        }`}
                      >
                        {label}
                      </span>
                    </button>
                  </li>
                );
              }

              if (label === 'Create') {
                return (
                  <li key={label}>
                    <button
                      type='button'
                      aria-haspopup='dialog'
                      aria-expanded={isCreateOpen}
                      onClick={() => {
                        setIsNotificationsOpen(false);
                        setIsProfileMenuOpen(false);
                        setIsCreateOpen(true);
                      }}
                      className={`flex h-13 w-full cursor-pointer items-center gap-4 rounded-[10px] px-3 text-left transition-colors duration-200 hover:bg-(--hover-color) ${
                        isCreateOpen ? 'bg-(--hover-color)' : ''
                      }`}
                    >
                      <Icon size={27} className='shrink-0' />
                      <span className='translate-x-2 text-base whitespace-nowrap opacity-0 transition-all duration-300 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100'>
                        {label}
                      </span>
                    </button>
                  </li>
                );
              }

              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setIsNotificationsOpen(false)}
                    className={`flex h-13 w-full items-center gap-4 rounded-[10px] px-3 transition-colors duration-200 hover:bg-(--hover-color) ${
                      active ? 'bg-(--hover-color)' : ''
                    }`}
                  >
                    <Icon size={27} className='shrink-0' />

                    <span className='translate-x-2 text-base whitespace-nowrap opacity-0 transition-all duration-300 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100'>
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}

            {/* Profile */}
            <li ref={profileMenuRef} className='relative'>
              <div
                id='profile-menu'
                role='menu'
                aria-label='Profile menu'
                className={`absolute bottom-[calc(100%+10px)] left-0 z-10 w-56 origin-bottom-left overflow-hidden rounded-xl border border-white/10 bg-[#262626] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.55)] transition-all duration-150 ${
                  isProfileMenuOpen
                    ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-2 scale-95 opacity-0'
                }`}
              >
                <Link
                  href={`/${profileData.slug}`}
                  role='menuitem'
                  tabIndex={isProfileMenuOpen ? 0 : -1}
                  onClick={() => setIsProfileMenuOpen(false)}
                  className='flex h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-white/10'
                >
                  <UserRound size={20} />
                  Profile
                </Link>

                <Link
                  href='/settings'
                  role='menuitem'
                  tabIndex={isProfileMenuOpen ? 0 : -1}
                  onClick={() => setIsProfileMenuOpen(false)}
                  className='flex h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-white/10'
                >
                  <Settings size={20} />
                  Settings
                </Link>

                <div className='my-2 h-px bg-white/10' />

                <button
                  type='button'
                  role='menuitem'
                  tabIndex={isProfileMenuOpen ? 0 : -1}
                  onClick={handleLogout}
                  className='flex h-12 w-full cursor-pointer items-center gap-3 rounded-lg px-3 text-left text-sm font-medium text-red-400 transition-colors hover:bg-white/10'
                >
                  <LogOut size={20} />
                  Log out
                </button>
              </div>

              <button
                type='button'
                aria-haspopup='menu'
                aria-expanded={isProfileMenuOpen}
                aria-controls='profile-menu'
                onClick={() => {
                  setIsNotificationsOpen(false);
                  setIsProfileMenuOpen((open) => !open);
                }}
                className={`flex h-13 w-full cursor-pointer items-center gap-4 rounded-[10px] px-3 text-left transition-colors duration-200 hover:bg-(--hover-color) ${
                  pathname === `/${profileData.slug}` || isProfileMenuOpen
                    ? 'bg-(--hover-color)'
                    : ''
                }`}
              >
                <Image
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSev1GqxHajibRl6Ote8SwM9DhdYNN2NuWLSwXP2pn8F-fpKxd5S1sLWQU&s=10'
                  alt='Profile'
                  width={27}
                  height={27}
                  className={`shrink-0 rounded-full object-cover ${
                    pathname === `/${profileData.slug}`
                      ? 'ring-2 ring-(--text-white)'
                      : ''
                  }`}
                />

                <span
                  className={`text-base whitespace-nowrap transition-all duration-300 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100 ${
                    isProfileMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-2 opacity-0'
                  }`}
                >
                  Profile
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
