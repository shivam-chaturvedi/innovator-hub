import { motion } from "framer-motion";
import { Users, GraduationCap, School, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const stats = [
  { icon: School, value: "29+", label: "School Partners" },
  { icon: GraduationCap, value: "61+", label: "Teachers Trained" },
  { icon: Users, value: "4645+", label: "Inspired Students" },
];

const testimonials = [
  {
    text: "We need more such projects to improve our technical and practical skills so that we can indulge our students in this in a better way",
    author: "Miss Anupama Sharma",
    school: "JSS",
  },
  {
    text: "I really enjoyed to create a circuit... It is really an amazing project that will give students a different approach of learning",
    author: "Miss Minakshi Gupta",
    school: "DPS",
  },
  {
    text: "Learning experience was great as so much hand on activities were done ..really thankful",
    author: "Miss Radihka Handa",
    school: "JSS",
  },
  {
    text: "I am confident that we will collaborate on several exciting projects and that your time here — sharing your expertise and donating the kits — will be well worth the effort.",
    author: "Mr. Manabesh Laha",
    school: "Chingispur High School",
  },
  {
    text: "As a village school, we never imagined receiving the level of exposure that Project Zul has provided. We sincerely thank you for the training, the kits, and your dedicated efforts.",
    author: "Mr. Protap Ghosh",
    school: "Teor KA High School",
  },
  {
    text: "The students demonstrated great enthusiasm, and with the continued support of Project Zul, we hope they will be able to participate in national-level competitions.",
    author: "Mr. Subhajyoti Sinha",
    school: "Principal, Techno India Public School",
  },
];

const ImpactPage = () => (
  <PageLayout>
    <section className="section-padding border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">Impact</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">Our Impact</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-background p-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">{s.value}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 uppercase tracking-wider">
            What Teachers Are Saying
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-background p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Quote className="w-5 h-5 text-primary mb-4 rotate-180" />
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="w-8 h-px bg-border mb-3" />
              <p className="text-primary font-semibold text-xs uppercase tracking-wider">{t.author}</p>
              <p className="text-muted-foreground text-xs mt-1">{t.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ImpactPage;
