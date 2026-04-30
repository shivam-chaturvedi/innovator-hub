import { useEffect } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean; includedLanguages?: string },
          elementId: string,
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    if (!window.google?.translate?.TranslateElement) return;
    if (!document.getElementById("google_translate_element")) return;
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: [
          "en",
          "as",
          "bn",
          "gu",
          "hi",
          "kn",
          "ks",
          "kok",
          "mai",
          "ml",
          "mr",
          "ne",
          "or",
          "pa",
          "sa",
          "sd",
          "ta",
          "te",
          "ur",
          "doi",
          "mni-Mtei",
          "sat",
        ].join(","),
      },
      "google_translate_element",
    );
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    return () => {
      if (window.googleTranslateElementInit === googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
      }
    };
  }, []);

  return null;
};

export default GoogleTranslate;
