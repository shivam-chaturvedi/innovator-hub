import { motion } from "framer-motion";
import { TrafficCone, Bot, Home, Thermometer } from "lucide-react";

const projects = [
  { icon: TrafficCone, title: "Smart Traffic Light Systems" },
  { icon: Bot, title: "Autonomous Line-Following Robots" },
  { icon: Home, title: "Smart Home Automation Systems" },
  { icon: Thermometer, title: "Environmental Monitoring Devices" },
];

const StudentProjectsSection = () => (
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
    </div>
  </section>
);

export default StudentProjectsSection;
