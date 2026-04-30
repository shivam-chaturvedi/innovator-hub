import { motion } from "framer-motion";
import { Cpu, BookOpen, Users } from "lucide-react";

const components = [
  {
    icon: Cpu,
    title: "Free Arduino Robotics Kits",
    text: "Every participating student receives access to a beginner-friendly Arduino kit containing essential electronic components. These kits allow students to experiment with circuits, sensors, and programming while building their own projects.",
  },
  {
    icon: BookOpen,
    title: "Structured Beginner Curriculum",
    text: "Project ZŪL's curriculum introduces students to electronics and programming through step-by-step lessons. Starting with basic circuits, students gradually move toward building real engineering systems.",
  },
  {
    icon: Users,
    title: "Teacher Training & Support",
    text: "To ensure sustainability, teachers are trained to independently conduct robotics sessions within their schools. This allows STEM learning to continue long after the initial workshops.",
  },
];

const CoreComponentsSection = () => (
  <section id="programs" className="section-padding bg-[hsl(var(--navy-deep))]">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          Project ZŪL Core Components
        </h2>
        <p className="text-muted-foreground mb-2">3 pillars that make Project ZŪL effective and impactful</p>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          The program is designed as a complete ecosystem where students receive tools, structured guidance, and mentorship to explore technology through real projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {components.map((c, i) => (
          <motion.div
            key={c.title}
            className="bg-card p-8 border border-border card-glow text-center hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <c.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreComponentsSection;
