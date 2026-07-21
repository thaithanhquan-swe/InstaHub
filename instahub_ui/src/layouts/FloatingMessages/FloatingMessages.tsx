'use client';

import { messageConversations } from '@/data/messages.data';
import type {
  MessageConversation,
  OutgoingChatMessage,
} from '@/types/message.types';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import FloatingChatPanel from './components/FloatingChatPanel';
import FloatingConversationList from './components/FloatingConversationList';
import FloatingMessagesLauncher from './components/FloatingMessagesLauncher';

function FloatingMessages() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [selectedConversationId, setSelectedConversationId] = useState<
    number | null
  >(null);

  const [conversations, setConversations] = useState<MessageConversation[]>(
    () => messageConversations,
  );

  if (pathname.startsWith('/messages')) {
    return null;
  }

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedConversationId,
  );

  const handleClose = () => {
    setIsOpen(false);
    setSelectedConversationId(null);
  };

  const handleExpand = (conversationId?: number) => {
    if (conversationId !== undefined) {
      router.push(`/messages?conversation=${conversationId}`);

      return;
    }

    router.push('/messages');
  };

  const handleSendMessage = (outgoingMessage: OutgoingChatMessage) => {
    if (selectedConversationId === null) {
      return;
    }

    const lastMessage =
      outgoingMessage.type === 'image'
        ? 'You sent a photo'
        : `You: ${outgoingMessage.content ?? ''}`;

    setConversations((currentConversations) =>
      currentConversations.map((conversation) => {
        if (conversation.id !== selectedConversationId) {
          return conversation;
        }

        const previousMessages = conversation.messages.map((message) => ({
          ...message,
          seen: false,
        }));

        return {
          ...conversation,
          lastMessage,
          time: 'now',
          messages: [
            ...previousMessages,
            {
              id: Date.now(),
              sender: 'me' as const,
              type: outgoingMessage.type,
              content: outgoingMessage.content,
              mediaUrl: outgoingMessage.mediaUrl,
              createdAt: new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
              }),
              seen: true,
            },
          ],
        };
      }),
    );
  };

  const handleReactMessage = (messageId: number, emoji: string) => {
    if (selectedConversationId === null) {
      return;
    }

    setConversations((currentConversations) =>
      currentConversations.map((conversation) => {
        if (conversation.id !== selectedConversationId) {
          return conversation;
        }

        return {
          ...conversation,
          messages: conversation.messages.map((message) => {
            if (message.id !== messageId) {
              return message;
            }

            return {
              ...message,
              reaction: message.reaction === emoji ? undefined : emoji,
            };
          }),
        };
      }),
    );
  };

  return (
    <>
      {isOpen ? (
        <section className="fixed right-2 bottom-2 z-50 flex h-[522px] max-h-[calc(100svh-1rem)] w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#24262b] text-white shadow-[0_16px_50px_rgba(0,0,0,0.55)] sm:right-5 sm:bottom-4 sm:w-[360px]">
          {selectedConversation ? (
            <FloatingChatPanel
              key={selectedConversation.id}
              conversation={selectedConversation}
              onBack={() => setSelectedConversationId(null)}
              onClose={handleClose}
              onExpand={() => handleExpand(selectedConversation.id)}
              onSendMessage={handleSendMessage}
              onReactMessage={handleReactMessage}
            />
          ) : (
            <FloatingConversationList
              conversations={conversations}
              onClose={handleClose}
              onExpand={() => handleExpand()}
              onSelectConversation={setSelectedConversationId}
            />
          )}
        </section>
      ) : (
        <FloatingMessagesLauncher
          conversations={conversations}
          onOpen={() => setIsOpen(true)}
        />
      )}
    </>
  );
}

export default FloatingMessages;
