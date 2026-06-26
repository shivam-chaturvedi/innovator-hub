import { motion } from "framer-motion";
import { ArrowRight, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { getChapters } from "@/lib/chaptersStore";

const chapters = getChapters();

const ChaptersPage = () => {
  return (
    <PageLayout>
      {/* ── Header ── */}
      <section className="section-padding pb-8 md:pb-10 border-b border-border space-y-6">
        <div className="container mx-auto max-w-5xl">
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">
              Chapters
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">
              Project Zūl Chapters
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              Project Zūl chapters bring hands-on robotics and STEM education to students
              across India. Each chapter is led by passionate students and teachers committed
              to building the next generation of innovators in their communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Chapter cards ── */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-6 md:gap-8">
            {chapters.map((chapter, i) => {
              const totalVideos =
                chapter.videoRow1.videos.length + chapter.videoRow2.videos.length;

              return (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/chapters/${chapter.id}`}
                    className="group flex flex-col md:flex-row border border-border bg-card hover:border-primary/40 transition-colors duration-200 overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div className="w-full md:w-1.5 h-1.5 md:h-auto bg-primary shrink-0" />

                    {/* Content */}
                    <div className="flex flex-1 flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-5 md:p-6">
                      {/* Text */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide">
                            {chapter.name}
                          </h2>
                          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold border border-border px-2 py-0.5">
                            {chapter.region}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">{chapter.tagline}</p>

                        {/* Stats */}
                        {chapter.stats.length > 0 && (
                          <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
                            {chapter.stats.map((stat) => (
                              <div key={stat.label} className="text-sm">
                                <span className="font-bold text-foreground">{stat.value}</span>
                                <span className="ml-1 text-muted-foreground">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Media count + arrow */}
                      <div className="flex items-center gap-6 shrink-0">
                        <div className="hidden md:flex flex-col gap-1 text-right text-xs text-muted-foreground">
                          <span>{totalVideos} videos</span>
                          <span>{chapter.gallery.images.length} photos</span>
                          <span>{chapter.awards.length} awards</span>
                        </div>
                        <ArrowRight className="h-5 w-5 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Admin panel link ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/admin/chapters"
            className="group inline-flex items-center gap-3 border border-border bg-card px-5 py-3 text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors duration-200"
          >
            <Settings className="h-4 w-4 shrink-0" />
            <span>Chapter Admin Panel — manage content &amp; visibility</span>
            <ArrowRight className="h-4 w-4 ml-auto transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ChaptersPage;
