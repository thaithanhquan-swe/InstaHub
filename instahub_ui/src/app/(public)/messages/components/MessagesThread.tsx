import { ChevronLeft, Info, Phone, Send, SmilePlus, Video } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import type {
  MessageConversation,
  OutgoingChatMessage
} from '@/types/message.types';

import MessagesComposer from './MessagesComposer';
import MessagesDetailsPanel from './MessagesDetailsPanel';

const reactionEmojis = ['❤️', '😂', '😮', '😢', '😡', '👍'];

interface MessagesThreadProps {
  conversation?: MessageConversation;
  onBack: () => void;
  onSendMessage: (message: OutgoingChatMessage) => void;
  onReactMessage: (messageId: number, emoji: string) => void;
}

function MessagesThread({
  conversation,
  onBack,
  onSendMessage,
  onReactMessage
}: MessagesThreadProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [reactionTarget, setReactionTarget] = useState<string | null>(null);
  const [detailsConversationId, setDetailsConversationId] = useState<
    number | null
  >(null);
  const isDetailsOpen = detailsConversationId === conversation?.id;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  }, [conversation?.messages.length]);

  if (!conversation) {
    return (
      <main className='hidden min-w-0 flex-1 items-center justify-center md:flex'>
        <div className='flex max-w-sm flex-col items-center px-6 text-center'>
          <div className='mb-4 flex size-24 items-center justify-center rounded-full border-2 border-white'>
            <Send size={45} strokeWidth={1.25} className='-rotate-12' />
          </div>
          <h2 className='text-xl font-normal'>Your messages</h2>
          <p className='mt-2 text-sm text-[#a8a8a8]'>
            Send private photos and messages to a friend or group.
          </p>
          <button
            type='button'
            className='mt-5 cursor-pointer rounded-lg bg-[#0095f6] px-4 py-2 text-sm font-semibold hover:bg-[#1877f2]'
          >
            Send message
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className='flex min-w-0 flex-1 bg-black'>
      <main
        className={`min-w-0 flex-1 flex-col bg-black ${
          isDetailsOpen ? 'hidden md:flex' : 'flex'
        }`}
      >
        <header className='flex h-20 shrink-0 items-center justify-between border-b border-[#262626] px-4 md:px-6'>
          <div className='flex min-w-0 items-center gap-3'>
            <button
              type='button'
              onClick={onBack}
              aria-label='Back to conversations'
              className='flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-white/10 md:hidden'
            >
              <ChevronLeft size={27} />
            </button>

            <div className='relative shrink-0'>
              <Image
                src={conversation.avatar}
                alt={`${conversation.name}'s profile picture`}
                width={44}
                height={44}
                className='size-11 rounded-full object-cover'
              />
              {conversation.online && (
                <span className='absolute right-0 bottom-0 size-3 rounded-full border-2 border-black bg-[#1cd14f]' />
              )}
            </div>

            <div className='min-w-0'>
              <p className='truncate text-sm font-semibold'>
                {conversation.name}
              </p>
              <p className='truncate text-xs text-[#a8a8a8]'>
                {conversation.status ?? `@${conversation.username}`}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-1 sm:gap-3'>
            <button
              type='button'
              aria-label='Start audio call'
              className='flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-white/10'
            >
              <Phone size={24} />
            </button>
            <button
              type='button'
              aria-label='Start video call'
              aria-expanded={isDetailsOpen}
              className='flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-white/10'
            >
              <Video size={26} />
            </button>
            <button
              type='button'
              onClick={() =>
                setDetailsConversationId((current) =>
                  current === conversation.id ? null : conversation.id
                )
              }
              aria-label=' Conversation details'
              className='flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-white/10'
            >
              <Info size={26} />
            </button>
          </div>
        </header>

        <div className='min-h-0 flex-1 overflow-y-auto px-4 py-5 [scrollbar-color:#555_transparent] [scrollbar-width:thin] md:px-6'>
          <div className='mb-8 flex flex-col items-center pt-5 text-center'>
            <Image
              src={conversation.avatar}
              alt={`${conversation.name}'s profile picture`}
              width={96}
              height={96}
              className='size-24 rounded-full object-cover'
            />
            <h2 className='mt-3 text-xl font-semibold'>{conversation.name}</h2>
            <p className='mt-1 text-sm text-[#a8a8a8]'>
              {conversation.username} · Instahub
            </p>
            <button
              type='button'
              className='mt-4 cursor-pointer rounded-lg bg-[#363636] px-4 py-2 text-sm font-semibold hover:bg-[#4a4a4a]'
            >
              View profile
            </button>
          </div>

          {conversation.messages.map((message) => {
            const isMyMessage = message.sender === 'me';
            const reactionTargetId = `${conversation.id}:${message.id}`;

            return (
              <div key={message.id}>
                {message.dateLabel && (
                  <p className='my-5 text-center text-xs text-[#a8a8a8]'>
                    {message.dateLabel}
                  </p>
                )}

                <div
                  className={`group mb-1 flex items-end gap-2 ${
                    isMyMessage ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {!isMyMessage && (
                    <Image
                      src={conversation.avatar}
                      alt=''
                      width={28}
                      height={28}
                      className='size-7 shrink-0 rounded-full object-cover'
                    />
                  )}

                  <div
                    className={`relative flex items-center ${
                      isMyMessage ? 'order-first' : 'order-last'
                    }`}
                  >
                    <button
                      type='button'
                      onClick={() =>
                        setReactionTarget((currentTarget) =>
                          currentTarget === reactionTargetId
                            ? null
                            : reactionTargetId
                        )
                      }
                      aria-label='React to message'
                      aria-expanded={reactionTarget === reactionTargetId}
                      className='flex size-8 cursor-pointer items-center justify-center rounded-full text-[#a8a8a8] opacity-0 transition-all hover:bg-white/10 hover:text-white group-hover:opacity-100'
                    >
                      <SmilePlus size={18} />
                    </button>

                    {reactionTarget === reactionTargetId && (
                      <div
                        className={`absolute bottom-[calc(100%+8px)] z-30 flex items-center gap-1 rounded-full border border-white/10 bg-[#363636] p-1.5 shadow-xl ${
                          isMyMessage ? 'right-0' : 'left-0'
                        }`}
                      >
                        {reactionEmojis.map((emoji) => (
                          <button
                            key={emoji}
                            type='button'
                            onClick={() => {
                              onReactMessage(message.id, emoji);
                              setReactionTarget(null);
                            }}
                            aria-label={`React with ${emoji}`}
                            className='flex size-8 cursor-pointer items-center justify-center rounded-full text-lg transition-transform hover:scale-125 hover:bg-white/10'
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className='relative max-w-[70%]'>
                    {message.type === 'image' && message.mediaUrl ? (
                      <Image
                        src={message.mediaUrl}
                        alt='Sent image'
                        width={320}
                        height={320}
                        unoptimized
                        className='max-h-96 w-auto max-w-full rounded-2xl object-cover'
                      />
                    ) : (
                      <p
                        className={`whitespace-pre-wrap break-words rounded-3xl px-4 py-2.5 text-[15px] leading-5 ${
                          isMyMessage ? 'bg-[#3797f0]' : 'bg-[#262626]'
                        }`}
                      >
                        {message.content}
                      </p>
                    )}

                    {message.reaction && (
                      <button
                        type='button'
                        onClick={() =>
                          onReactMessage(message.id, message.reaction!)
                        }
                        aria-label='Remove reaction'
                        className={`absolute -bottom-3 cursor-pointer rounded-full border-2 border-black bg-[#262626] px-1.5 text-xs ${
                          isMyMessage ? 'right-2' : 'left-2'
                        }`}
                      >
                        {message.reaction}
                      </button>
                    )}
                  </div>
                </div>

                {message.seen && isMyMessage && (
                  <p
                    className={`text-right text-xs text-[#a8a8a8] ${
                      message.reaction ? 'mt-4' : 'mt-1'
                    }`}
                  >
                    Seen
                  </p>
                )}
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>

        <MessagesComposer onSendMessage={onSendMessage} />
      </main>

      {isDetailsOpen && (
        <MessagesDetailsPanel
          conversation={conversation}
          onClose={() => setDetailsConversationId(null)}
        />
      )}
    </div>
  );
}

export default MessagesThread;
