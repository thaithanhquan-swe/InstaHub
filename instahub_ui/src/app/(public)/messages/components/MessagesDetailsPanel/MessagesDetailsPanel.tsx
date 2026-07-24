import { Bell, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import type { MessageConversation } from '@/types/message.types';

interface MessagesDetailsPanelProps {
  conversation: MessageConversation;
  onClose: () => void;
}

function MessagesDetailsPanel({
  conversation,
  onClose
}: MessagesDetailsPanelProps) {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <aside className='flex h-full w-full shrink-0 flex-col border-l border-[#262626] bg-[#0c1014] md:w-[360px]'>
      <header className='flex h-20 shrink-0 items-center border-b border-[#262626] px-5'>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close details'
          className='mr-2 flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-white/10 md:hidden'
        >
          <ChevronLeft size={26} />
        </button>
        <h2 className='text-xl font-semibold'>Details</h2>
      </header>

      <div className='flex min-h-0 flex-1 flex-col overflow-y-auto [scrollbar-color:#555_transparent] [scrollbar-width:thin]'>
        <div className='border-b border-[#262626] px-5 py-4'>
          <div className='flex items-center gap-4'>
            <Bell size={24} />
            <span className='flex-1 font-medium'>Mute messages</span>
            <button
              type='button'
              role='switch'
              aria-label='Mute messages'
              aria-checked={isMuted}
              onClick={() => setIsMuted((current) => !current)}
              className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors ${
                isMuted ? 'bg-[#0095f6]' : 'bg-[#363d46]'
              }`}
            >
              <span
                className={`absolute top-1 left-1 size-4 rounded-full bg-white transition-transform ${
                  isMuted ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <section className='min-h-72 flex-1 border-b border-[#262626] px-5 py-5'>
          <h3 className='font-semibold'>Members</h3>
          <button
            type='button'
            className='mt-4 flex w-full cursor-pointer items-center gap-3 rounded-lg p-1 text-left hover:bg-white/5'
          >
            <Image
              src={conversation.avatar}
              alt={`${conversation.name}'s profile picture`}
              width={56}
              height={56}
              className='size-14 shrink-0 rounded-full object-cover'
            />
            <span className='min-w-0'>
              <span className='block truncate text-sm font-semibold'>
                {conversation.name}
              </span>
              <span className='mt-1 block truncate text-sm text-[#a8a8a8]'>
                {conversation.username}
              </span>
            </span>
          </button>
        </section>

        <div className='shrink-0 px-5 py-3'>
          <button
            type='button'
            className='block w-full cursor-pointer py-3 text-left hover:text-[#a8a8a8]'
          >
            Nicknames
          </button>
          <button
            type='button'
            className='block w-full cursor-pointer py-3 text-left hover:text-[#a8a8a8]'
          >
            Block
          </button>
          <button
            type='button'
            className='block w-full cursor-pointer py-3 text-left text-[#ff3040] hover:text-[#ff5966]'
          >
            Delete chat
          </button>
        </div>
      </div>
    </aside>
  );
}

export default MessagesDetailsPanel;
