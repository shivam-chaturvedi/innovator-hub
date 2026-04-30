import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import aravImg from "@/assets/arav-portrait-real.png";
import kaavyaImg from "@/assets/kaavya-portrait-real.png";

const members = [
  {
    name: "Arav Kaul",
    role: "Founder",
    image: aravImg,
    bio: "Hi, I'm Arav — a student who's been building robots since the age of 7. What started as a childhood curiosity turned into a deep passion for technology, and now, a purpose. My father is from Jammu & Kashmir, and Project Zūl is my way of giving back to the land that shaped part of who I am. Through this initiative, I hope to empower teachers with simple, hands-on tools to bring robotics and STEM into their classrooms, planting seeds of innovation in the very communities that helped raise me.",
    linkedin: "https://www.linkedin.com/in/arav-kaul-42a20a32b/",
    instagram: "https://www.instagram.com/arav_kaul/",
  },
  {
    name: "Kaavya Majumder",
    role: "Chapter Head, West Bengal",
    image: kaavyaImg,
    bio: "Hi, I'm Kaavya Majumder, a student from Mumbai who believes that while talent exists everywhere, opportunity does not — and education has the power to bridge that gap. My interest in technology, robotics, and coding comes from a simple conviction: learning should go beyond textbooks and enable students to solve real problems in their own environments. Through hands-on STEM education, I aim to make problem-solving accessible, creative, and empowering, especially for students in underserved communities across India.",
    linkedin: "https://www.linkedin.com/in/kaavya-majumder/",
    instagram: "https://www.instagram.com/kaavya.majumder",
  },
];

const TeamPage = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">Team</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider">Meet the Team</h1>
        </motion.div>

        <div className="space-y-px bg-border">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              className="bg-background p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-28 h-28 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  width={341}
                  height={341}
                />
                <div>
                  <h3 className="font-heading font-bold text-xl mb-1">{m.name}</h3>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-4">{m.bio}</p>
                  <div className="flex gap-4">
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary text-xs uppercase tracking-wider font-semibold hover:text-foreground transition-colors">LinkedIn</a>
                    <a href={m.instagram} target="_blank" rel="noopener noreferrer" className="text-primary text-xs uppercase tracking-wider font-semibold hover:text-foreground transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default TeamPage;
