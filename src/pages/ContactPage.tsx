import { motion } from "framer-motion";
import { School, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const options = [
  {
    icon: School,
    title: "Bring Project ZŪL to Your School",
    desc: "We'll provide kits, curriculum, and teacher training at no cost.",
  },
  {
    icon: Users,
    title: "Volunteer or Partner With Us",
    desc: "Help us expand our reach through mentorship, funding, or logistics.",
  },
  {
    icon: MapPin,
    title: "Start a Chapter in Your Region",
    desc: "Lead Project ZŪL's expansion in your state or city.",
  },
];

const ContactPage = () => (
  <PageLayout>
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sharp-line mb-6">
            <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase font-semibold">Contact</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Help Us Build the Next Generation of Innovators
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Whether you're a school, a volunteer, or someone passionate about education — there's a way to contribute.
          </p>
        </motion.div>

        <div className="space-y-px bg-border mb-16">
          {options.map((o, i) => (
            <motion.div
              key={o.title}
              className="bg-background p-8 hover:bg-secondary/30 transition-colors flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <o.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{o.title}</h3>
                <p className="text-muted-foreground text-sm">{o.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Contact */}
        <motion.div
          className="border border-border p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl font-bold mb-2">Reach Out</h2>
          <p className="text-muted-foreground text-sm mb-8">
            Send us an email and we'll get back to you within 48 hours.
          </p>
          <a href="mailto:contact.projectzul@gmail.com" className="block sm:inline-block">
            <Button className="font-heading text-xs w-full sm:w-auto whitespace-normal leading-snug py-6 sm:py-2">
              <span className="flex w-full flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                <span>Email Us</span>
                <span className="hidden sm:inline" aria-hidden>
                  —
                </span>
                <span className="break-all sm:break-normal">contact.projectzul@gmail.com</span>
              </span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  </PageLayout>
);

export default ContactPage;
