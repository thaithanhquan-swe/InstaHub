'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

interface ReelsNavigationProps {
  activeIndex: number;
  totalReels: number;
  onPrevious: () => void;
  onNext: () => void;
}

function ReelsNavigation({
  activeIndex,
  totalReels,
  onPrevious,
  onNext,
}: ReelsNavigationProps) {
  const isFirstReel = activeIndex === 0;
  const isLastReel = activeIndex === totalReels - 1;

  return (
    <div className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstReel}
        aria-label="Previous reel"
        className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-[#1c1f24] text-white shadow-lg transition hover:bg-[#2a2e35] active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronUp size={28} strokeWidth={2.2} />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isLastReel}
        aria-label="Next reel"
        className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-[#1c1f24] text-white shadow-lg transition hover:bg-[#2a2e35] active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronDown size={28} strokeWidth={2.2} />
      </button>
    </div>
  );
}

export default ReelsNavigation;
