import type { MessageConversation } from '@/types/message.types';
import { ChevronLeft, Maximize2, X } from 'lucide-react';

interface FloatingChatHeaderProps {
  conversation: MessageConversation;
  onBack: () => void;
  onClose: () => void;
  onExpand: () => void;
}

function FloatingChatHeader({
  conversation,
  onBack,
  onClose,
  onExpand,
}: FloatingChatHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/8 px-2">
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to conversations"
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <ChevronLeft size={25} />
        </button>

        <div className="relative shrink-0">
          <div
            className={
              conversation.hasStory
                ? 'rounded-full bg-linear-to-tr from-[#ffb700] via-[#ff0069] to-[#d300c5] p-0.5'
                : 'rounded-full'
            }
          >
            <div
              className={`size-9 rounded-full bg-cover bg-center ${
                conversation.hasStory ? 'border-2 border-[#24262b]' : ''
              }`}
              style={{
                backgroundImage: `url("${conversation.avatar}")`,
              }}
            />
          </div>

          {conversation.online && (
            <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-[#24262b] bg-[#31a24c]" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{conversation.name}</p>
          <p className="truncate text-xs text-[#a8a8a8]">
            {conversation.status ?? conversation.username}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          onClick={onExpand}
          aria-label="Open conversation page"
          className="flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <Maximize2 size={19} />
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close conversation"
          className="flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <X size={23} />
        </button>
      </div>
    </header>
  );
}

export default FloatingChatHeader;
