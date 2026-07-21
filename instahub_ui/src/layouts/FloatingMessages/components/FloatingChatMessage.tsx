import { SmilePlus } from 'lucide-react';
import Image from 'next/image';

import type { ChatMessage } from '@/types/message.types';

interface FloatingChatMessageProps {
  message: ChatMessage;
  conversationAvatar: string;
  isReactionPickerOpen: boolean;
  onToggleReactionPicker: () => void;
  onReact: (emoji: string) => void;
}

const reactionEmojis = ['❤️', '😂', '😮', '😢', '😡', '👍'];

function FloatingChatMessage({
  message,
  conversationAvatar,
  isReactionPickerOpen,
  onToggleReactionPicker,
  onReact,
}: FloatingChatMessageProps) {
  const isMyMessage = message.sender === 'me';
  const messageType = message.type ?? 'text';

  return (
    <div>
      {message.dateLabel && (
        <p className="my-4 text-center text-[11px] text-[#8e8e8e]">
          {message.dateLabel}
        </p>
      )}

      <div
        className={`group relative mb-2 flex items-end ${
          isMyMessage ? 'justify-end' : 'justify-start'
        }`}
      >
        {!isMyMessage && (
          <div
            className="mr-2 size-7 shrink-0 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url("${conversationAvatar}")`,
            }}
          />
        )}

        <div className="relative max-w-[75%]">
          <button
            type="button"
            onClick={onToggleReactionPicker}
            aria-label="React to message"
            className={`absolute top-1/2 z-10 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-[#a8a8a8] opacity-0 transition-all hover:bg-white/10 hover:text-white group-hover:opacity-100 ${
              isMyMessage ? '-left-9' : '-right-9'
            }`}
          >
            <SmilePlus size={17} />
          </button>

          {isReactionPickerOpen && (
            <div
              className={`absolute bottom-[calc(100%+8px)] z-30 flex items-center gap-1 rounded-full border border-white/10 bg-[#36383e] p-1.5 shadow-xl ${
                isMyMessage ? 'right-0' : 'left-0'
              }`}
            >
              {reactionEmojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => onReact(emoji)}
                  aria-label={`React with ${emoji}`}
                  className="flex size-8 cursor-pointer items-center justify-center rounded-full text-lg transition-transform hover:scale-125 hover:bg-white/10"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          <div
            className={`relative overflow-hidden text-sm leading-5 ${
              messageType === 'text' ? 'rounded-2xl px-3 py-2' : 'rounded-xl'
            } ${
              messageType === 'text'
                ? isMyMessage
                  ? 'bg-[#4f5ff5] text-white'
                  : 'bg-[#303238] text-white'
                : 'bg-transparent'
            }`}
          >
            {messageType === 'image' && message.mediaUrl ? (
              <Image
                src={message.mediaUrl}
                alt="Sent image"
                width={260}
                height={260}
                unoptimized
                className="max-h-72 w-auto max-w-full rounded-xl object-cover"
              />
            ) : (
              <p className="whitespace-pre-wrap break-words">
                {message.content}
              </p>
            )}
          </div>

          {message.reaction && (
            <button
              type="button"
              onClick={() => onReact(message.reaction!)}
              aria-label="Remove reaction"
              className={`absolute -bottom-4 flex min-w-7 cursor-pointer items-center justify-center rounded-full border-2 border-[#24262b] bg-[#36383e] px-1.5 py-0.5 text-xs ${
                isMyMessage ? 'right-1' : 'left-1'
              }`}
            >
              {message.reaction}
            </button>
          )}
        </div>
      </div>

      {message.seen && isMyMessage && (
        <p
          className={`text-right text-[11px] text-[#a8a8a8] ${
            message.reaction ? 'mt-4 mb-2' : 'mb-2'
          }`}
        >
          Seen
        </p>
      )}
    </div>
  );
}

export default FloatingChatMessage;
