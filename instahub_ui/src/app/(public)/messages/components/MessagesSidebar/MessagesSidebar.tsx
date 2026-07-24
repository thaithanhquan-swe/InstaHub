import { ChevronDown, Edit, Search, X } from 'lucide-react';

import type { MessageConversation } from '@/types/message.types';

import MessagesConversationItem from '../MessagesConversationItem/MessagesConversationItem';

interface MessagesSidebarProps {
  conversations: MessageConversation[];
  selectedConversationId: number | null;
  search: string;
  isConversationOpen: boolean;
  onSearchChange: (value: string) => void;
  onSelectConversation: (conversationId: number) => void;
}

function MessagesSidebar({
  conversations,
  selectedConversationId,
  search,
  isConversationOpen,
  onSearchChange,
  onSelectConversation
}: MessagesSidebarProps) {
  return (
    <aside
      className={`h-full w-full shrink-0 border-r border-[#262626] bg-black md:w-[390px] lg:w-[420px] ${
        isConversationOpen ? 'hidden md:flex md:flex-col' : 'flex flex-col'
      }`}
    >
      <header className='flex h-20 shrink-0 items-center justify-between px-6 pt-2'>
        <button
          type='button'
          className='flex cursor-pointer items-center gap-1 text-xl font-bold'
        >
          quan.thai_
        </button>
      </header>

      <div className='px-4 pb-3'>
        <div className='flex h-10 items-center gap-3 rounded-xl bg-[#262626] px-4 text-[#a8a8a8]'>
          <Search size={18} />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder='Search'
            aria-label='Search conversations'
            className='min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#a8a8a8]'
          />
          {search && (
            <button
              type='button'
              onClick={() => onSearchChange('')}
              aria-label='Clear search'
              className='cursor-pointer rounded-full bg-[#a8a8a8] p-0.5 text-[#262626]'
            >
              <X size={12} strokeWidth={3} />
            </button>
          )}
        </div>
      </div>

      <div className='flex items-center justify-between px-6 py-3'>
        <h1 className='text-base font-bold'>Messages</h1>
      </div>

      <div className='min-h-0 flex-1 overflow-y-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {conversations.length ? (
          conversations.map((conversation) => (
            <MessagesConversationItem
              key={conversation.id}
              conversation={conversation}
              isSelected={conversation.id === selectedConversationId}
              onSelect={() => onSelectConversation(conversation.id)}
            />
          ))
        ) : (
          <p className='px-6 py-8 text-center text-sm text-[#a8a8a8]'>
            No accounts found.
          </p>
        )}
      </div>
    </aside>
  );
}

export default MessagesSidebar;
