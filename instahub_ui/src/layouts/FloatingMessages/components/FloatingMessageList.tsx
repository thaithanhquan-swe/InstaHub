import { useEffect, useRef, useState } from 'react';

import type { MessageConversation } from '@/types/message.types';

import FloatingChatMessage from './FloatingChatMessage';

interface FloatingMessageListProps {
  conversation: MessageConversation;
  onReactMessage: (messageId: number, emoji: string) => void;
}

function FloatingMessageList({
  conversation,
  onReactMessage,
}: FloatingMessageListProps) {
  const [reactionMessageId, setReactionMessageId] = useState<number | null>(
    null,
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [conversation.messages.length]);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3 [scrollbar-color:#8e8e8e_transparent] [scrollbar-width:thin]">
      {conversation.messages.map((message) => (
        <FloatingChatMessage
          key={message.id}
          message={message}
          conversationAvatar={conversation.avatar}
          isReactionPickerOpen={reactionMessageId === message.id}
          onToggleReactionPicker={() =>
            setReactionMessageId((currentId) =>
              currentId === message.id ? null : message.id,
            )
          }
          onReact={(emoji) => {
            onReactMessage(message.id, emoji);
            setReactionMessageId(null);
          }}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default FloatingMessageList;
