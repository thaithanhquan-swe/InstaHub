import { InstagramColorIcon } from "@/assets/icon";
import Image from "next/image";
import { images } from "../../../assets/images";
import Input from "@/components/ui/input";

function LoginPage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 px-10 py-10">
        <InstagramColorIcon size={100} />

        <div className="flex flex-col items-center justify-center py-4 pl-25">
          <span className="text-[44px] text-(--text-white)">
            See everyday moments from your
          </span>
          <span className="text-primary text-[44px]">close friends.</span>

          <Image
            src={images.loginPreview}
            alt="Instagram login preview"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="col-span-5 border-l-2 border-(--border-color) bg-[#1f1f22] px-13 py-26.25">
        <span className="text-[17px] font-medium text-(--text-white)">
          Log into InstaHub
        </span>

        <div className="mt-10 flex w-full flex-col gap-3">
          <Input label="Mobile number, username or email" />

          <Input type="password" label="Password" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
