import { motion } from "framer-motion";
import { useState } from "react";
import ImageViewer, { GalleryImage } from "@/components/ImageViewer";

const chapterPhotoModules = import.meta.glob("/src/assets/chapters/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos: GalleryImage[] = Object.entries(chapterPhotoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .slice(0, 4)
  .map(([, src], index) => ({
    src,
    alt: `Workshop photo ${index + 1}`,
  }));

const PhotoSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setSelectedIndex(index);
  const closeViewer = () => setSelectedIndex(null);
  const nextPhoto = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  };
  const prevPhoto = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          From the Ground
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              onClick={() => openViewer(i)}
              className="rounded-xl overflow-hidden aspect-[4/3] hover:scale-[1.01] transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <ImageViewer
        images={photos}
        currentIndex={selectedIndex}
        onClose={closeViewer}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </section>
  );
};

export default PhotoSection;
