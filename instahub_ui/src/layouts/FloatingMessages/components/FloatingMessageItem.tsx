import type { MessageConversation } from '@/types/message.types';

interface FloatingMessageItemProps {
  conversation: MessageConversation;
  onSelect: () => void;
}

function FloatingMessageItem({
  conversation,
  onSelect,
}: FloatingMessageItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full cursor-pointer items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-white/[0.06]"
    >
      <div className="relative shrink-0">
        <div
          className={
            conversation.hasStory
              ? 'rounded-full bg-linear-to-tr from-[#ffb700] via-[#ff0069] to-[#d300c5] p-0.5'
              : ''
          }
        >
          <div
            className={`size-14 rounded-full bg-[#36393f] bg-cover bg-center ${
              conversation.hasStory ? 'border-2 border-[#24262b]' : ''
            }`}
            style={{
              backgroundImage: `url("${conversation.avatar}")`,
            }}
          />
        </div>

        {conversation.online && (
          <span className="absolute right-0 bottom-0 size-3.5 rounded-full border-2 border-[#24262b] bg-[#31a24c]" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-[#f5f5f5]">
          {conversation.name}
        </p>

        {conversation.status ? (
          <p className="mt-0.5 truncate text-sm text-[#a8a8a8]">
            {conversation.status}
          </p>
        ) : (
          <div className="mt-0.5 flex min-w-0 items-center gap-1 text-sm text-[#a8a8a8]">
            <span className="truncate">{conversation.lastMessage}</span>

            {conversation.time && (
              <>
                <span>·</span>
                <span className="shrink-0">{conversation.time}</span>
              </>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

export default FloatingMessageItem;
