import Input from "@/components/ui/input";
import SocialLogin from "../SocialLogin/SocialLogin";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="col-span-5 border-l-2 border-(--border-color) bg-[#1f1f22] px-13 py-26.25">
      <span className="text-[17px] font-medium text-(--text-white)">
        Log into InstaHub
      </span>

      <div className="mt-5 flex flex-col gap-3">
        <Input label="Mobile number, username or email" />

        <Input type="password" label="Password" />
      </div>

      <div className="mt-7 flex flex-col gap-3">
        <button
          type="submit"
          className="w-full cursor-pointer rounded-3xl bg-[#0064E0] py-2.5 text-(--text-white) hover:bg-[#0095f6]"
        >
          Log in
        </button>

        <Link
          href={"/forgot-password"}
          className="block w-full cursor-pointer rounded-3xl py-2.5 text-center text-(--text-white) hover:bg-(--border-color)"
        >
          Forgot password?
        </Link>
      </div>

      <div className="mt-11.5">
        <SocialLogin />
      </div>
    </div>
  );
}
