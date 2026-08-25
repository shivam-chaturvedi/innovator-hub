import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => (
  <section className="section-padding bg-[hsl(var(--navy-deep))] border-y border-border">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Quote className="w-8 h-8 text-primary mx-auto mb-6 rotate-180" />
        <blockquote className="text-lg md:text-2xl font-heading font-medium leading-relaxed text-foreground italic mb-6">
          "Education has the power to bridge opportunity gaps. Project ZŪL is an effort to bring
          hands-on technology learning to students who might otherwise never experience it."
        </blockquote>
        <div className="w-12 h-px bg-primary mx-auto mb-4" />
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Arav Kaul</p>
        <p className="text-xs text-muted-foreground mt-1">Founder, Project ZŪL</p>
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <blockquote className="text-lg md:text-2xl font-heading font-medium leading-relaxed text-foreground italic mb-6">
          "Talent exists across the country. The real challenge is ensuring that opportunity reaches it."
        </blockquote>
        <div className="w-12 h-px bg-primary mx-auto mb-4" />
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Kaavya Majumder</p>
        <p className="text-xs text-muted-foreground mt-1">Project Lead & Chapter Head - West Bengal</p>
      </motion.div>
    </div>
  </section>
);

export default QuoteSection;
