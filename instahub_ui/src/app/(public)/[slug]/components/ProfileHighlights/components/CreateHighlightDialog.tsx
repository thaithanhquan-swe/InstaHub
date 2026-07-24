'use client';

import Image, { type StaticImageData } from 'next/image';
import { ArrowLeft, Check, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { ProfileHighlight } from '@/data/profiles';
import stories from '@/data/stories';
import { cn } from '@/lib/utils';

type ImageSource = StaticImageData | string;
type CreateHighlightStep = 'name' | 'stories' | 'cover';

interface ArchivedStory {
  id: string;
  image: ImageSource;
  day: number;
  month: string;
  year?: number;
}

interface CreateHighlightDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (highlight: ProfileHighlight) => void;
}

const archiveMonths = ['Jul', 'Jul', 'Jun', 'Jun', 'May', 'Apr', 'Mar', 'Mar'];

const archivedStories: ArchivedStory[] = stories
  .flatMap((story) =>
    story.media
      .filter((media) => media.type === 'image')
      .map((media) => ({
        id: `${story.id}-${media.id}`,
        image: media.url
      }))
  )
  .slice(0, 18)
  .map((story, index) => ({
    ...story,
    day: [12, 9, 23, 21, 18, 1, 8, 2, 26][index % 9],
    month: archiveMonths[index % archiveMonths.length],
    year: index === 0 ? 2026 : undefined
  }));

export default function CreateHighlightDialog({
  open,
  onOpenChange,
  onCreate
}: CreateHighlightDialogProps) {
  const [step, setStep] = useState<CreateHighlightStep>('name');
  const [name, setName] = useState('');
  const [selectedStoryIds, setSelectedStoryIds] = useState<string[]>([]);
  const [coverStoryId, setCoverStoryId] = useState<string | null>(null);

  const selectedStories = useMemo(
    () =>
      selectedStoryIds
        .map((id) => archivedStories.find((story) => story.id === id))
        .filter((story): story is ArchivedStory => Boolean(story)),
    [selectedStoryIds]
  );

  const coverStory =
    selectedStories.find((story) => story.id === coverStoryId) ??
    selectedStories[0];

  const resetForm = () => {
    setStep('name');
    setName('');
    setSelectedStoryIds([]);
    setCoverStoryId(null);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) resetForm();
  };

  const handleToggleStory = (storyId: string) => {
    setSelectedStoryIds((current) =>
      current.includes(storyId)
        ? current.filter((id) => id !== storyId)
        : [...current, storyId]
    );
  };

  const handleNext = () => {
    if (step === 'name' && name.trim()) {
      setStep('stories');
      return;
    }

    if (step === 'stories' && selectedStories.length > 0) {
      setCoverStoryId(selectedStories[0].id);
      setStep('cover');
    }
  };

  const handleBack = () => {
    setStep((current) => (current === 'cover' ? 'stories' : 'name'));
  };

  const handleDone = () => {
    if (!coverStory || !name.trim()) return;

    onCreate({
      id: Date.now(),
      title: name.trim(),
      image: coverStory.image
    });
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          'flex max-h-[calc(100vh-24px)] max-w-[445px] flex-col gap-0 overflow-hidden rounded-[26px] bg-[#24272b] p-0 text-white ring-0 sm:max-w-[445px]',
          step !== 'name' && 'h-[min(674px,calc(100vh-24px))]'
        )}
      >
        <DialogHeader
          step={step}
          onBack={handleBack}
          onClose={() => handleOpenChange(false)}
        />

        {step === 'name' && (
          <NameStep name={name} onNameChange={setName} onNext={handleNext} />
        )}

        {step === 'stories' && (
          <StoriesStep
            selectedStoryIds={selectedStoryIds}
            onToggleStory={handleToggleStory}
            onNext={handleNext}
          />
        )}

        {step === 'cover' && coverStory && (
          <CoverStep
            coverStory={coverStory}
            selectedStories={selectedStories}
            onSelectCover={setCoverStoryId}
            onDone={handleDone}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

function DialogHeader({
  step,
  onBack,
  onClose
}: {
  step: CreateHighlightStep;
  onBack: () => void;
  onClose: () => void;
}) {
  const title =
    step === 'name'
      ? 'New Highlight'
      : step === 'stories'
        ? 'Stories'
        : 'Select Cover';

  return (
    <header className='relative flex h-14 shrink-0 items-center justify-center border-b border-white/10 bg-[#24272b] px-4'>
      {step !== 'name' && (
        <button
          type='button'
          aria-label='Go back'
          onClick={onBack}
          className='absolute left-3 flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/5'
        >
          <ArrowLeft size={28} strokeWidth={1.7} />
        </button>
      )}

      <DialogTitle className='text-base font-bold'>{title}</DialogTitle>

      <button
        type='button'
        aria-label='Close'
        onClick={onClose}
        className='absolute right-3 flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/5'
      >
        <X size={32} strokeWidth={1.6} />
      </button>
    </header>
  );
}

function NameStep({
  name,
  onNameChange,
  onNext
}: {
  name: string;
  onNameChange: (name: string) => void;
  onNext: () => void;
}) {
  return (
    <>
      <div className='p-5'>
        <input
          autoFocus
          value={name}
          maxLength={30}
          onChange={(event) => onNameChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') onNext();
          }}
          placeholder='Highlight Name'
          aria-label='Highlight name'
          className='h-11 w-full rounded-md border border-[#737373] bg-transparent px-3 text-base outline-none placeholder:text-[#a8a8a8] focus:border-white'
        />
      </div>

      <button
        className={` border-t border-(--border-color) py-2.5 px-2
          ${name ? `text-blue-600 cursor-pointer` : `text-white`}`}
        disabled={!name.trim()}
        onClick={onNext}
      >
        Next
      </button>
    </>
  );
}

function StoriesStep({
  selectedStoryIds,
  onToggleStory,
  onNext
}: {
  selectedStoryIds: string[];
  onToggleStory: (storyId: string) => void;
  onNext: () => void;
}) {
  return (
    <>
      <div className='grid min-h-0 flex-1 grid-cols-3 content-start overflow-y-auto bg-black'>
        {archivedStories.map((story) => {
          const selected = selectedStoryIds.includes(story.id);

          return (
            <button
              type='button'
              key={story.id}
              aria-pressed={selected}
              aria-label={`${selected ? 'Deselect' : 'Select'} story from ${story.day} ${story.month}`}
              onClick={() => onToggleStory(story.id)}
              className='group relative w-36.25 h-63.75 cursor-pointer overflow-hidden border border-black bg-[#5a5a5a]'
            >
              <Image
                src={story.image}
                alt=''
                fill
                sizes='160px'
                className='object-cover transition-opacity group-hover:opacity-90'
              />

              <span className='absolute top-2 left-2 rounded-lg bg-white px-2 py-1 text-center text-xs leading-4 font-semibold text-black shadow-sm'>
                <span className='block text-sm'>{story.day}</span>
                <span className='block'>{story.month}</span>
                {story.year && <span className='block'>{story.year}</span>}
              </span>

              <span
                className={`absolute right-2 bottom-2 flex size-5.5 items-center justify-center rounded-full border ${
                  selected
                    ? 'border-[#0095f6] bg-[#0095f6]'
                    : 'border-white bg-black/20'
                }`}
              >
                {selected && <Check size={14} strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>

      <DialogAction
        label='Next'
        disabled={selectedStoryIds.length === 0}
        onClick={onNext}
      />
    </>
  );
}

function CoverStep({
  coverStory,
  selectedStories,
  onSelectCover,
  onDone
}: {
  coverStory: ArchivedStory;
  selectedStories: ArchivedStory[];
  onSelectCover: (storyId: string) => void;
  onDone: () => void;
}) {
  return (
    <>
      <div className='min-h-0 flex-1 overflow-y-auto bg-[#24272b]'>
        <div className='px-7 py-5'>
          <div className='relative mx-auto aspect-square w-full max-w-92 overflow-hidden rounded-full bg-[#151515]'>
            <Image
              src={coverStory.image}
              alt='Highlight cover preview'
              fill
              sizes='368px'
              className='object-cover'
            />
          </div>
        </div>

        <div className='flex min-h-28 gap-1 overflow-x-auto border-t border-white/10 bg-[#202327] p-2'>
          {selectedStories.map((story) => (
            <button
              type='button'
              key={story.id}
              aria-label='Use story as highlight cover'
              aria-pressed={story.id === coverStory.id}
              onClick={() => onSelectCover(story.id)}
              className={`relative aspect-[3/4] h-24 shrink-0 cursor-pointer overflow-hidden ${
                story.id === coverStory.id
                  ? 'ring-2 ring-[#0095f6]'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={story.image}
                alt=''
                fill
                sizes='72px'
                className='object-cover'
              />
            </button>
          ))}
        </div>
      </div>

      <DialogAction label='Done' onClick={onDone} />
    </>
  );
}

function DialogAction({
  label,
  disabled = false,
  onClick
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <div className='shrink-0 border-t border-white/10 bg-[#24272b]'>
      <button
        type='button'
        disabled={disabled}
        onClick={onClick}
        className='h-9 w-full cursor-pointer text-sm font-semibold text-[#4d5dff] transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:text-[#a8a8a8]'
      >
        {label}
      </button>
    </div>
  );
}
