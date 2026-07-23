import { ChevronDown } from 'lucide-react';

const footerLinks = [
  'Meta',
  'About',
  'Blog',
  'Jobs',
  'Help',
  'API',
  'Privacy',
  'Terms',
  'Locations',
  'Popular',
  'Instagram Lite',
  'Meta AI',
  'Threads',
  'Contact Uploading & Non-Users',
  'Meta Verified'
];

export default function SettingsFooter() {
  return (
    <footer className='mx-auto w-full max-w-5xl px-4 pt-12 pb-8 text-center text-xs text-[#a8a8a8]'>
      <nav
        aria-label='Settings footer'
        className='flex flex-wrap justify-center gap-x-5 gap-y-3'
      >
        {footerLinks.map((link) => (
          <button
            key={link}
            type='button'
            className='cursor-pointer transition-colors hover:text-white hover:underline'
          >
            {link}
          </button>
        ))}
      </nav>

      <div className='mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2'>
        <button
          type='button'
          className='flex cursor-pointer items-center gap-1 transition-colors hover:text-white'
        >
          English
          <ChevronDown aria-hidden='true' size={14} />
        </button>
        <p>© 2026 InstaHub from Meta</p>
      </div>
    </footer>
  );
}
