import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const separatePages = [
  { label: "Lessons", href: "/lessons" },
  { label: "Chapters", href: "/chapters" },
  { label: "Media", href: "/media" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isSeparatePage = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl text-foreground">
          <Zap className="w-6 h-6 text-primary" />
          Project ZŪL
        </Link>

        <div className="hidden lg:flex items-center gap-1 justify-center flex-1">
          <Link
            to="/"
            reloadDocument
            className={`text-xs uppercase tracking-widest px-3 py-2 font-semibold transition-colors ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>
          {separatePages.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              reloadDocument
              className={`text-xs uppercase tracking-widest px-3 py-2 font-semibold transition-colors ${
                isSeparatePage(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(`nav.${link.label.toLowerCase()}`)}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-0">
          <div id="google_translate_element" className="google-translate shrink-0" />
          <Link to="/contact" reloadDocument className="hidden lg:block">
            <Button size="sm" className="font-heading text-xs">
              {t("nav.getInvolved")}
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4 space-y-1">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            reloadDocument
            className="block text-xs uppercase tracking-widest px-3 py-2 font-semibold text-muted-foreground hover:text-foreground"
          >
            {t("nav.home")}
          </Link>
          {separatePages.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              reloadDocument
              className="block text-xs uppercase tracking-widest px-3 py-2 font-semibold text-muted-foreground hover:text-foreground"
            >
              {t(`nav.${link.label.toLowerCase()}`)}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} reloadDocument>
            <Button size="sm" className="w-full font-heading text-xs mt-2">
              {t("nav.getInvolved")}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
