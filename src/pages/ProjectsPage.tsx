import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, ExternalLink, Newspaper } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ReelCard from "@/components/ReelCard";
import VideoModal from "@/components/VideoModal";
import { defaultProjects, type Project } from "@/data/projectsData";
import type { ChapterVideo } from "@/data/chaptersData";

const ProjectSection = ({
  project,
  index,
  onPlayVideo,
}: {
  project: Project;
  index: number;
  onPlayVideo: (v: ChapterVideo) => void;
}) => (
  <motion.section
    className="border border-border bg-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
  >
    {/* Header */}
    <div className="p-6 border-b border-border">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary border border-primary/30 px-2 py-0.5">
          {project.category}
        </span>
        {project.chapter && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2 py-0.5">
            {project.chapter} Chapter
          </span>
        )}
        {project.year && (
          <span className="text-[10px] text-muted-foreground">{project.year}</span>
        )}
      </div>
      <h2 className="font-heading text-2xl font-bold mb-3">{project.title}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        {project.description}
      </p>
    </div>

    {/* Videos — up to 2, Instagram-sized */}
    {project.videos.length > 0 && (
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
          <PlayCircle className="w-4 h-4" />
          <span>Project Videos</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
          {project.videos.slice(0, 2).map((video) => (
            <ReelCard key={video.id} video={video} onClick={() => onPlayVideo(video)} />
          ))}
        </div>
      </div>
    )}

    {/* Images — up to 4 */}
    {project.images.length > 0 && (
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.images.slice(0, 4).map((img, i) => (
            <div key={i} className="overflow-hidden border border-border">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    )}

    {/* Media Coverage */}
    {project.mediaCoverage.length > 0 && (
      <div className="p-6">
        <div className="flex items-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
          <Newspaper className="w-4 h-4" />
          <span>Media Coverage</span>
        </div>
        <div className="space-y-3">
          {project.mediaCoverage.map((item) => (
            <div key={item.id} className="flex items-start gap-3 group">
              <div className="w-px h-full bg-border shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
                  {item.outlet}
                  {item.date && (
                    <span className="text-muted-foreground font-normal ml-2 normal-case tracking-normal">
                      · {item.date}
                    </span>
                  )}
                </p>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 mt-0.5 text-sm text-foreground hover:text-primary transition-colors group-hover:underline"
                  >
                    <span className="leading-snug">{item.title}</span>
                    <ExternalLink className="w-3 h-3 shrink-0 mt-0.5 opacity-60" />
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm text-foreground leading-snug">{item.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </motion.section>
);

const ProjectsPage = () => {
  const [activeVideo, setActiveVideo] = useState<ChapterVideo | null>(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Community
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Student Projects</h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Every Project Zūl workshop ends with students building something real. These are the capstone projects that demonstrate what happens when young people are given the tools, time, and belief to engineer solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects list */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl space-y-8">
          {defaultProjects.map((project, i) => (
            <ProjectSection
              key={project.id}
              project={project}
              index={i}
              onPlayVideo={setActiveVideo}
            />
          ))}
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </PageLayout>
  );
};

export default ProjectsPage;
