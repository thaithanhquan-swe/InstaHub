import Input from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto w-full max-w-140">
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
              Find your account
            </h1>

            <p className="mt-1 text-[15px] text-(--text-white)">
              Enter your mobile number, username or email.{" "}
              <Link
                href="/login/help"
                className="text-(--primary-color) hover:underline focus-visible:underline focus-visible:outline-none"
              >
                Can&apos;t reset your password?
              </Link>
            </p>
          </div>
        </header>

        <form className="mt-4">
          <Input label="Mobile number, username or email" />

          <p className="mt-4 text-[13px] text-(--text-white)">
            You may receive WhatsApp and SMS notifications from us for security
            and login purposes.
          </p>

          <button
            type="submit"
            className="mt-5 w-full cursor-pointer rounded-3xl bg-[#0064e0] py-2.5 font-medium text-(--text-white) transition-colors hover:bg-[#0095f6]"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
