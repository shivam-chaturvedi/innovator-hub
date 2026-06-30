import { Play } from "lucide-react";
import type { ChapterVideo } from "@/data/chaptersData";

interface ReelCardProps {
  video: ChapterVideo;
  onClick: () => void;
}

const ReelCard = ({ video, onClick }: ReelCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="group relative flex w-36 shrink-0 flex-col overflow-hidden border border-border bg-muted focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
    style={{ aspectRatio: "9/16" }}
    aria-label={`Play ${video.title}`}
  >
    {video.poster ? (
      <img
        src={video.poster}
        alt={video.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
    )}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
        <Play className="h-4 w-4 translate-x-0.5 text-white" />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
      <p className="line-clamp-2 text-left text-xs font-semibold leading-tight text-white">
        {video.title}
      </p>
      <p className="mt-0.5 text-left text-[10px] text-white/70">{video.duration}</p>
    </div>
  </button>
);

export default ReelCard;
