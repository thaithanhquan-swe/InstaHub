export default function BlockedPanel() {
  return (
    <div className='flex h-full w-full flex-col py-10'>
      <div className='mx-auto w-full max-w-2xl'>
        <h1 className='text-xl font-bold'>Blocked accounts</h1>
        <p className='mt-8 text-base'>
          You can block people anytime from their profiles.
        </p>
      </div>
      <p className='mt-28 text-center text-sm'>
        You haven&apos;t blocked anyone.
      </p>
    </div>
  );
}
