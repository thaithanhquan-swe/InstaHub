import { ShieldCheck } from 'lucide-react';

export default function MetaVerifiedPanel() {
  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <div className='mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#0095f6]/15 text-[#0095f6]'>
        <ShieldCheck size={30} />
      </div>
      <h1 className='text-2xl font-bold'>Meta Verified</h1>
      <p className='mt-4 max-w-lg leading-6 text-[#a8a8a8]'>
        Build confidence with a verified badge, added account protection and
        direct support.
      </p>
      <button
        type='button'
        className='mt-8 cursor-pointer rounded-lg bg-[#0095f6] px-5 py-2.5 text-sm font-semibold hover:bg-[#1877f2]'
      >
        Learn more
      </button>
    </div>
  );
}
