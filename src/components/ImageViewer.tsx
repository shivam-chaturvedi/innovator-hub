import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface ImageViewerProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  showFooter?: boolean;
}

const ImageViewer = ({ images, currentIndex, onClose, onPrev, onNext, showFooter = true }: ImageViewerProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const image = useMemo(() => {
    if (currentIndex === null) return null;
    return images[currentIndex] ?? null;
  }, [currentIndex, images]);

  const isOpen = Boolean(image);
  const showNav = images.length > 1;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the close button for accessibility.
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      lastActiveElementRef.current?.focus?.();
      lastActiveElementRef.current = null;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 px-0 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.button
            ref={closeButtonRef}
            aria-label="Close image viewer"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            className="absolute top-5 right-5 z-50 rounded-full border border-border bg-background/80 p-2 text-foreground shadow-lg backdrop-blur hover:bg-background/60 focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
          >
            <X className="h-5 w-5" />
          </motion.button>

          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="max-h-[99vh] max-w-[99vw] rounded-none object-contain shadow-2xl"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
          />

          {showNav && (
            <div
              className="absolute inset-y-0 left-4 flex items-center"
              onClick={(event) => {
                event.stopPropagation();
                onPrev();
              }}
            >
              <button
                aria-label="Previous image"
                className="rounded-full border border-border bg-background/80 p-3 text-primary shadow-lg backdrop-blur hover:bg-background/60 focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          )}

          {showNav && (
            <div
              className="absolute inset-y-0 right-4 flex items-center"
              onClick={(event) => {
                event.stopPropagation();
                onNext();
              }}
            >
              <button
                aria-label="Next image"
                className="rounded-full border border-border bg-background/80 p-3 text-primary shadow-lg backdrop-blur hover:bg-background/60 focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {showFooter && (
            <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 px-4">
              {image.caption && (
                <p className="mx-auto max-w-[70vw] text-center text-sm text-muted-foreground">{image.caption}</p>
              )}
              {showNav && currentIndex !== null && (
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  {currentIndex + 1} / {images.length}
                </p>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageViewer;
