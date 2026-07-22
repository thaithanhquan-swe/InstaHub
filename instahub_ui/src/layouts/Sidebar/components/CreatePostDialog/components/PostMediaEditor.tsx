import {
  ImagePlus,
  LoaderCircle,
  Sparkles,
  Upload,
  WandSparkles
} from 'lucide-react';
import Image from 'next/image';
import type { ChangeEvent, DragEvent, RefObject } from 'react';

interface PostMediaEditorProps {
  imageUrl: string;
  imagePrompt: string;
  showImageAi: boolean;
  isGeneratingImage: boolean;
  message: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
  onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onImagePromptChange: (prompt: string) => void;
  onShowImageAiChange: (show: boolean) => void;
  onGenerateImage: () => void;
}

export default function PostMediaEditor({
  imageUrl,
  imagePrompt,
  showImageAi,
  isGeneratingImage,
  message,
  inputRef,
  onDrop,
  onFileChange,
  onImagePromptChange,
  onShowImageAiChange,
  onGenerateImage
}: PostMediaEditorProps) {
  const openFilePicker = () => inputRef.current?.click();

  return (
    <div
      onDragOver={(event) => event.preventDefault()}
      onDrop={onDrop}
      className='relative flex min-h-90 items-center justify-center overflow-hidden bg-[#1a1a1a]'
    >
      {imageUrl ? (
        <>
          <Image
            src={imageUrl}
            alt='Post preview'
            width={100}
            height={100}
            className='size-full object-contain'
          />
          <button
            type='button'
            onClick={openFilePicker}
            className='absolute right-4 bottom-4 flex cursor-pointer items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-black/90'
          >
            <ImagePlus size={18} /> Change photo
          </button>
        </>
      ) : showImageAi ? (
        <div className='w-full max-w-md px-6 text-center'>
          <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff7a00,#d300c5,#7638fa)]'>
            <WandSparkles size={30} />
          </div>
          <h3 className='text-xl font-semibold'>Create an image with AI</h3>
          <p className='mt-2 text-sm text-white/55'>
            Describe the scene, style, colors and mood you want.
          </p>
          <textarea
            value={imagePrompt}
            onChange={(event) => onImagePromptChange(event.target.value)}
            maxLength={300}
            autoFocus
            placeholder='A dreamy sunset over Bangkok, cinematic photography…'
            className='mt-5 h-28 w-full resize-none rounded-xl border border-white/15 bg-white/5 p-3 text-sm outline-none transition-colors placeholder:text-white/35 focus:border-[#0095f6]'
          />
          <button
            type='button'
            disabled={isGeneratingImage}
            onClick={onGenerateImage}
            className='mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#0095f6] py-2.5 text-sm font-semibold transition-colors hover:bg-[#1877f2] disabled:opacity-60'
          >
            {isGeneratingImage ? (
              <LoaderCircle className='animate-spin' size={18} />
            ) : (
              <Sparkles size={18} />
            )}
            {isGeneratingImage ? 'Creating…' : 'Generate image'}
          </button>
          <button
            type='button'
            onClick={() => onShowImageAiChange(false)}
            className='mt-3 cursor-pointer text-sm text-white/60 hover:text-white'
          >
            Back to upload
          </button>
        </div>
      ) : (
        <div className='px-6 text-center'>
          <ImagePlus className='mx-auto' size={72} strokeWidth={1.25} />
          <h3 className='mt-4 text-xl font-normal'>Drag photos here</h3>
          <div className='mt-6 flex flex-col items-center gap-3 sm:flex-row'>
            <button
              type='button'
              onClick={openFilePicker}
              className='flex cursor-pointer items-center gap-2 rounded-lg bg-[#0095f6] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
            >
              <Upload size={17} /> Select from computer
            </button>
            <button
              type='button'
              onClick={() => onShowImageAiChange(true)}
              className='flex cursor-pointer items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/15'
            >
              <Sparkles size={17} /> Create with AI
            </button>
          </div>
          {message && <p className='mt-4 text-sm text-red-400'>{message}</p>}
        </div>
      )}

      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={onFileChange}
        className='hidden'
      />
    </div>
  );
}
