import Link from 'next/link';

const linkClassName =
  'text-(--text-primary) hover:underline focus-visible:outline-none focus-visible:underline';

export default function RegisterLegalText() {
  return (
    <div className="mt-4 space-y-2 text-sm leading-5 text-[#a8a8b3]">
      <p>
        People who use our service may have uploaded your contact information to
        InstaHub.{' '}
        <Link href="/help/contact-uploading" className={linkClassName}>
          Learn more.
        </Link>
      </p>

      <p>
        By tapping Submit, you agree to create an account and to InstaHub&apos;s{' '}
        <Link href="/terms" className={linkClassName}>
          Terms
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className={linkClassName}>
          Privacy Policy
        </Link>
        .
      </p>

      <p>
        The{' '}
        <Link href="/privacy" className={linkClassName}>
          Privacy Policy
        </Link>{' '}
        describes the ways we can use the information we collect when you create
        an account. For example, we use this information to provide, personalize
        and improve our products, including ads.
      </p>
    </div>
  );
}
