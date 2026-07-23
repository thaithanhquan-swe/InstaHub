'use client';

import { useState } from 'react';

export default function PrivacyPanel() {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <h1 className='mb-10 text-xl font-bold'>Account privacy</h1>
      <div className='flex items-center justify-between border-b border-white/10 pb-6'>
        <div className='pr-8'>
          <p className='font-semibold'>Private account</p>
          <p className='mt-2 text-sm leading-5 text-[#a8a8a8]'>
            When your account is private, only people you approve can see your
            photos and videos.
          </p>
        </div>
        <button
          type='button'
          role='switch'
          aria-checked={isPrivate}
          onClick={() => setIsPrivate((value) => !value)}
          className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
            isPrivate ? 'bg-[#0095f6]' : 'bg-[#737373]'
          }`}
        >
          <span
            className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${
              isPrivate ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
