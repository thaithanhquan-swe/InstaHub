import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

import EmojiPicker, { Theme, type EmojiClickData } from 'emoji-picker-react';
import { Image as ImageIcon, Send, Smile } from 'lucide-react';

import type { OutgoingChatMessage } from '@/types/message.types';

interface FloatingMessageComposerProps {
  onSendMessage: (message: OutgoingChatMessage) => void;
}

function FloatingMessageComposer({
  onSendMessage,
}: FloatingMessageComposerProps) {
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedContent = content.trim();

    if (!normalizedContent) return;

    onSendMessage({
      type: 'text',
      content: normalizedContent,
    });

    setContent('');
    setShowEmojiPicker(false);
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
    <div className="relative shrink-0 p-3 pt-1">
      <form
        onSubmit={handleSubmit}
        className="flex h-12 items-center gap-2 rounded-full border border-white/15 px-3"
      >
        <div ref={emojiPickerRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setShowEmojiPicker((currentValue) => !currentValue)}
            aria-label="Choose emoji"
            className="flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <Smile size={23} />
          </button>

          {showEmojiPicker && (
            <div className="absolute bottom-12 left-0 z-50">
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
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#a8a8a8]"
        />

        {content.trim() ? (
          <button
            type="submit"
            aria-label="Send message"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#8098ff] transition-colors hover:bg-white/10"
          >
            <Send size={20} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => imageInputRef.current?.click()}
            aria-label="Send image"
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <ImageIcon size={21} />
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

export default FloatingMessageComposer;
