import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { School, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const options = [
  { icon: School, label: "Bring Project ZŪL to Your School" },
  { icon: Users, label: "Volunteer or Partner With Us" },
  { icon: MapPin, label: "Start a Chapter in Your Region" },
];

const CTASection = () => (
  <section className="section-padding bg-[hsl(var(--navy-deep))]">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Help Us Build the Next Generation of Innovators
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Project ZŪL welcomes schools, educators, volunteers, and partners who want to support the mission of making hands-on STEM education accessible to more students.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {options.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to="/contact">
              <Button
                variant="outline"
                className="w-full h-auto py-8 px-6 flex flex-col gap-4 border-border text-foreground hover:border-primary/50 hover:bg-secondary"
              >
                <o.icon className="w-8 h-8 text-primary" />
                <span className="font-heading font-semibold text-sm">{o.label}</span>
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
