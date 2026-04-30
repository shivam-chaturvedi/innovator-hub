import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import PageLayout from "@/components/PageLayout";
import ImageViewer, { GalleryImage } from "@/components/ImageViewer";
import { aravMediaStories, kaavyaMediaStories, MediaStory } from "@/data/media";
import mediaUpperRaw from "@/assets/media-upper.txt?raw";
import { parseUrlList } from "@/lib/parseUrlList";

const MediaCard = ({
  story,
  highlight = false,
}: {
  story: MediaStory;
  highlight?: boolean;
}) => {
  const Tag = story.url ? motion.a : motion.div;
  const extraProps = story.url
    ? { href: story.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const logoOnWhite = story.name === "Rising Kashmir" || story.name === "The Telegraph India";
  return (
    <Tag
      {...extraProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group flex flex-col gap-5 rounded-[28px] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-900/40 transition hover:-translate-y-1 ${
        highlight ? "md:col-span-full" : ""
      }`}
    >
      <div className={`min-w-0 ${logoOnWhite ? "flex flex-col gap-3" : "flex items-center gap-4"} `}>
        {story.logo ? (
          <div
            className={
              logoOnWhite
                ? "inline-flex w-fit items-center justify-center rounded-xl bg-white p-2"
                : "inline-flex w-fit items-center justify-center"
            }
          >
            <img
              src={story.logo}
              alt={`${story.name} logo`}
              className="h-12 w-auto max-w-[160px] object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-foreground">
            {story.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase())
              .join("")}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground break-words">{story.name}</p>
          {story.date && <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{story.date}</p>}
        </div>
      </div>
      <div
        className={`${
          highlight ? "h-72 sm:h-80 md:h-[420px]" : "h-56 sm:h-60"
        } overflow-hidden rounded-none border border-border bg-background`}
      >
        {story.screenshot ? (
          <img
            src={story.screenshot}
            alt={`${story.name} article screenshot`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Screenshot coming soon
          </div>
        )}
      </div>
      <div className="space-y-3">
        <p className="font-heading text-lg font-semibold break-words">{story.title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed break-words">{story.summary}</p>
        {story.url && (
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            <ExternalLink className="w-3 h-3" />
            Read article
          </span>
        )}
      </div>
    </Tag>
  );
};

const MediaGroup = ({
  title,
  stories,
}: {
  title: string;
  stories: MediaStory[];
}) => {
  const highlight = stories.find((story) => story.highlight);
  const others = stories.filter((story) => !story.highlight);
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">{title}</p>
      </div>
      {highlight && (
        <MediaCard story={highlight} highlight />
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {others.map((story) => (
          <MediaCard key={story.name} story={story} />
        ))}
      </div>
    </div>
  );
};

const MediaPage = () => {
  const galleryImages: GalleryImage[] = useMemo(() => {
    const urls = parseUrlList(mediaUpperRaw);
    const seen = new Set<string>();
    const unique = urls.filter((url) => {
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });
    return unique.map((src, index) => ({ src, alt: `Media journey moment ${index + 1}` }));
  }, []);

  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const openGallery = (index: number) => setGalleryIndex(index);
  const closeGallery = () => setGalleryIndex(null);
  const gotoNext = () => {
    if (galleryIndex === null) return;
    if (!galleryImages.length) return;
    setGalleryIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  };
  const gotoPrev = () => {
    if (galleryIndex === null) return;
    if (!galleryImages.length) return;
    setGalleryIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  };

  return (
    <PageLayout>
    <section className="section-padding pb-10">
      <div className="container mx-auto max-w-6xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Media</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">As Featured On</h1>
          <p className="text-muted-foreground">
            Coverage across regional media showcasing Project Zūl’s efforts to expand practical robotics education in
            schools and communities.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="bg-[#0b3d7a] py-16">
      <div className="container mx-auto max-w-6xl space-y-6">
        <div className="space-y-2 text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Field Notes</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold">Moments That Shaped the Journey</h2>
          <p className="max-w-3xl text-sm text-white/70 leading-relaxed">
            From classrooms and workshops to recognitions and media coverage, these moments reflect the growing impact
            of Project Zūl
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              key={`gallery-${image.src}`}
              onClick={() => openGallery(index)}
              className="group relative overflow-hidden rounded-none border border-white/20 bg-white/5 shadow-[0_40px_70px_-40px_rgba(3,7,18,0.9)]"
            >
              <div className="pb-[100%]" />
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.01]"
              />
            </button>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding pt-6">
      <div className="container mx-auto max-w-6xl space-y-12">
        <MediaGroup title="Kaavya Majumder" stories={kaavyaMediaStories} />
        <MediaGroup title="Arav Kaul" stories={aravMediaStories} />
      </div>
    </section>
    <ImageViewer
      images={galleryImages}
      currentIndex={galleryIndex}
      onClose={closeGallery}
      onNext={gotoNext}
      onPrev={gotoPrev}
    />
  </PageLayout>
  );
};

export default MediaPage;
