"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(
        "relative flex items-center justify-center font-mono font-bold text-xs select-none transition-all duration-200 active:scale-90",
        className
      )}
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      aria-label="Toggle language"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] leading-none tracking-wider uppercase border border-border/80 rounded-md px-1.5 py-1 bg-background text-foreground shadow-xs hover:border-foreground/40 hover:bg-accent transition-colors">
          {lang === "fr" ? "FR" : "EN"}
        </span>
      </div>
    </Button>
  );
}
