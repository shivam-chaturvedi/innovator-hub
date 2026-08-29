import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const separatePages = [
  { label: "Lessons", href: "/lessons" },
  { label: "Chapters", href: "/chapters" },
  { label: "Media", href: "/media" },
];

const communityPages = [
  { label: "Partners", href: "/community/partners" },
  { label: "Projects", href: "/community/projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isCommunityActive = communityPages.some((p) => location.pathname === p.href);

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

          {/* Community dropdown (Partners + Projects) — commented out, replaced below with a direct Partners link.
          <div className="relative">
            <button
              onClick={() => setCommunityOpen((v) => !v)}
              onBlur={() => setTimeout(() => setCommunityOpen(false), 150)}
              className={`flex items-center gap-1 text-xs uppercase tracking-widest px-3 py-2 font-semibold transition-colors ${
                isCommunityActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Community
              <ChevronDown className={`w-3 h-3 transition-transform ${communityOpen ? "rotate-180" : ""}`} />
            </button>
            {communityOpen && (
              <div className="absolute top-full left-0 z-50 bg-background border border-border shadow-lg min-w-[140px]">
                {communityPages.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    reloadDocument
                    onClick={() => setCommunityOpen(false)}
                    className={`block px-4 py-2.5 text-xs uppercase tracking-widest font-semibold transition-colors ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          */}
          <Link
            to="/community/partners"
            reloadDocument
            className={`text-xs uppercase tracking-widest px-3 py-2 font-semibold transition-colors ${
              location.pathname === "/community/partners" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Partners
          </Link>
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
          {/* Community section (Partners + Projects) — commented out, replaced below with a direct Partners link.
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 px-3 pt-2 pb-1 font-semibold">
            Community
          </p>
          {communityPages.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              reloadDocument
              className={`block text-xs uppercase tracking-widest px-3 py-2 font-semibold transition-colors ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          */}
          <Link
            to="/community/partners"
            onClick={() => setOpen(false)}
            reloadDocument
            className={`block text-xs uppercase tracking-widest px-3 py-2 font-semibold transition-colors ${
              location.pathname === "/community/partners" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Partners
          </Link>
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
