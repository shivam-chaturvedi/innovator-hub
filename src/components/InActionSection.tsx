import { motion } from "framer-motion";
import inActionBanner from "@/assets/in-action-banner.png";

const InActionSection = () => (
  <section className="border-b border-border">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img
          src={inActionBanner}
          alt="Project ZŪL in action - students and teachers working with Arduino kits"
          className="w-full h-auto"
          loading="lazy"
          width={1565}
          height={562}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent flex items-end justify-center pb-6">
          <p className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-wider">
            In Action
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InActionSection;
