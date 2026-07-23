'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Input from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { genderOptions, profileData } from '@/data/settings';

export default function EditProfilePanel() {
  const [profileImage, setProfileImage] = useState(profileData.image);
  const [bio, setBio] = useState('');
  const [passwords, setPasswords] = useState({
    current: '',
    next: '',
    confirm: ''
  });
  const [passwordMessage, setPasswordMessage] = useState<{
    type: 'error' | 'success';
    text: string;
  } | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const photo = event.target.files?.[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(photo);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPasswords((current) => ({ ...current, [name]: value }));
    setPasswordMessage(null);
  };

  const handlePasswordSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!passwords.current || !passwords.next || !passwords.confirm) {
      setPasswordMessage({
        type: 'error',
        text: 'Please fill in all password fields.'
      });
      return;
    }

    if (passwords.next.length < 8) {
      setPasswordMessage({
        type: 'error',
        text: 'New password must contain at least 8 characters.'
      });
      return;
    }

    if (passwords.next !== passwords.confirm) {
      setPasswordMessage({
        type: 'error',
        text: 'New passwords do not match.'
      });
      return;
    }

    setPasswords({ current: '', next: '', confirm: '' });
    setPasswordMessage({
      type: 'success',
      text: 'Your password has been updated.'
    });
  };

  return (
    <div className='mx-auto w-full max-w-2xl py-10'>
      <h1 className='mb-10 text-xl font-bold'>Edit profile</h1>

      <div className='mb-8 flex items-center rounded-2xl bg-[#26292e] p-4'>
        <Image
          src={profileImage}
          alt='Profile'
          width={56}
          height={56}
          className='h-14 w-14 rounded-full object-cover'
        />
        <div className='ml-4 min-w-0 flex-1'>
          <p className='truncate text-base font-semibold'>
            {profileData.username}
          </p>
          <p className='truncate text-sm text-[#a8a8a8]'>
            {profileData.displayName}
          </p>
        </div>
        <input
          ref={photoInputRef}
          type='file'
          accept='image/*'
          onChange={handlePhotoChange}
          className='hidden'
        />
        <button
          type='button'
          onClick={() => photoInputRef.current?.click()}
          className='cursor-pointer rounded-lg bg-[#0095f6] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
        >
          Change photo
        </button>
      </div>

      <section className='my-5'>
        <h2 className='mb-5 text-lg font-bold'>Personal details</h2>
        <div className='overflow-hidden rounded-2xl border border-[#363a40]'>
          <button
            type='button'
            className='flex w-full cursor-pointer items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-[#26292e]/60'
          >
            <span className='min-w-0 flex-1'>
              <span className='block text-base font-semibold'>
                Contact info
              </span>
              <span className='block truncate text-sm text-[#a8a8a8]'>
                {profileData.email}, {profileData.phone}
              </span>
            </span>
            <ChevronRight
              aria-hidden='true'
              className='h-5 w-5 shrink-0 text-[#a8a8a8]'
            />
          </button>

          <button
            type='button'
            className='flex w-full cursor-pointer items-center gap-4 border-t border-[#363a40] px-4 py-3 text-left transition-colors hover:bg-[#26292e]/60'
          >
            <span className='min-w-0 flex-1'>
              <span className='block text-base font-semibold'>Birthday</span>
              <span className='block text-sm text-[#a8a8a8]'>
                {profileData.birthday}
              </span>
            </span>
            <ChevronRight
              aria-hidden='true'
              className='h-5 w-5 shrink-0 text-[#a8a8a8]'
            />
          </button>
        </div>
      </section>

      <label className='mb-3 block text-base font-semibold' htmlFor='bio'>
        Bio
      </label>
      <textarea
        id='bio'
        maxLength={150}
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        placeholder='Bio'
        className='h-24 w-full resize-none rounded-xl border border-[#363a40] bg-transparent p-4 text-sm outline-none transition-colors placeholder:text-[#737373] focus:border-[#737373]'
      />
      <p className='mt-2 text-right text-xs text-[#a8a8a8]'>
        {bio.length} / 150
      </p>

      <label
        className='mt-7 mb-2 block text-base font-semibold'
        htmlFor='gender'
      >
        Gender
      </label>
      <Select defaultValue='male'>
        <SelectTrigger
          id='gender'
          aria-label='Gender'
          className='h-12 w-full cursor-pointer rounded-xl border-[#363a40] bg-transparent px-4 text-sm hover:bg-[#26292e]/60 focus-visible:border-[#737373] focus-visible:ring-0 data-popup-open:border-[#737373] data-popup-open:bg-[#26292e]/60 [&_svg]:text-[#a8a8a8] [&_svg]:transition-transform data-popup-open:[&_svg]:rotate-180'
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          align='start'
          sideOffset={6}
          className='rounded-xl bg-[#26292e] p-1.5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-1 ring-white/10'
        >
          {genderOptions.map((option) => (
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
      <p className='mt-2 text-xs text-[#a8a8a8]'>
        This won&apos;t be part of your public profile.
      </p>

      <div className='mt-8 flex justify-end'>
        <button
          type='button'
          className='cursor-pointer rounded-lg bg-[#0095f6] px-8 py-2.5 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
        >
          Submit
        </button>
      </div>

      <section className='mt-12 border-t border-[#26292e] py-10'>
        <h2 className='text-lg font-bold'>Change password</h2>
        <p className='mt-1 text-sm text-[#a8a8a8]'>
          Choose a strong password that you don&apos;t use elsewhere.
        </p>

        <form className='mt-6 space-y-4' onSubmit={handlePasswordSubmit}>
          <Input
            name='current'
            type='password'
            label='Current password'
            autoComplete='current-password'
            value={passwords.current}
            onChange={handlePasswordChange}
          />
          <Input
            name='next'
            type='password'
            label='New password'
            autoComplete='new-password'
            value={passwords.next}
            onChange={handlePasswordChange}
          />
          <Input
            name='confirm'
            type='password'
            label='Confirm new password'
            autoComplete='new-password'
            value={passwords.confirm}
            onChange={handlePasswordChange}
          />

          {passwordMessage && (
            <p
              role='status'
              className={`text-sm ${
                passwordMessage.type === 'error'
                  ? 'text-[#ed4956]'
                  : 'text-[#58c322]'
              }`}
            >
              {passwordMessage.text}
            </p>
          )}

          <div className='flex justify-end pt-2'>
            <button
              type='submit'
              className='cursor-pointer rounded-lg bg-[#0095f6] px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#1877f2]'
            >
              Change password
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
