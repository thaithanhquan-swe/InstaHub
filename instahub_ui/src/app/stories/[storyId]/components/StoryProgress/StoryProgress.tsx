import type { StoryMedia } from '@/data/stories';

interface StoryProgressProps {
  media: StoryMedia[];
  activeMediaIndex: number;
  progress: number;
}

function StoryProgress({
  media,
  activeMediaIndex,
  progress,
}: StoryProgressProps) {
  return (
    <div className="absolute top-4 right-4 left-4 z-20 flex gap-1">
      {media.map((item, index) => {
        let width = '0%';

        if (index < activeMediaIndex) {
          width = '100%';
        }

        if (index === activeMediaIndex) {
          width = `${progress}%`;
        }

        return (
          <div
            key={item.id}
            className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/35"
          >
            <div className="h-full rounded-full bg-white" style={{ width }} />
          </div>
        );
      })}
    </div>
  );
}

export default StoryProgress;
