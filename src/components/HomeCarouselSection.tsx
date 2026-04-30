import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ImageViewer, { GalleryImage } from "@/components/ImageViewer";
import wb1 from "@/assets/wb-photo-1.jpg";
import wb2 from "@/assets/wb-photo-2.jpg";
import wb3 from "@/assets/wb-photo-3.jpg";
import wb4 from "@/assets/wb-photo-4.jpg";
import kaavyaSasmo from "@/assets/kaavya-sasmo.jpg";
import homeImagesRaw from "@/assets/home_images.txt?raw";
import { parseUrlList } from "@/lib/parseUrlList";

const chapterPhotoModules = import.meta.glob("/src/assets/chapters/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const chapterCarouselImages: GalleryImage[] = Object.entries(chapterPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .slice(0, 8)
  .map(([, src], index) => ({ src, alt: `Chapter moment ${index + 1}` }));

const remoteHomeCarouselImages: GalleryImage[] = parseUrlList(homeImagesRaw).map((src, index) => ({
  src,
  alt: `Home carousel image ${index + 1}`,
}));

const fallbackCarouselImages: GalleryImage[] = [
  ...chapterCarouselImages,
  { src: wb1, alt: "Regional chapter workshop in West Bengal" },
  { src: wb2, alt: "Teacher training focused on robotics" },
  { src: wb3, alt: "Students presenting their creative robots" },
  { src: wb4, alt: "Large-scale community engagement event" },
  { src: kaavyaSasmo, alt: "Chapter lead Kaavya at SASMO conference" },
];

const carouselImages: GalleryImage[] = remoteHomeCarouselImages.length ? remoteHomeCarouselImages : fallbackCarouselImages;

const HomeCarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeSlide = carouselImages[activeIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % carouselImages.length));
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <section className="section-padding pt-10">
      <div className="container mx-auto max-w-5xl space-y-8">
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-2">Moments</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What the Journey Looks Like
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            We capture learning, experimentation, and celebration across chapters. Tap any image to
            see the full story.
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-8 w-full border-y border-border bg-card shadow-lg">
        <div className="relative mx-auto w-full max-w-none overflow-hidden">
          <div className="relative w-full bg-background h-[clamp(360px,64vh,780px)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.src}
                src={activeSlide.src}
                alt={activeSlide.alt}
                className="absolute inset-0 h-full w-full cursor-pointer object-contain"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
                onClick={() => openLightbox(activeIndex)}
              />
            </AnimatePresence>
          </div>

          <button
            aria-label="Previous carousel image"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 shadow-lg backdrop-blur focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
          >
            <ArrowLeft className="w-5 h-5 text-primary" />
          </button>

          <button
            aria-label="Next carousel image"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 shadow-lg backdrop-blur focus:outline-none focus-visible:ring focus-visible:ring-primary/50"
          >
            <ArrowRight className="w-5 h-5 text-primary" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="md:hidden rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
              {activeIndex + 1} / {carouselImages.length}
            </div>
            <div className="hidden md:flex max-w-[90vw] items-center gap-2 overflow-x-auto px-2">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-8 shrink-0 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary" : "bg-border/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageViewer
        images={carouselImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
      />
    </section>
  );
};

export default HomeCarouselSection;
