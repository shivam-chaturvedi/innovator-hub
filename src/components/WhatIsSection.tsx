import { motion } from "framer-motion";
import robotOrange from "@/assets/robot-orange.png";

const WhatIsSection = () => (
  <section className="section-padding border-b border-border">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 uppercase tracking-wider">
          What Is Project ZŪL?
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Project Zūl is an initiative designed to equip students throughout India (starting with
          Jammu &amp; Kashmir) with hands-on experience in robotics, coding, and electronics. By
          integrating Arduino-based learning, this program fosters creativity, problem-solving, and
          technical skills essential for the modern workforce. Through structured lessons and
          interactive projects, students will gain the confidence to innovate and apply STEM concepts
          in real-world applications.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhatIsSection;
