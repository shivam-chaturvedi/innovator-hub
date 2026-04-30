import { motion } from "framer-motion";
import { Newspaper, ExternalLink } from "lucide-react";

const MediaSection = () => (
  <section id="media" className="section-padding bg-navy-deep">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Newspaper className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Project ZŪL in the News
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Featured in national media for expanding access to STEM education in underserved regions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Media Coverage Coming Soon"].map((label, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-card rounded-lg px-5 py-3 border border-border text-sm text-muted-foreground"
            >
              <ExternalLink className="w-4 h-4 text-primary" />
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default MediaSection;
