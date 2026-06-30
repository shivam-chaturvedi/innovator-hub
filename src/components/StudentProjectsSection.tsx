import { useState } from "react";
import { motion } from "framer-motion";
import { TrafficCone, Bot, Home, Thermometer, PlayCircle } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import ReelCard from "@/components/ReelCard";
import { studentBuiltVideos } from "@/data/homeVideos";
import type { ChapterVideo } from "@/data/chaptersData";
import wb1 from "@/assets/wb-photo-1.jpg";
import wb2 from "@/assets/wb-photo-2.jpg";
import wb3 from "@/assets/wb-photo-3.jpg";
import wb4 from "@/assets/wb-photo-4.jpg";

const projects = [
  { icon: TrafficCone, title: "Smart Traffic Light Systems" },
  { icon: Bot, title: "Autonomous Line-Following Robots" },
  { icon: Home, title: "Smart Home Automation Systems" },
  { icon: Thermometer, title: "Environmental Monitoring Devices" },
];

const studentImages = [
  { src: wb1, alt: "Students working on robotics projects" },
  { src: wb2, alt: "Teacher training session" },
  { src: wb3, alt: "Students presenting their robots" },
  { src: wb4, alt: "Community engagement event" },
];

const StudentProjectsSection = () => {
  const [activeVideo, setActiveVideo] = useState<ChapterVideo | null>(null);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Students Build</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Students apply their learning by creating capstone projects that demonstrate engineering thinking and problem-solving.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="flex items-center gap-4 bg-card p-5 border border-border hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">{p.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-muted-foreground text-sm text-center mt-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          These projects encourage students to think about how technology can solve real challenges in their communities.
        </motion.p>

        {/* Featured Videos */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            <PlayCircle className="w-4 h-4" />
            <span>Featured Videos</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3" style={{ scrollbarWidth: "thin" }}>
            {studentBuiltVideos.map((video) => (
              <ReelCard key={video.id} video={video} onClick={() => setActiveVideo(video)} />
            ))}
          </div>
        </motion.div>

        {/* Featured Images — 4 in a row */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {studentImages.map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden border border-border"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
};

export default StudentProjectsSection;
