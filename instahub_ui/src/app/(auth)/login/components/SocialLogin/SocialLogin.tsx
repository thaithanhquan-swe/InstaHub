import FacebookIcon from "@/assets/icon";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl border border-[#3a3a3c] py-2.5 text-(--text-white) hover:bg-(--border-color)"
      >
        <FacebookIcon size={18} />
        Log in with Facebook
      </button>

      <Link
        href="/register"
        className="mt-4 block w-full rounded-3xl border border-(--primary-color) py-2.5 text-center text-(--primary-color) hover:bg-(--border-color)"
      >
        Create new account
      </Link>
    </>
  );
}
