"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

import { Post } from "@/types/post.types";
import PostDialogMedia from "./components/PostDialogMedia/PostDialogMedia";
import PostDialogHeader from "./components/PostDialogHeader/PostDialogHeader";
import PostDialogComments from "./components/PostDialogComments/PostDialogComments";
import PostDialogActions from "./components/PostDialogActions/PostDialogActions";
import { X } from "lucide-react";

interface PostCommentsDialogProps {
  post: Post;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function PostCommentsDialog({
  post,
  open,
  onOpenChange,
}: PostCommentsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <button
        type="button"
        aria-label="Close"
        onClick={() => onOpenChange(false)}
        className="fixed top-4 right-4 z-100 flex cursor-pointer items-center justify-center text-white transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        <X size={28} strokeWidth={1.25} />
      </button>
      <DialogContent
        showCloseButton={false}
        className="h-[90vh] w-[calc(100vw-32px)] max-w-259.25! gap-0 overflow-hidden rounded-none border-none bg-[#24262b] p-0 text-white sm:max-w-259.25!"
      >
        <DialogTitle className="sr-only">
          Post by {post.author.username}
        </DialogTitle>

        <DialogDescription className="sr-only">
          View post details and comments
        </DialogDescription>

        <div className="grid h-full w-full grid-cols-[minmax(0,1fr)_420px]">
          <PostDialogMedia post={post} />

          <div className="flex min-h-0 min-w-0 flex-col bg-[#24262b]">
            <PostDialogHeader author={post.author} />

            <PostDialogComments post={post} />

            <PostDialogActions likes={post.likes} createdAt={post.createdAt} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PostCommentsDialog;
