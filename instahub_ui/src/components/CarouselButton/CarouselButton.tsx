"use client";

import { forwardRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

const CarouselButton = forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ direction, className, ...props }, ref) => {
    const Icon = direction === "left" ? ChevronLeft : ChevronRight;

    return (
      <button
        ref={ref}
        type="button"
        aria-label={direction === "left" ? "Previous" : "Next"}
        className={cn(
          "absolute top-1/2 z-20 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-black shadow transition hover:scale-105 disabled:hidden",
          direction === "left" ? "left-3" : "right-3",
          className
        )}
        {...props}
      >
        <Icon size={16} />
      </button>
    );
  }
);

CarouselButton.displayName = "CarouselButton";

export default CarouselButton;
