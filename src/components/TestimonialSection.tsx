import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, PlayCircle } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import ReelCard from "@/components/ReelCard";
import { communityFeedbackVideos } from "@/data/homeVideos";
import type { ChapterVideo } from "@/data/chaptersData";

const testimonials = [
  {
    text: "We need more such projects to improve our technical and practical skills so that we can indulge our students in this in a better way",
    author: "Miss Anupama Sharma",
    school: "JSS",
  },
  {
    text: "I really enjoyed to create a circuit... It is really an amazing project that will give students a different approach of learning",
    author: "Miss Minakshi Gupta",
    school: "DPS",
  },
  {
    text: "Learning experience was great as so much hand on activities were done ..really thankful",
    author: "Miss Radihka Handa",
    school: "JSS",
  },
  {
    text: "I am confident that we will collaborate on several exciting projects and that your time here — sharing your expertise and donating the kits — will be well worth the effort.",
    author: "Mr. Manabesh Laha",
    school: "Chingispur High School",
  },
  {
    text: "As a village school, we never imagined receiving the level of exposure that Project Zul has provided. We sincerely thank you for the training, the kits, and your dedicated efforts.",
    author: "Mr. Protap Ghosh",
    school: "Teor KA High School",
  },
  {
    text: "The students demonstrated great enthusiasm, and with the continued support of Project Zul, we hope they will be able to participate in national-level competitions.",
    author: "Mr. Subhajyoti Sinha",
    school: "Principal, Techno India Public School",
  },
];

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState<ChapterVideo | null>(null);

  return (
    <section className="section-padding border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
            Feedback From Our Community
          </h2>
          <p className="text-muted-foreground">
            What Teachers and Students Are Saying
          </p>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">
            The most meaningful impact of Project ZŪL is reflected in the experiences of the students and teachers who participate in the program.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-background p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Quote className="w-5 h-5 text-primary mb-4 rotate-180" />
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="w-8 h-px bg-border mb-3" />
              <p className="text-primary font-semibold text-xs uppercase tracking-wider">
                {t.author}
              </p>
              <p className="text-muted-foreground text-xs mt-1">{t.school}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Videos 
        <motion.div
          className="mt-10"
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
            {communityFeedbackVideos.map((video) => (
              <ReelCard key={video.id} video={video} onClick={() => setActiveVideo(video)} />
            ))}
          </div>
        </motion.div>
        */}
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
};

export default TestimonialSection;
