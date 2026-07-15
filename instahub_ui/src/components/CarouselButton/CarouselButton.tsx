import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

function CarouselButton({
  direction,
  onClick,
  className,
}: CarouselButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous" : "Next"}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-md transition hover:scale-105",
        direction === "left" ? "left-3" : "right-3",
        className
      )}
    >
      <Icon size={16} />
    </button>
  );
}

export default CarouselButton;
