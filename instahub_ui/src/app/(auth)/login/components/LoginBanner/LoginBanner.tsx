import { InstagramColorIcon } from "@/assets/icon";
import Image from "next/image";
import { images } from "@/assets/images";

export default function LoginBanner() {
  return (
    <div className="col-span-7 px-10 py-10">
      <InstagramColorIcon size={100} />

      <div className="flex flex-col items-center justify-center py-4 pl-25">
        <span className="text-[44px] text-(--text-white)">
          See everyday moments from your
        </span>

        <span className="primary-color text-[44px]">close friends.</span>

        <Image
          src={images.loginPreview}
          alt="Instagram login preview"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
