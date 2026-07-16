"use client";

import { useState } from "react";
import { Check, ChevronRight, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { REPORT_REASONS } from "../../constants";

interface ReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  username?: string;
}

export default function ReportDialog({
  open,
  onOpenChange,
  username = "thv",
}: ReportDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen);

    if (!nextOpen) {
      setSubmitted(false);
      setSelectedReason(null);
    }
  };

  const handleSelectReason = (reason: string) => {
    setSelectedReason(reason);
    setSubmitted(true);

    console.log("Report reason:", reason);
  };

  const handleClose = () => {
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-[calc(100vw-32px)] gap-0 overflow-hidden rounded-3xl border border-(--border-color) bg-[#26282d] p-0 text-white sm:max-w-175!"
      >
        <DialogDescription className="sr-only">
          Report this post.
        </DialogDescription>

        {!submitted ? (
          <>
            <div className="relative flex h-14 items-center justify-center border-b border-(--border-color)">
              <DialogClose
                aria-label="Close report dialog"
                className="absolute left-4 cursor-pointer rounded-full p-1 transition hover:bg-(--hover-color)"
              >
                <X size={28} />
              </DialogClose>

              <DialogTitle className="text-base font-semibold">
                Report
              </DialogTitle>
            </div>

            <div className="border-b border-(--border-color) px-4 py-5">
              <p className="font-semibold">Why are you reporting this post?</p>
            </div>

            <div>
              {REPORT_REASONS.map((reason) => (
                <button
                  key={reason}
                  type="button"
                  onClick={() => handleSelectReason(reason)}
                  className="flex h-12.75 w-full cursor-pointer items-center justify-between border-b border-(--border-color) px-4 text-left text-sm transition-colors last:border-b-0 hover:bg-(--hover-color)"
                >
                  <span>{reason}</span>

                  <ChevronRight size={20} className="text-neutral-400" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center px-6 pt-9 pb-10 text-center">
              <div className="flex size-12 items-center justify-center rounded-full border-4 border-green-500 text-green-500">
                <Check size={28} strokeWidth={3} />
              </div>

              <DialogTitle className="mt-6 text-base font-semibold">
                Thanks for your feedback
              </DialogTitle>

              <p className="mt-2 max-w-132.5 text-sm leading-5 text-neutral-300">
                When you see something you don&apos;t like on InstaHub, you can
                report it if it doesn&apos;t follow our{" "}
                <button
                  type="button"
                  className="cursor-pointer text-[#4f67ff] hover:underline"
                >
                  Community Standards
                </button>
                , or you can remove the person who shared it from your
                experience.
              </p>

              {selectedReason && (
                <p className="sr-only">
                  Selected report reason: {selectedReason}
                </p>
              )}
            </div>

            <button
              type="button"
              className="flex h-13 w-full cursor-pointer items-center justify-between border-t border-(--border-color) px-4 text-left text-sm text-red-500 transition-colors hover:bg-(--hover-color)"
            >
              <span>Block {username}</span>
              <ChevronRight size={20} className="text-neutral-400" />
            </button>

            <button
              type="button"
              className="flex h-13 w-full cursor-pointer items-center justify-between border-t border-(--border-color) px-4 text-left text-sm transition-colors hover:bg-(--hover-color)"
            >
              <span>Learn more about our Community Standards</span>
              <ChevronRight size={20} className="text-neutral-400" />
            </button>

            <div className="border-t border-(--border-color) p-4">
              <button
                type="button"
                onClick={handleClose}
                className="h-12 w-full cursor-pointer rounded-xl bg-[#4b5fff] font-semibold text-(--text-white) transition hover:brightness-110"
              >
                Close
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
