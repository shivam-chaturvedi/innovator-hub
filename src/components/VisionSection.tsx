import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const VisionSection = () => (
  <section
    id="about"
    className="bg-[hsl(var(--navy-deep))] py-7 md:py-10"
  >
    <div className="container mx-auto max-w-3xl text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Eye className="w-10 h-10 text-primary mx-auto mb-2" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Our Vision</h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          To ensure that every student, regardless of location or resources, has the
          opportunity to explore science and technology through hands-on learning.
        </p>
      </motion.div>
    </div>
  </section>
);

export default VisionSection;
