import type { MessageConversation } from '@/types/message.types';
import { Maximize2, X } from 'lucide-react';

import FloatingMessageItem from './FloatingMessageItem';

interface FloatingConversationListProps {
  conversations: MessageConversation[];
  onClose: () => void;
  onExpand: () => void;
  onSelectConversation: (conversationId: number) => void;
}

function FloatingConversationList({
  conversations,
  onClose,
  onExpand,
  onSelectConversation,
}: FloatingConversationListProps) {
  return (
    <>
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/8 px-3">
        <h2 className="text-base font-semibold">Messages</h2>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onExpand}
            aria-label="Open messages page"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Maximize2 size={19} />
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close messages"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <X size={23} />
          </button>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {conversations.map((conversation) => (
          <FloatingMessageItem
            key={conversation.id}
            conversation={conversation}
            onSelect={() => onSelectConversation(conversation.id)}
          />
        ))}
      </div>
    </>
  );
}

export default FloatingConversationList;
