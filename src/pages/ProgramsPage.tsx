import { motion } from "framer-motion";
import { Cpu, BookOpen, Users, TrafficCone, Bot, Home, Thermometer } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const coreComponents = [
  {
    icon: Cpu,
    title: "Free Arduino Robotics Kits",
    text: "Students receive kits with components to build hands-on projects — from basic circuits to autonomous robots.",
  },
  {
    icon: BookOpen,
    title: "Structured Beginner Curriculum",
    text: "Step-by-step curriculum designed to take students from the basics of electronics to building real systems.",
  },
  {
    icon: Users,
    title: "Teacher Training & Support",
    text: "Teachers are trained to lead robotics education independently, ensuring long-term program sustainability.",
  },
];

const projects = [
  { icon: TrafficCone, title: "Smart Traffic Light Systems" },
  { icon: Bot, title: "Autonomous Line-Following Robots" },
  { icon: Home, title: "Smart Home Automation Systems" },
  { icon: Thermometer, title: "Environmental Monitoring Devices" },
];

const ProgramsPage = () => (
  <PageLayout>
    {/* Core Components */}
    <section className="section-padding border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">Programs</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">Core Components</h1>
          <p className="text-muted-foreground">3 pillars that make Project ZŪL effective and impactful</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {coreComponents.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-background p-8 hover:bg-secondary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Student Projects */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Students Build</h2>
          <p className="text-muted-foreground max-w-xl">
            Students create capstone projects that demonstrate real engineering thinking.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="flex items-center gap-4 bg-background p-6 hover:bg-secondary/30 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm">{p.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ProgramsPage;
