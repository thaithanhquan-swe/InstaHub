'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { messageConversations } from '@/data/messages.data';
import type {
  MessageConversation,
  OutgoingChatMessage
} from '@/types/message.types';

import MessagesSidebar from '../MessagesSidebar/MessagesSidebar';
import MessagesThread from '../MessagesThread/MessagesThread';

interface MessagesClientProps {
  initialConversationId: number | null;
}

function MessagesClient({ initialConversationId }: MessagesClientProps) {
  const router = useRouter();
  const [conversations, setConversations] = useState<MessageConversation[]>(
    () => messageConversations
  );
  const [selectedConversationId, setSelectedConversationId] = useState<
    number | null
  >(() =>
    messageConversations.some(
      (conversation) => conversation.id === initialConversationId
    )
      ? initialConversationId
      : null
  );
  const [search, setSearch] = useState('');

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId
  );

  const filteredConversations = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();

    if (!normalizedSearch) return conversations;

    return conversations.filter((conversation) =>
      `${conversation.name} ${conversation.username}`
        .toLocaleLowerCase()
        .includes(normalizedSearch)
    );
  }, [conversations, search]);

  const handleSelectConversation = (conversationId: number) => {
    setSelectedConversationId(conversationId);
    router.replace(`/messages?conversation=${conversationId}`, {
      scroll: false
    });
  };

  const handleBack = () => {
    setSelectedConversationId(null);
    router.replace('/messages', { scroll: false });
  };

  const handleSendMessage = (outgoingMessage: OutgoingChatMessage) => {
    if (selectedConversationId === null) return;

    setConversations((currentConversations) =>
      currentConversations.map((conversation) => {
        if (conversation.id !== selectedConversationId) return conversation;

        return {
          ...conversation,
          lastMessage:
            outgoingMessage.type === 'image'
              ? 'You sent a photo'
              : `You: ${outgoingMessage.content ?? ''}`,
          time: 'now',
          messages: [
            ...conversation.messages.map((message) => ({
              ...message,
              seen: false
            })),
            {
              id: Date.now(),
              sender: 'me' as const,
              type: outgoingMessage.type,
              content: outgoingMessage.content,
              mediaUrl: outgoingMessage.mediaUrl,
              createdAt: new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
              }),
              seen: true
            }
          ]
        };
      })
    );
  };

  const handleReactMessage = (messageId: number, emoji: string) => {
    if (selectedConversationId === null) return;

    setConversations((currentConversations) =>
      currentConversations.map((conversation) => {
        if (conversation.id !== selectedConversationId) return conversation;

        return {
          ...conversation,
          messages: conversation.messages.map((message) =>
            message.id === messageId
              ? {
                  ...message,
                  reaction: message.reaction === emoji ? undefined : emoji
                }
              : message
          )
        };
      })
    );
  };

  return (
    <div className='fixed inset-y-0 right-0 left-18 z-20 flex overflow-hidden bg-black text-[#f5f5f5]'>
      <MessagesSidebar
        conversations={filteredConversations}
        selectedConversationId={selectedConversationId}
        search={search}
        isConversationOpen={Boolean(selectedConversation)}
        onSearchChange={setSearch}
        onSelectConversation={handleSelectConversation}
      />

      <MessagesThread
        conversation={selectedConversation}
        onBack={handleBack}
        onSendMessage={handleSendMessage}
        onReactMessage={handleReactMessage}
      />
    </div>
  );
}

export default MessagesClient;
