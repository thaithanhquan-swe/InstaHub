import { ArrowLeft } from 'lucide-react';

interface CreatePostHeaderProps {
  canShare: boolean;
  canGoBack: boolean;
  isSharing: boolean;
  onBack: () => void;
  onShare: () => void;
}

export default function CreatePostHeader({
  canShare,
  canGoBack,
  isSharing,
  onBack,
  onShare
}: CreatePostHeaderProps) {
  return (
    <header className='relative flex h-12 shrink-0 items-center justify-center border-b border-white/15 px-4'>
      <button
        type='button'
        aria-label={canGoBack ? 'Back to media options' : 'Close create post'}
        onClick={onBack}
        className='absolute left-4 cursor-pointer rounded-full p-1 text-white transition-colors hover:bg-white/10'
      >
        <ArrowLeft size={24} />
      </button>

      <h2 className='font-semibold'>Create new post</h2>

      <button
        type='button'
        disabled={!canShare || isSharing}
        onClick={onShare}
        className='absolute right-4 cursor-pointer text-sm font-semibold text-[#0095f6] transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-35'
      >
        {isSharing ? 'Sharing…' : 'Share'}
      </button>
    </header>
  );
}
