import { motion } from "framer-motion";
import { aravHomeMediaLinks, kaavyaHomeMediaLinks } from "@/data/media";

const MediaLogosSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-heading text-xs tracking-[0.3em] uppercase font-semibold text-primary mb-4">
          As Featured On
        </p>
      </motion.div>

      <div className="space-y-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {aravHomeMediaLinks.map((m, i) => (
            // Some logos are dark on transparent backgrounds, so they need a white backdrop.
            <motion.a
              key={m.name}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-24 h-16 md:w-28 md:h-20 p-2 hover:opacity-90 transition-opacity ${
                m.name === "The Telegraph India" || m.name === "Rising Kashmir"
                  ? "bg-white rounded-xl shadow-sm"
                  : ""
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img src={m.logo} alt={m.name} className="w-full h-full object-contain" loading="lazy" />
            </motion.a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {kaavyaHomeMediaLinks.map((m, i) => (
            <motion.a
              key={m.name}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-24 h-16 md:w-28 md:h-20 p-2 hover:opacity-90 transition-opacity"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img src={m.logo} alt={m.name} className="w-full h-full object-contain" loading="lazy" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MediaLogosSection;
