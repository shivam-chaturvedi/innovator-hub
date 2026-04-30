import { motion } from "framer-motion";
import aravImg from "@/assets/arav-portrait.jpg";
import kaavyaImg from "@/assets/kaavya-portrait-real.png";

const members = [
  {
    name: "Arav Kaul",
    role: "Founder",
    image: aravImg,
    bio: "Arav Kaul is the founder of Project ZŪL — a student-led initiative working to make hands-on STEM education accessible in underserved regions of India. Driven by a belief that talent is universal but opportunity is not, Arav created the program to bring Arduino-based robotics kits, structured curriculum, and teacher training to schools where practical technology learning remains limited.",
  },
  {
    name: "Kaavya Majumder",
    role: "Chapter Head, West Bengal",
    image: kaavyaImg,
    bio: "Kaavya Majumder leads Project ZŪL's expansion in West Bengal, working to bring hands-on STEM education to schools across the region. With a deep commitment to equity in education and a passion for technology, Kaavya plays a key role in adapting the program to local needs, coordinating with schools, and ensuring impactful delivery on the ground.",
  },
];

const TeamSection = () => (
  <section id="team" className="section-padding bg-navy-deep">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Meet the Team</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            className="bg-card rounded-xl overflow-hidden border border-border card-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex flex-col items-center p-8">
              <img
                src={m.image}
                alt={m.name}
                className="w-32 h-32 rounded-full object-cover mb-5 border-2 border-primary/30"
                loading="lazy"
                width={512}
                height={512}
              />
              <h3 className="font-heading font-bold text-xl">{m.name}</h3>
              <p className="text-primary text-sm font-medium mb-4">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">{m.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
