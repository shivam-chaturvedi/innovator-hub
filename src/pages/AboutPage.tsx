import { motion } from "framer-motion";
import { Sparkles, Wrench, Rocket, Leaf } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const pillars = [
  {
    icon: Sparkles,
    title: "Unlocking Hidden Talent",
    text: "Opportunity is concentrated in cities, but talent exists everywhere. Project ZŪL ensures access reaches underserved regions.",
  },
  {
    icon: Wrench,
    title: "Learning by Building",
    text: "Students learn through experimentation by building circuits, programming, and creating real systems.",
  },
  {
    icon: Rocket,
    title: "Building the Future Talent Pipeline",
    text: "Early exposure to STEM builds problem-solving skills for future careers in robotics, AI, and engineering.",
  },
  {
    icon: Leaf,
    title: "Creating Sustainable STEM Ecosystems",
    text: "Teachers are trained and equipped so STEM education continues long-term.",
  },
];

const AboutPage = () => (
  <PageLayout>
    <section className="section-padding border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">About</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wider">What Is Project ZŪL?</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
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

    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">Why This Matters</h2>
          <p className="text-muted-foreground max-w-2xl">
            India has one of the world's largest youth populations and an ambitious vision to become a
            global leader in technology and innovation. Achieving that future depends on how early
            students gain access to practical STEM learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-background p-8 hover:bg-secondary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default AboutPage;
