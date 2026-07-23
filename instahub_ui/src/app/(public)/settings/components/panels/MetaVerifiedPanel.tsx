'use client';

import { BadgeCheck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { profileData } from '@/data/settings';

const accountCategories = [
  { value: 'creator', label: 'Digital creator' },
  { value: 'public-figure', label: 'Public figure' },
  { value: 'business', label: 'Business or brand' },
  { value: 'organization', label: 'Organization' },
  { value: 'other', label: 'Other' }
];

export default function MetaVerifiedPanel() {
  const [legalName, setLegalName] = useState('');
  const [category, setCategory] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!legalName.trim() || !category || !reason.trim()) {
      setError('Please complete all fields.');
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className='mx-auto flex min-h-full w-full max-w-2xl items-center py-10'>
        <div className='w-full rounded-2xl border border-[#363a40] p-8 text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#58c322]/15 text-[#58c322]'>
            <CheckCircle2 size={34} />
          </div>
          <h1 className='mt-6 text-2xl font-bold'>Request submitted</h1>
          <p className='mx-auto mt-3 max-w-md leading-6 text-[#a8a8a8]'>
            Your verification request is now being reviewed.
          </p>

          <div className='mt-7 rounded-xl bg-[#26292e] p-4 text-left'>
            <p className='text-xs font-semibold tracking-wide text-[#a8a8a8] uppercase'>
              Request status
            </p>
            <div className='mt-2 flex items-center gap-2 font-semibold'>
              <span className='h-2.5 w-2.5 rounded-full bg-[#ffcc00]' />
              In review
            </div>
          </div>

          <button
            type='button'
            onClick={() => setIsSubmitted(false)}
            className='mt-6 cursor-pointer rounded-lg border border-[#363a40] px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-[#26292e]'
          >
            Edit request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <div className='flex items-start gap-4'>
        <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0095f6]/15 text-[#0095f6]'>
          <ShieldCheck size={30} />
        </div>
        <div>
          <h1 className='text-2xl font-bold'>Request verification</h1>
          <p className='mt-2 max-w-lg leading-6 text-[#a8a8a8]'>
            Tell us why your account should receive a verified badge.
          </p>
        </div>
      </div>

      <div className='mt-8 flex items-center gap-3 rounded-2xl bg-[#26292e] p-4'>
        <BadgeCheck className='shrink-0 text-[#0095f6]' size={24} />
        <div className='min-w-0'>
          <p className='truncate font-semibold'>@{profileData.username}</p>
          <p className='truncate text-sm text-[#a8a8a8]'>
            {profileData.displayName}
          </p>
        </div>
      </div>

      <form className='mt-9 space-y-6' onSubmit={handleSubmit}>
        <div>
          <label
            className='mb-3 block text-base font-semibold'
            htmlFor='legal-name'
          >
            Full name
          </label>
          <input
            id='legal-name'
            value={legalName}
            onChange={(event) => {
              setLegalName(event.target.value);
              setError('');
            }}
            placeholder='Enter your full name'
            autoComplete='name'
            className='h-12 w-full rounded-xl border border-[#363a40] bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-[#737373] focus:border-[#737373]'
          />
        </div>

        <div>
          <label
            className='mb-3 block text-base font-semibold'
            htmlFor='account-category'
          >
            Account category
          </label>
          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value ?? '');
              setError('');
            }}
          >
            <SelectTrigger
              id='account-category'
              aria-label='Account category'
              className='h-12 w-full cursor-pointer rounded-xl border-[#363a40] bg-transparent px-4 text-sm hover:bg-[#26292e]/60 focus-visible:border-[#737373] focus-visible:ring-0 data-popup-open:border-[#737373] data-popup-open:bg-[#26292e]/60'
            >
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent
              align='start'
              sideOffset={6}
              className='rounded-xl bg-[#26292e] p-1.5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-1 ring-white/10'
            >
              {accountCategories.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className='h-11 cursor-pointer rounded-lg px-3 text-sm text-white focus:bg-[#363a40] focus:text-white focus:**:text-white! data-selected:bg-[#363a40]'
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            className='mb-3 block text-base font-semibold'
            htmlFor='verification-reason'
          >
            Reason
          </label>
          <textarea
            id='verification-reason'
            value={reason}
            onChange={(event) => {
              setReason(event.target.value);
              setError('');
            }}
            maxLength={300}
            placeholder='Why should this account be verified?'
            className='h-28 w-full resize-none rounded-xl border border-[#363a40] bg-transparent p-4 text-sm outline-none transition-colors placeholder:text-[#737373] focus:border-[#737373]'
          />
          <p className='mt-2 text-right text-xs text-[#a8a8a8]'>
            {reason.length} / 300
          </p>
        </div>

        {error && (
          <p role='alert' className='text-sm text-[#ed4956]'>
            {error}
          </p>
        )}

        <div className='flex justify-end pt-4'>
          <button
            type='submit'
            className='cursor-pointer rounded-lg bg-[#0095f6] px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
          >
            Submit request
          </button>
        </div>
      </form>
    </div>
  );
}
