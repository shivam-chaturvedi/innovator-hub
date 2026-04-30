import { motion } from "framer-motion";
import { Sparkles, Wrench, Rocket, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Unlocking Hidden Talent",
    text: "Innovation ecosystems in India are often concentrated in major cities, but curiosity and talent exist everywhere. By introducing robotics and electronics in underserved schools, Project ZŪL ensures that opportunity reaches students across towns and communities.",
  },
  {
    icon: Wrench,
    title: "Learning by Building",
    text: "In many classrooms, science is taught primarily through textbooks. Project ZŪL introduces a different approach: learning through experimentation. Students build circuits, program microcontrollers, and develop working prototypes, turning theory into real-world understanding.",
  },
  {
    icon: Rocket,
    title: "Building the Future Talent Pipeline",
    text: "Industries increasingly rely on fields such as robotics, electronics, automation, and artificial intelligence. Early exposure to engineering concepts helps students develop problem-solving skills and confidence that can shape future careers in technology.",
  },
  {
    icon: Leaf,
    title: "Creating Sustainable STEM Ecosystems",
    text: "Project ZŪL focuses on long-term impact by training teachers and providing robotics kits so that STEM learning can continue even after the initial workshops are completed.",
  },
];

const WhyMattersSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          India has one of the world's largest youth populations and an ambitious vision to become a
          global leader in technology and innovation. Achieving that future depends not only on investment or policy, but on how early
          students gain access to practical STEM learning. Project ZŪL works to bridge this gap by bringing hands-on robotics education to schools where such opportunities are often limited.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-card p-6 border border-border hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyMattersSection;
