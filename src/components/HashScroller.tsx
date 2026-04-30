import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const tryScrollTo = (id: string) => {
  if (typeof document === "undefined" || !id) {
    return false;
  }

  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};

const HashScroller = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace(/^#/, "");
    if (!id) {
      return;
    }

    if (tryScrollTo(id)) {
      return;
    }

    const timeout = setTimeout(() => tryScrollTo(id), 120);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
};

export default HashScroller;
