import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import masoomLogo from "@/assets/logo-massom.webp";
import gyanodayLogo from "@/assets/Logo-gyanoday.webp";
import indigoLogo from "@/assets/logo-indigo.png";

interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
}

const partners: Partner[] = [
  {
    id: "masoom",
    name: "Masoom Education",
    logo: masoomLogo,
    website: "https://masoomeducation.org",
  },
  {
    id: "gyanoday",
    name: "Gyanoday",
    logo: gyanodayLogo,
    website: "https://gyanoday.org.in",
  },
  {
    id: "indigo",
    name: "Indigo Knowledge Prism Foundation",
    logo: indigoLogo,
    website: "https://theknowledgeprism.com",
  },
];

const PartnersSection = () => {
  return (
    <section className="section-padding border-b border-border bg-muted/30">
      <div className="container mx-auto max-w-5xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">
            Our Network
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Our Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with leading educational organizations to expand access to STEM education and empower young innovators across India.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col items-center justify-center gap-4 border border-border bg-background p-8 hover:border-primary/40 hover:bg-muted/50 transition-all duration-200"
            >
              {/* Logo */}
              <div className="w-full h-32 flex items-center justify-center bg-background rounded">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain px-4"
                />
              </div>

              {/* Name */}
              <div className="text-center space-y-2 flex-1 flex flex-col items-center justify-center">
                <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-xs text-muted-foreground"
        >
          Interested in partnering with Project Zūl?{" "}
          <a href="mailto:sachin.kumar@athenaeducation.co.in" className="text-primary hover:underline">
            Get in touch with us
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PartnersSection;
