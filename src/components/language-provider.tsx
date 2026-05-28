"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en";

export const UI_TRANSLATIONS = {
  fr: {
    about: "À propos",
    workExperience: "Expérience Professionnelle",
    education: "Formations",
    skills: "Compétences",
    myProjects: "Mes Projets",
    checkLatestWork: "Découvrez mes derniers travaux",
    projectsIntro: "J'ai travaillé sur divers projets, des sites internet simples aux applications web complexes. En voici quelques-uns de mes favoris.",
    contact: "Contact",
    getInTouch: "Contactez-moi",
    contactIntro: "Vous voulez discuter ? Envoyez-moi un message avec une question directe sur Twitter et je vous répondrai dès que possible. Je répondrai à aucun démarchage.",
    sendEmail: "Envoyer un e-mail",
    blogTitle: "Blog",
    posts: "articles",
    post: "article",
    blogIntro: "Mes réflexions sur le développement logiciel, la vie et plus encore.",
    pageOf: "Page {page} sur {totalPages}",
    previous: "Précédent",
    next: "Suivant",
    noPosts: "Aucun article pour le moment. Revenez bientôt !",
    theme: "Thème",
    language: "Langue",
    home: "Accueil",
  },
  en: {
    about: "About",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Skills",
    myProjects: "My Projects",
    checkLatestWork: "Check out my latest work",
    projectsIntro: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    contact: "Contact",
    getInTouch: "Get in Touch",
    contactIntro: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    sendEmail: "Send Email",
    blogTitle: "Blog",
    posts: "posts",
    post: "post",
    blogIntro: "My thoughts on software development, life, and more.",
    pageOf: "Page {page} of {totalPages}",
    previous: "Previous",
    next: "Next",
    noPosts: "No blog posts yet. Check back soon!",
    theme: "Theme",
    language: "Language",
    home: "Home",
  }
} as const;

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof UI_TRANSLATIONS["en"]) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang === "fr" || savedLang === "en") {
      setLangState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      const browserLang = navigator.language.startsWith("fr") ? "fr" : "en";
      setLangState(browserLang);
      localStorage.setItem("portfolio-lang", browserLang);
      document.documentElement.lang = browserLang;
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: keyof typeof UI_TRANSLATIONS["en"]) => {
    return UI_TRANSLATIONS[lang]?.[key] || UI_TRANSLATIONS["en"][key];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
