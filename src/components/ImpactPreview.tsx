import { motion } from "framer-motion";
import { Users, GraduationCap, School } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import robotTall from "@/assets/robot-tall.png";

const stats = [
  { icon: School, value: "29+", label: "School Partners" },
  { icon: GraduationCap, value: "61+", label: "Teachers Trained" },
  { icon: Users, value: "4645+", label: "Inspired Students" },
];

const ImpactPreview = () => (
  <section className="section-padding border-b border-border">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">
          Our Impact
        </h2>
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
            <p className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">
              {s.value}
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-wider mt-2">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/impact">
          <Button variant="outline" className="text-xs font-heading">
            View Full Impact
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default ImpactPreview;
