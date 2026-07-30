import { motion } from "framer-motion";
import aravImg from "@/assets/arav-portrait.jpg";
import kaavyaImg from "@/assets/kaavya-portrait-real.png";
import vedImg from "@/assets/ved-portrait.jpg"
import virImg from "@/assets/vir-portrait.jpg"


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
  {
    name: "Ved Hariharan",
    role: "Chapter Head, Mumbai",
    image: vedImg,
    bio: "Ved is a student from Mumbai with a strong interest in mathematics, technology, and problem-solving. He enjoys exploring how logical thinking and innovation can be applied to tackle real-world challenges, from competitive mathematics and computer science to community-driven initiatives. He looks for ways in which technology can be used to create practical and meaningful impact. He also enjoys sharing knowledge with others and helping students discover new ways to learn, think critically, and approach problems creatively. Alongside his passion for STEM, he is also deeply involved in leadership activities such as Student Council and collaborative student projects. Through Project ZŪL, Ved hopes to encourage students to think creatively, work collaboratively, and view learning as a way to build solutions that can positively influence their communities and the future.",
  },
  {
    name: "Vir Hariharan",
    role: "Chapter Head, Mumbai",
    image: virImg,
    bio: "Vir Hariharan is a student from Mumbai whose interests lie at the intersection of robotics, mathematics, technology, and social impact. He is driven by a curiosity for how ideas evolve into practical solutions and how innovation can empower people far beyond classrooms and competitions. He enjoys not only the engineering side of things, but is equally passionate about making STEM education more engaging and accessible for students from different backgrounds. Vir believes that technology is most powerful when it inspires people to think independently and enables them to build solutions that improve the world around them. As part of Project ZŪL, an initiative empowering India through robotics, Vir hopes to encourage students to move from being passive consumers of technology to active creators. He wants young people to see robotics not simply as machines and coding, but as a platform for imagination, leadership, and meaningful change within their own communities.",
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
