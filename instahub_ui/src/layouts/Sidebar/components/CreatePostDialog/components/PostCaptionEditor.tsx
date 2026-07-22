import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { LoaderCircle, Smile, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { MAX_CAPTION_LENGTH } from '../../../../../data/constants';
import Image from 'next/image';

interface PostCaptionEditorProps {
  caption: string;
  captionPrompt: string;
  showCaptionAi: boolean;
  showEmojiPicker: boolean;
  isGeneratingCaption: boolean;
  onCaptionChange: (caption: string) => void;
  onCaptionPromptChange: (prompt: string) => void;
  onShowCaptionAiChange: (show: boolean) => void;
  onShowEmojiPickerChange: (show: boolean) => void;
  onEmojiClick: (emoji: string) => void;
  onGenerateCaption: () => void;
}

export default function PostCaptionEditor({
  caption,
  captionPrompt,
  showCaptionAi,
  showEmojiPicker,
  isGeneratingCaption,
  onCaptionChange,
  onCaptionPromptChange,
  onShowCaptionAiChange,
  onShowEmojiPickerChange,
  onEmojiClick,
  onGenerateCaption
}: PostCaptionEditorProps) {
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showEmojiPicker) return;

    const closeOnClickOutside = (event: MouseEvent) => {
      if (!emojiPickerRef.current?.contains(event.target as Node)) {
        onShowEmojiPickerChange(false);
      }
    };

    document.addEventListener('mousedown', closeOnClickOutside);
    return () => document.removeEventListener('mousedown', closeOnClickOutside);
  }, [showEmojiPicker, onShowEmojiPickerChange]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiClick(emojiData.emoji);
  };

  return (
    <aside className='flex min-h-0 flex-col border-t border-white/15 bg-[#262626] md:border-t-0 md:border-l'>
      <div className='flex items-center gap-3 p-4'>
        <Image
          src='https://i.pravatar.cc/100?img=12'
          alt='Your avatar'
          width={100}
          height={100}
          className='size-8 rounded-full object-cover'
        />
        <span className='text-sm font-semibold'>your_account</span>
      </div>

      <div className='relative flex min-h-0 flex-1 flex-col px-4'>
        <textarea
          value={caption}
          onChange={(event) =>
            onCaptionChange(event.target.value.slice(0, MAX_CAPTION_LENGTH))
          }
          placeholder='Write a caption…'
          className='min-h-28 flex-1 resize-none bg-transparent text-sm leading-6 outline-none placeholder:text-white/40'
        />

        {showCaptionAi && (
          <div className='mb-3 rounded-xl border border-white/10 bg-[#1a1a1a] p-3'>
            <label
              htmlFor='caption-ai-prompt'
              className='flex items-center gap-2 text-sm font-semibold'
            >
              <Sparkles size={16} className='text-fuchsia-400' /> Write with AI
            </label>
            <input
              id='caption-ai-prompt'
              value={captionPrompt}
              onChange={(event) => onCaptionPromptChange(event.target.value)}
              onKeyDown={(event) =>
                event.key === 'Enter' && onGenerateCaption()
              }
              placeholder='What is this post about?'
              className='mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-[#0095f6]'
            />
            <button
              type='button'
              onClick={onGenerateCaption}
              disabled={isGeneratingCaption}
              className='mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black disabled:opacity-60'
            >
              {isGeneratingCaption && (
                <LoaderCircle size={16} className='animate-spin' />
              )}
              {isGeneratingCaption ? 'Writing…' : 'Generate caption'}
            </button>
          </div>
        )}

        <div className='relative flex items-center justify-between py-3'>
          <div className='flex items-center gap-1'>
            <div ref={emojiPickerRef} className='relative'>
              <button
                type='button'
                aria-label='Choose emoji'
                aria-expanded={showEmojiPicker}
                onClick={() => onShowEmojiPickerChange(!showEmojiPicker)}
                className='cursor-pointer rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white'
              >
                <Smile size={21} />
              </button>

              {showEmojiPicker && (
                <div className='absolute bottom-10 left-0 z-20 shadow-2xl'>
                  <EmojiPicker
                    theme={Theme.DARK}
                    onEmojiClick={handleEmojiClick}
                    width={300}
                    height={360}
                    searchPlaceholder='Search emoji'
                    previewConfig={{ showPreview: false }}
                    lazyLoadEmojis
                  />
                </div>
              )}
            </div>
            <button
              type='button'
              onClick={() => onShowCaptionAiChange(!showCaptionAi)}
              className='flex cursor-pointer items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold text-fuchsia-300 transition-colors hover:bg-white/10'
            >
              <Sparkles size={16} /> AI caption
            </button>
          </div>
          <span className='text-xs text-white/35'>
            {caption.length}/{MAX_CAPTION_LENGTH}
          </span>
        </div>
      </div>
    </aside>
  );
}
