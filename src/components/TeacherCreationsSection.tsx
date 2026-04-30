import { motion } from "framer-motion";
import lightSensor from "@/assets/light-sensor.jpg";

const creations = [
  { title: "LED Blinker", desc: "Basic LED blinking circuit — the first step into electronics." },
  { title: "Night-Light", desc: "A light-sensitive automated night-light using Arduino." },
  { title: "Light Sensor", desc: "Sensor-based project measuring ambient light levels.", image: lightSensor },
];

const TeacherCreationsSection = () => (
  <section className="section-padding border-b border-border">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
          Teacher Creations
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A showcase of small but meaningful projects created by teachers — like blinking LEDs,
          light sensors, and smart nightlights. These activities reflect their journey into the
          world of robotics, one wire at a time.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {creations.map((c, i) => (
          <motion.div
            key={c.title}
            className="bg-background p-6 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {c.image && (
              <img
                src={c.image}
                alt={c.title}
                className="w-full aspect-[3/4] object-cover mb-4"
                loading="lazy"
              />
            )}
            <h3 className="font-heading font-bold text-lg uppercase tracking-wider mb-2">
              {c.title}
            </h3>
            <p className="text-muted-foreground text-sm">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeacherCreationsSection;
