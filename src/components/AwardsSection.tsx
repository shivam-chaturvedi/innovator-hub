import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { getChapters } from "@/lib/chaptersStore";

const AwardsSection = () => {
  const allAwards = getChapters()
    .filter((c) => c.sections.awards && c.awards.length > 0)
    .flatMap((c) => c.awards.map((award) => ({ ...award, chapter: c.name })));

  if (allAwards.length === 0) return null;

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
          <div className="flex items-center justify-center gap-3 text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            <span>Awards &amp; Recognition</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
            Honored for Impact
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Recognitions received by Project Zūl chapters for their contributions to STEM education and youth innovation.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {allAwards.map((award, i) => (
            <motion.div
              key={award.id}
              className="border border-border bg-card p-5 space-y-2 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Trophy className="w-4 h-4 text-primary" />
              <p className="font-heading text-sm font-bold leading-snug">{award.title}</p>
              <p className="text-xs text-muted-foreground">{award.organization}</p>
              <div className="flex items-center justify-between pt-1">
                <p className="text-xs font-semibold text-primary">{award.year}</p>
                <p className="text-xs text-muted-foreground">{award.chapter} Chapter</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
