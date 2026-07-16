"use client";

import Image, { type StaticImageData } from "next/image";
import {
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  MapPin,
  Users,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface AboutAccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  username: string;
  avatar: StaticImageData | string;
  dateJoined?: string;
  location?: string;
  sharedFollowers?: number;
  verifiedDate?: string;
}

export default function AboutAccountDialog({
  open,
  onOpenChange,
  username,
  avatar,
  dateJoined = "December 2021",
  location = "South Korea",
  sharedFollowers = 6,
  verifiedDate = "December 2021",
}: AboutAccountDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-[calc(100vw-32px)] gap-0 overflow-hidden rounded-3xl border border-(--border-color) bg-[#24262b] p-0 text-(--text-white) sm:max-w-140!"
      >
        <DialogDescription className="sr-only">
          Information about this account.
        </DialogDescription>

        <DialogTitle className="relative flex h-10.75 items-center justify-center border-b border-(--border-color) text-base font-semibold">
          About this account
        </DialogTitle>

        <div className="max-h-[75vh] overflow-y-auto">
          <div className="flex flex-col items-center px-6 pt-4 text-center">
            <div className="relative size-20 overflow-hidden rounded-full bg-neutral-700">
              <Image
                src={avatar}
                alt={`${username} profile`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="mt-3 flex items-center gap-1">
              <h3 className="font-semibold">{username}</h3>

              <BadgeCheck size={17} fill="var(--text-primary)" color="white" />
            </div>

            <p className="mt-2 max-w-117.5 text-[12px] leading-5 text-neutral-400">
              To help keep our community authentic, we&apos;re showing
              information about profiles on InstaHub.{" "}
              <button
                type="button"
                className="font-semibold text-neutral-200 hover:underline"
              >
                See why this information is important.
              </button>
            </p>
          </div>

          <div className="mt-7 space-y-6 px-4">
            <AccountInfoRow
              icon={<CalendarDays size={24} />}
              title="Date joined"
              description={dateJoined}
            />

            <AccountInfoRow
              icon={<MapPin size={24} />}
              title="Account based in"
              description={location}
            />

            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-4 text-left"
            >
              <Users size={24} className="shrink-0" />

              <span className="flex flex-1 items-center justify-between">
                <span>Accounts with followers</span>

                <span className="flex items-center gap-2 text-neutral-400">
                  {sharedFollowers}
                  <ChevronRight size={19} />
                </span>
              </span>
            </button>

            <AccountInfoRow
              icon={<BadgeCheck size={24} />}
              title="Verified"
              description={verifiedDate}
            />
          </div>

          <div className="space-y-4 px-4 pt-5 pb-4 text-[12px] leading-5 text-neutral-400">
            <p>
              The verified badge means an account has been verified based on
              their activity across our products and information or documents
              they provide. Some verified accounts are owned by a notable
              person, brand or entity, while others subscribe to Meta Verified.
            </p>

            <p>
              With a Meta Verified subscription, you get a verified badge,
              proactive account protection, access to direct account support and
              more.{" "}
              <button
                type="button"
                className="font-semibold text-neutral-200 hover:underline"
              >
                Learn more
              </button>
            </p>
          </div>
        </div>

        <div className="border-t border-(--border-color)">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-12 w-full cursor-pointer transition hover:bg-(--hover-color)"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface AccountInfoRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AccountInfoRow({ icon, title, description }: AccountInfoRowProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="shrink-0">{icon}</span>

      <div>
        <p className="text-base">{title}</p>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
