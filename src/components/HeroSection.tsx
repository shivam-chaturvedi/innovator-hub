import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import robotYellow from "@/assets/robot-yellow.png";
import robotOrange from "@/assets/robot-orange.png";

const HeroSection = () => (
  <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(222,68%,15%)]">
    {/* Circuit board pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-circuit-pattern opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-nodes" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect x="20" y="20" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="32" cy="32" r="2.5" fill="currentColor" />
            <rect x="76" y="76" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="88" cy="88" r="2.5" fill="currentColor" />
            <line x1="44" y1="32" x2="76" y2="32" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="60" cy="32" r="1.5" fill="currentColor" />
            <line x1="88" y1="44" x2="88" y2="76" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="88" cy="60" r="1.5" fill="currentColor" />
            <line x1="32" y1="44" x2="32" y2="76" stroke="currentColor" strokeWidth="0.5" />
            <line x1="44" y1="88" x2="76" y2="88" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-nodes)" />
      </svg>
    </div>

    {/* Robot illustrations - pushed further to edges */}
    <motion.img
      src={robotYellow}
      alt="Friendly robot mascot"
      className="absolute bottom-12 md:bottom-16 left-2 sm:left-6 md:left-10 w-24 sm:w-36 md:w-56 lg:w-64 z-10 pointer-events-none select-none"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      loading="eager"
    />
    <motion.img
      src={robotOrange}
      alt="Friendly robot mascot"
      className="absolute bottom-12 md:bottom-16 right-2 sm:right-6 md:right-10 w-24 sm:w-36 md:w-56 lg:w-64 z-10 pointer-events-none select-none"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.01 }}
      loading="eager"
    />

    <div className="relative container mx-auto px-4 pt-14 pb-14 max-w-5xl text-center z-20 sm:pt-16 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] mb-5 uppercase tracking-wider">
          Building India's Future Innovators —{" "}
          <span className="text-gradient-gold">One Classroom at a Time</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-5 leading-relaxed">
          Project ZŪL is a student-led initiative working to make hands-on STEM education accessible to schools in remote areas where opportunities to explore robotics, electronics, and programming are often limited.
        </p>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Through Arduino-based learning kits, beginner-friendly curriculum, and teacher training programs, Project ZŪL enables students to move beyond textbooks and learn by building real technology and solve problems in their communities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Button size="lg" className="font-heading text-xs gap-2 px-8">
              Explore The Program <ArrowRight className="w-4 h-4" />
            </Button>
          </button>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="font-heading text-xs gap-2 px-8 border-border text-foreground hover:bg-secondary"
            >
              <Handshake className="w-4 h-4" /> Partner With Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
