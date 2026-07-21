import type { MessageConversation } from '@/types/message.types';
import { Send } from 'lucide-react';

interface FloatingMessagesLauncherProps {
  conversations: MessageConversation[];
  onOpen: () => void;
}

function FloatingMessagesLauncher({
  conversations,
  onOpen,
}: FloatingMessagesLauncherProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open messages"
      aria-expanded={false}
      className="fixed right-4 bottom-7 z-50 flex h-14 cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-[#26282d] px-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all hover:bg-[#303238] active:scale-95 sm:right-6 sm:min-w-62"
    >
      <Send size={23} strokeWidth={1.8} className="-rotate-12" />

      <span className="hidden flex-1 text-left text-base font-semibold sm:block">
        Messages
      </span>

      <div className="hidden items-center sm:flex">
        {conversations.slice(0, 3).map((conversation, index) => (
          <div
            key={conversation.id}
            className="-ml-2 size-7 rounded-full border-2 border-[#26282d] bg-cover bg-center first:ml-0"
            style={{
              backgroundImage: `url("${conversation.avatar}")`,
              zIndex: conversations.length - index,
            }}
          />
        ))}
      </div>
    </button>
  );
}

export default FloatingMessagesLauncher;
