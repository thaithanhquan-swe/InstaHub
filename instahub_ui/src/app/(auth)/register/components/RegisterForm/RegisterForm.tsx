'use client';

import Link from 'next/link';
import Input from '@/components/ui/input';
import BirthdaySelect from '../BirthdaySelect/BirthdaySelect';
import RegisterLegalText from '../RegisterLegalText/RegisterLegalText';

export default function RegisterForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      contact: formData.get('contact'),
      password: formData.get('password'),
      username: formData.get('username'),
      birthMonth: formData.get('birthMonth'),
      birthDay: formData.get('birthDay'),
      birthYear: formData.get('birthYear'),
    };

    console.log(payload);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="contact"
            className="mb-2 block text-[17px] font-medium text-(--text-white)"
          >
            Mobile number or email
          </label>

          <Input
            id="contact"
            name="contact"
            type="text"
            label="Mobile number or email"
            autoComplete="email"
            required
          />

          <p className="mt-2 text-sm leading-5 text-[#a8a8b3]">
            You may receive notifications from us. Learn why we ask for your
            contact information.
          </p>
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-[17px] font-medium text-(--text-white)"
          >
            Password
          </label>

          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="new-password"
            required
          />
        </div>

        <BirthdaySelect />

        <div>
          <label
            htmlFor="username"
            className="mb-2 block text-[17px] font-medium text-(--text-white)"
          >
            Username
          </label>

          <Input
            id="username"
            name="username"
            type="text"
            label="Username"
            autoComplete="username"
            required
          />
        </div>
      </div>

      <RegisterLegalText />

      <div className="mt-5 flex flex-col gap-4">
        <button
          type="submit"
          className="w-full cursor-pointer rounded-3xl bg-[#0064e0] py-2.5 font-medium text-(--text-white) transition-colors hover:bg-[#0095f6]"
        >
          Submit
        </button>

        <Link
          href="/login"
          className="block w-full rounded-3xl border border-(--text-primary) py-2.5 text-center font-medium text-(--text-primary) transition-colors hover:bg-(--border-color)"
        >
          I already have an account
        </Link>
      </div>
    </form>
  );
}
