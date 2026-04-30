import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-16 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-heading font-bold text-lg text-foreground mb-3">
            <Zap className="w-5 h-5 text-primary" />
            Project ZŪL
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Hands-on STEM education for India's future innovators. {t("footer.tagline")}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Navigation</p>
          <div className="space-y-2">
            {[
              { label: "About", to: "/about" },
              { label: "Programs", to: "/programs" },
              { label: "Impact", to: "/impact" },
              { label: "Team", to: "/team" },
              { label: "Media", to: "/media" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Get Involved</p>
          <div className="space-y-2">
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Bring ZŪL to Your School
            </Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Volunteer or Partner
            </Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Start a Chapter
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Project ZŪL. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built by students, for students.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
