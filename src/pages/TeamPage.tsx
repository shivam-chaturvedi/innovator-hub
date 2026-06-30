import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import aravImg from "@/assets/arav-portrait-real.png";
import kaavyaImg from "@/assets/kaavya-portrait-real.png";

import vedImg from "@/assets/ved-portrait.jpg";
import virImg from "@/assets/vir-portrait.jpg";

interface Member {
  name: string;
  role: string;
  image?: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
}

const members: Member[] = [
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
  {
    name: "Ved Hariharan",
    role: "Chapter Head, Mumbai",
    image: vedImg,
    bio: "Hi, I'm Ved Hariharan, a student from Mumbai who believes that the best way to learn something is to build it. For many students, especially in underserved and rural communities, education rarely goes beyond memorisation. They never get the chance to experiment, fail, iterate, and figure things out for themselves. That hands-on process is where real confidence comes from. What draws me to Project Zūl is the opportunity to give students that experience, so they leave not just knowing more, but trusting themselves more.",
  },
  {
    name: "Vir Hariharan",
    role: "Chapter Head, Mumbai",
    image: virImg,
    bio: "Hi, I'm Vir Hariharan, a student from Mumbai who believes the most important thing we can help young people realize is that they can create, not just consume. Every day, students interact with a world built by someone else. But everything around us was made by people no different from them, and once students truly grasp that, something shifts. That realization is what draws me to Project Zūl. My goal is for students to leave not just with new skills, but with the confidence to see themselves as builders, people capable of improving and contributing to the world around them.",
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
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-28 h-28 object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 shrink-0"
                    loading="lazy"
                    width={341}
                    height={341}
                  />
                ) : (
                  <div className="w-28 h-28 shrink-0 bg-primary/10 border border-border flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-primary">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-xl mb-1">{m.name}</h3>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-4">{m.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mb-4">{m.bio}</p>
                  {(m.linkedin || m.instagram) && (
                    <div className="flex gap-4">
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary text-xs uppercase tracking-wider font-semibold hover:text-foreground transition-colors">LinkedIn</a>
                      )}
                      {m.instagram && (
                        <a href={m.instagram} target="_blank" rel="noopener noreferrer" className="text-primary text-xs uppercase tracking-wider font-semibold hover:text-foreground transition-colors">Instagram</a>
                      )}
                    </div>
                  )}
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
