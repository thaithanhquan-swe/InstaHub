import EmojiPicker, { Theme, type EmojiClickData } from 'emoji-picker-react';
import { Image as ImageIcon, Smile } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { OutgoingChatMessage } from '@/types/message.types';

interface MessagesComposerProps {
  onSendMessage: (message: OutgoingChatMessage) => void;
}

function MessagesComposer({ onSendMessage }: MessagesComposerProps) {
  const [content, setContent] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (emojiPickerRef.current && !emojiPickerRef.current.contains(target)) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  const sendText = (text: string) => {
    const normalizedContent = text.trim();

    if (!normalizedContent) return;

    onSendMessage({
      type: 'text',
      content: normalizedContent,
    });

    setContent('');
    setShowEmojiPicker(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendText(content);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setContent((currentContent) => `${currentContent}${emojiData.emoji}`);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file?.type.startsWith('image/')) {
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== 'string') return;

      onSendMessage({
        type: 'image',
        mediaUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
    event.target.value = '';
  };

  return (
    <div className="relative shrink-0 px-4 pt-2 pb-5 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="flex min-h-11 items-center gap-2 rounded-full border border-[#363636] px-3"
      >
        <div ref={emojiPickerRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setShowEmojiPicker((currentValue) => !currentValue)}
            aria-label="Choose emoji"
            aria-expanded={showEmojiPicker}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-white/10"
          >
            <Smile size={25} />
          </button>

          {showEmojiPicker && (
            <div className="absolute bottom-13 left-0 z-50">
              <EmojiPicker
                theme={Theme.DARK}
                onEmojiClick={handleEmojiClick}
                lazyLoadEmojis
                width={320}
                height={400}
                searchPlaceHolder="Search emoji"
                previewConfig={{ showPreview: false }}
              />
            </div>
          )}
        </div>

        <input
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Message..."
          className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#a8a8a8]"
        />

        {content.trim() ? (
          <button
            type="submit"
            aria-label="Send message"
            className="cursor-pointer px-2 text-sm font-semibold text-[#0095f6] hover:text-white"
          >
            Send
          </button>
        ) : (
          <button
            type="button"
            onClick={() => imageInputRef.current?.click()}
            aria-label="Send image"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-white/10"
          >
            <ImageIcon size={23} />
          </button>
        )}

        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </form>
    </div>
  );
}

export default MessagesComposer;
