import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import ImageViewer, { GalleryImage } from "@/components/ImageViewer";
import kaavyaSasmo from "@/assets/kaavya-sasmo.jpg";
import chapterVideoThumbnail from "@/assets/thumbnail.png";
import chapterImagesRaw from "@/assets/chapters-images.txt?raw";
import { parseUrlList } from "@/lib/parseUrlList";

const chapterPhotoModules = import.meta.glob("/src/assets/chapters/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const chapterPhotos: GalleryImage[] = Array.from({ length: 9 }, (_, idx) => idx + 1)
  .map((num) => {
    const matchKey = Object.keys(chapterPhotoModules).find((key) => new RegExp(`/c${num}\\.`).test(key));
    if (!matchKey) return null;
    return {
      src: chapterPhotoModules[matchKey],
      alt: `Project Zūl chapter photo ${num}`,
    };
  })
  .filter((image): image is GalleryImage => Boolean(image));

const remoteChapterImages: GalleryImage[] = parseUrlList(chapterImagesRaw).map((src, index) => ({
  src,
  alt: `Project Zūl chapter photo ${chapterPhotos.length + index + 1}`,
}));

const allChapterPhotos: GalleryImage[] = [...chapterPhotos, ...remoteChapterImages];

const ChaptersPage = () => {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const openGallery = (index: number) => setGalleryIndex(index);
  const closeGallery = () => setGalleryIndex(null);
  const gotoNext = () => {
    if (galleryIndex === null) return;
    if (!allChapterPhotos.length) return;
    setGalleryIndex((prev) => (prev === null ? null : (prev + 1) % allChapterPhotos.length));
  };
  const gotoPrev = () => {
    if (galleryIndex === null) return;
    if (!allChapterPhotos.length) return;
    setGalleryIndex((prev) => (prev === null ? null : (prev - 1 + allChapterPhotos.length) % allChapterPhotos.length));
  };

  return (
    <PageLayout>
      <section className="section-padding pb-8 md:pb-10 border-b border-border space-y-6">
        <div className="container mx-auto max-w-5xl">
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">Chapters</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
                Project Zūl Chapters
              </h1>
              <div className="mt-4 text-muted-foreground max-w-3xl space-y-4">
                <p>
                  Following the success of Project Zūl in Jammu &amp; Kashmir, the Balurghat chapter is expanding
                  practical robotics learning to West Bengal. The Balurghat chapter brings hands-on robotics learning
                  to local schools through Arduino-based workshops. Students learn electronics, coding, and
                  problem-solving while building projects that address real challenges in their communities.
                </p>
                <p>
                  The program is designed to be self-sustaining. Teachers are trained, schools receive robotics kits,
                  and structured lesson plans help them continue the program independently.
                </p>
                <p>
                  So far, the initiative has reached 600+ students across 6 schools, trained 25+ teachers, and donated
                  40 Arduino kits, enabling schools to continue robotics education beyond the initial workshops.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold">Chapter Lead: Kaavya Majumder</h3>
                <div className="mt-3 text-muted-foreground text-sm space-y-3">
                  <p>
                    Kaavya is a student from Mumbai interested in how technology, sustainability, and systems thinking
                    intersect to solve real-world problems. Her work ranges from building platforms for sustainable
                    lifestyle and community like{" "}
                    <span className="font-bold text-white">Climate Crusaders,</span> to developing a device designed to
                    monitor groundwater levels.
                  </p>
                  <p>
                    Her academic interests focuses on modelling complex systems and networks —understanding how ideas,
                    behaviors, and environmental changes spread through interconnected systems.
                  </p>
                  <p>
                    Through Project Zūl, Kaavya hopes to inspire students to see technology not just as something they
                    study, but as a tool they can use to solve problems in their own communities.
                  </p>
                </div>
              </div>
              <img
                src={kaavyaSasmo}
                alt="Kaavya Majumder at SASMO 2025"
                className="w-40 h-40 object-cover rounded-none shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-3 md:pt-4 border-b border-border">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="flex items-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-semibold">
            <PlayCircle className="w-5 h-5" />
            <span>Video</span>
          </div>
          <div className="space-y-3">
            <h2 className="font-heading text-3xl font-bold">Chapter Story</h2>
            <p className="text-muted-foreground">
              Meet the students, mentors, and teachers who made Balurghat their own lab.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-none border border-border bg-muted">
            <video
              className="h-full w-full"
              controls
              poster={chapterVideoThumbnail}
              playsInline
              preload="metadata"
            >
              <source
                src="https://video.wixstatic.com/video/02b2cd_efe7c821083141f696802d27560260e2/1080p/mp4/file.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div>
            <div className="flex items-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-2">
              <span>Teaching Photos</span>
            </div>
            <h2 className="font-heading text-3xl font-bold">Field Notes from Balurghat</h2>
            <p className="text-muted-foreground max-w-3xl">
              A gallery of workshops, teacher training, and community showcases. Tap any image for a closer view.
            </p>
          </div>
          <div className="bg-blue-accent p-3 md:p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {allChapterPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  onClick={() => openGallery(index)}
                  className="relative w-full overflow-hidden border border-border bg-background shadow-sm"
                >
                  <div className="pb-[100%]" />
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-contain p-2"
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <ImageViewer
          images={allChapterPhotos}
          currentIndex={galleryIndex}
          onClose={closeGallery}
          onNext={gotoNext}
          onPrev={gotoPrev}
          showFooter={false}
        />
      </section>
    </PageLayout>
  );
};

export default ChaptersPage;
