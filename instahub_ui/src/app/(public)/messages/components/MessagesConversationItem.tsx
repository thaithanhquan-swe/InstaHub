import Image from 'next/image';

import type { MessageConversation } from '@/types/message.types';

interface MessagesConversationItemProps {
  conversation: MessageConversation;
  isSelected: boolean;
  onSelect: () => void;
}

function MessagesConversationItem({
  conversation,
  isSelected,
  onSelect
}: MessagesConversationItemProps) {
  return (
    <button
      type='button'
      onClick={onSelect}
      className={`flex w-full cursor-pointer items-center rounded-xl gap-3 px-6 py-2 text-left transition-colors hover:bg-[#121212] ${
        isSelected ? 'bg-[#262626] hover:bg-[#262626]' : ''
      }`}
    >
      <div
        className={`relative shrink-0 rounded-full ${
          conversation.hasStory
            ? 'bg-linear-to-tr from-[#ffb700] via-[#ff0069] to-[#d300c5] p-0.5'
            : ''
        }`}
      >
        <Image
          src={conversation.avatar}
          alt={`${conversation.name}'s profile picture`}
          width={56}
          height={56}
          className={`size-14 rounded-full object-cover ${
            conversation.hasStory ? 'border-2 border-black' : ''
          }`}
        />

        {conversation.online && (
          <span className='absolute right-0 bottom-0 size-3.5 rounded-full border-2 border-black bg-[#1cd14f]' />
        )}
      </div>

      <div className='min-w-0 flex-1'>
        <p className='truncate text-sm text-[#f5f5f5]'>{conversation.name}</p>
        <div className='mt-0.5 flex min-w-0 items-center gap-1 text-sm text-[#a8a8a8]'>
          <span className='truncate'>
            {conversation.lastMessage ?? conversation.status}
          </span>
          {conversation.time && (
            <>
              <span>·</span>
              <span className='shrink-0'>{conversation.time}</span>
            </>
          )}
        </div>
      </div>
    </button>
  );
}

export default MessagesConversationItem;
