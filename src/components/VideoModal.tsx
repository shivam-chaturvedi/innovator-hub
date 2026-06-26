import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { X, Play } from "lucide-react";
import type { ChapterVideo } from "@/data/chaptersData";

interface VideoModalProps {
  video: ChapterVideo | null;
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!video) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = original;
    };
  }, [video]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          key="video-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="w-full max-w-2xl overflow-hidden border border-border bg-background shadow-2xl"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.2 }}
          >
            {/* Video area */}
            {video.src ? (
              <div className="relative aspect-video w-full bg-black">
                <video
                  key={video.src}
                  className="h-full w-full"
                  controls
                  autoPlay
                  playsInline
                  poster={video.poster}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              /* Placeholder when no video src is set */
              <div className="relative flex aspect-video w-full items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/50">
                    <Play className="h-7 w-7 translate-x-0.5" />
                  </div>
                  <p className="text-sm font-medium tracking-wide">Video coming soon</p>
                  {video.duration && (
                    <p className="text-xs text-muted-foreground/60">{video.duration}</p>
                  )}
                </div>
              </div>
            )}

            {/* Info row */}
            <div className="flex items-start justify-between gap-4 p-4">
              <div className="space-y-1">
                <h3 className="font-heading text-base font-bold leading-snug">{video.title}</h3>
                {video.duration && (
                  <p className="text-xs text-muted-foreground">{video.duration}</p>
                )}
                {video.description && (
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                )}
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close video"
                onClick={onClose}
                className="mt-0.5 shrink-0 rounded-full border border-border bg-background p-1.5 text-foreground hover:bg-muted focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
