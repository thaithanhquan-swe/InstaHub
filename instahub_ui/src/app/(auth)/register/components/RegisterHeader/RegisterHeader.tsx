import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function RegisterHeader() {
  return (
    <header>
      <Link
        href="/login"
        aria-label="Back to login"
        className="-ml-2 inline-flex size-10 items-center justify-center rounded-xl text-[#a8a8b3] transition-colors hover:bg-(--border-color)/50 hover:text-white"
      >
        <ChevronLeft size={28} />
      </Link>

      <div className="mt-3">
        <h1 className="text-2xl font-semibold text-(--text-white)">
          Get started on InstaHub
        </h1>

        <p className="mt-1 text-[15px] text-(--text-white)">
          Sign up to see photos and videos from your friends.
        </p>
      </div>
    </header>
  );
}
