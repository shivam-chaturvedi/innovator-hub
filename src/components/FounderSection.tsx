import { motion } from "framer-motion";
import aravImg from "@/assets/arav-portrait-real.png";
import kaavyaImg from "@/assets/kaavya-portrait-real.png";
import vedImg from "@/assets/ved-portrait.jpg";
import virImg from "@/assets/vir-portrait.jpg";

const FounderSection = () => (
  <section id="team" className="section-padding border-b border-border">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
          Meet the Team
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Project ZŪL is driven by students and educators who believe that access to practical STEM education should not depend on geography or resources.
        </p>
      </motion.div>

      {/* Arav */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 items-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1">
          <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Founder
          </h3>
          <h3 className="font-heading text-xl font-semibold mb-4">
            Arav Kaul
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Arav — a student who's been building robots since the age of 7. What started as
            a childhood curiosity turned into a deep passion for technology, and now, a purpose.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            My father is from Jammu &amp; Kashmir, and Project Zūl is my way of giving back to the
            land that shaped part of who I am. Through this initiative, I hope to empower teachers
            with simple, hands-on tools to bring robotics and STEM into their classrooms, planting
            seeds of innovation in the very communities that helped raise me.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.linkedin.com/in/arav-kaul-42a20a32b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/arav_kaul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Instagram
            </a>
          </div>
        </div>
        <img
          src={aravImg}
          alt="Arav Kaul, Founder of Project ZŪL"
          className="w-60 h-60 object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Kaavya */}
      <motion.div
        className="flex flex-col md:flex-row-reverse gap-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1">
          <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Chapter Head
          </h3>
          <h3 className="font-heading text-xl font-semibold mb-4">
            Kaavya Majumder
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Kaavya Majumder, a student from Mumbai who believes that while talent exists
            everywhere, opportunity does not — and education has the power to bridge that gap. My
            interest in technology, robotics, and coding comes from a simple conviction: learning
            should go beyond textbooks and enable students to solve real problems in their own
            environments. Through hands-on STEM education, I aim to make problem-solving accessible,
            creative, and empowering, especially for students in underserved communities across India.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.linkedin.com/in/kaavya-majumder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/kaavya.majumder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Instagram
            </a>
          </div>
        </div>
        <img
          src={kaavyaImg}
          alt="Kaavya Majumder, Chapter Head West Bengal"
          className="w-60 h-60 object-cover"
          loading="lazy"
        />
      </motion.div>
      {/* Ved */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 items-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1">
          <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Chapter Head, Mumbai
          </h3>
          <h3 className="font-heading text-xl font-semibold mb-4">
            Ved Hariharan
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Ved Hariharan, a student from Mumbai who believes that the best way to learn
            something is to build it. For many students, especially in underserved and rural
            communities, education rarely goes beyond memorisation. They never get the chance to
            experiment, fail, iterate, and figure things out for themselves. That hands-on process
            is where real confidence comes from. What draws me to Project Zūl is the opportunity to
            give students that experience, so they leave not just knowing more, but trusting
            themselves more.
          </p>
        </div>
        <img
          src={vedImg}
          alt="Ved Hariharan, Chapter Head Mumbai"
          className="w-60 h-60 object-cover"
          loading="lazy"
        />
      </motion.div>
      {/* Vir */}
      <motion.div
        className="flex flex-col md:flex-row-reverse gap-10 items-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1">
          <h3 className="font-heading text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
            Chapter Head, Mumbai
          </h3>
          <h3 className="font-heading text-xl font-semibold mb-4">
            Vir Hariharan
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Vir Hariharan, a student from Mumbai who believes the most important thing we
            can help young people realize is that they can create, not just consume. Every day,
            students interact with a world built by someone else. But everything around us was made
            by people no different from them, and once students truly grasp that, something shifts.
            That realization is what draws me to Project Zūl. My goal is for students to leave not
            just with new skills, but with the confidence to see themselves as builders, people
            capable of improving and contributing to the world around them.
          </p>
        </div>
        <img
          src={virImg}
          alt="Vir Hariharan, Chapter Head Mumbai"
          className="w-60 h-60 object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
