'use client';

import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { useEffect, useRef } from 'react';

interface EmojiPickerPopoverProps {
  open: boolean;
  onClose: () => void;
  onEmojiClick: (emoji: string) => void;
}

function EmojiPickerPopover({
  open,
  onClose,
  onEmojiClick,
}: EmojiPickerPopoverProps) {
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (pickerRef.current && !pickerRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiClick(emojiData.emoji);
  };

  if (!open) return null;

  return (
    <div ref={pickerRef} className="absolute right-0 bottom-15 z-100">
      <EmojiPicker
        theme={Theme.DARK}
        onEmojiClick={handleEmojiClick}
        width={320}
        height={400}
        searchPlaceholder="Search emoji"
        previewConfig={{
          showPreview: false,
        }}
        lazyLoadEmojis
      />
    </div>
  );
}

export default EmojiPickerPopover;
