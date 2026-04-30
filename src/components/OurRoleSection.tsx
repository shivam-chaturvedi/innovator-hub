import { motion } from "framer-motion";
import arduinoKit from "@/assets/arduino-kit.png";
import robotTall from "@/assets/robot-tall.png";

const components = [
  "Free Of Cost Arduino Kits",
  "Beginner Friendly Curriculum",
  "Hands-On Teacher Training Sessions",
];

const OurRoleSection = () => (
  <section className="section-padding border-b border-border">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">
          Our Role
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-10">
          Project Zūl provides schools with comprehensive electronics kits and curricula to foster
          hands-on learning, logical reasoning, and technological proficiency, equipping students
          with essential 21st-century skills.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img
              src={arduinoKit}
              alt="Project ZŪL Arduino kit"
              className="w-full max-w-xs mx-auto"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <p className="font-heading text-lg font-semibold mb-4">
              Project Zūl Has 3 Main Components:
            </p>
            <ul className="space-y-3">
              {components.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-2 h-2 bg-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OurRoleSection;
