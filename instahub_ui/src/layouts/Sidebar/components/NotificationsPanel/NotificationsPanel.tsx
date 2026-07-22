'use client';

import notificationGroups from '@/data/notifications';
import { X } from 'lucide-react';
import Image from 'next/image';

interface NotificationsPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function NotificationsPanel({
  open,
  onClose
}: NotificationsPanelProps) {
  return (
    <section
      id='notifications-panel'
      aria-label='Notifications'
      aria-hidden={!open}
      inert={!open}
      className={`fixed top-0 left-0 z-40 h-screen w-112.5 overflow-hidden bg-(--background-color) text-(--text-white) shadow-[4px_0_24px_rgba(0,0,0,0.35)] transition-[transform,opacity] duration-300 ease-out ${
        open
          ? 'translate-x-0 opacity-100'
          : 'pointer-events-none -translate-x-full opacity-0'
      }`}
    >
      <div className='flex h-full flex-col'>
        <header className='flex items-center justify-between px-6 pt-7'>
          <h2 className='text-2xl font-bold'>Notifications</h2>
          <button
            type='button'
            aria-label='Close notifications'
            onClick={onClose}
            className='flex size-9 items-center justify-center rounded-full transition-colors cursor-pointer'
          >
            <X size={22} />
          </button>
        </header>

        <div className='min-h-0 flex-1 overflow-y-auto overscroll-contain'>
          {notificationGroups.map((group) => (
            <div
              key={group.title}
              className='border-t border-(--border-color) px-6 py-5 first:border-t-0'
            >
              <h3 className='mb-4 text-base font-bold'>{group.title}</h3>

              <ul className='space-y-4'>
                {group.items.map((notification) => (
                  <li
                    key={notification.id}
                    className='flex min-w-0 items-center gap-3'
                  >
                    <Image
                      src={notification.avatar}
                      alt={`${notification.user}'s avatar`}
                      width={44}
                      height={44}
                      className='h-11 w-11 shrink-0 rounded-full object-cover'
                    />

                    <p className='min-w-0 flex-1 text-sm leading-[18px]'>
                      <span className='font-semibold'>{notification.user}</span>{' '}
                      {notification.message}{' '}
                      <span className='text-(--text-secondary)'>
                        {notification.time}
                      </span>
                      {notification.followedBy && (
                        <span className='mt-0.5 block text-xs text-(--text-secondary)'>
                          {notification.followedBy}
                        </span>
                      )}
                    </p>

                    {notification.action && (
                      <button
                        type='button'
                        className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                          notification.action === 'follow'
                            ? 'bg-[#0095f6] text-white hover:bg-[#1877f2]'
                            : 'bg-(--hover-color) hover:bg-[#262626]'
                        }`}
                      >
                        {notification.action === 'follow'
                          ? 'Follow'
                          : 'Following'}
                      </button>
                    )}

                    {notification.thumbnail && (
                      <Image
                        src={notification.thumbnail}
                        alt='Notification post'
                        width={44}
                        height={44}
                        className='h-11 w-11 shrink-0 object-cover'
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
