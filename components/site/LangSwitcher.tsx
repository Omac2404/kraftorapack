"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLang } from "@/app/actions/locale";
import { LANGS, langNames, type Lang } from "@/lib/l10n";
import { FlagEN, FlagFR, FlagTR } from "./Flags";

// Dil seçici: yan yana üç bayrak (TR / EN / FR). Seçili olan vurgulu.
// Tıklanınca çerez yazılır ve sayfa yenilenir; adres değişmez.

const FLAGS: Record<Lang, (p: { className?: string }) => React.ReactElement> = {
  tr: FlagTR,
  en: FlagEN,
  fr: FlagFR,
};

export function LangSwitcher({ current, className = "" }: { current: Lang; className?: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const choose = (lang: Lang) => {
    if (lang === current || pending) return;
    startTransition(async () => {
      await setLang(lang);
      router.refresh();
    });
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-md border border-line p-0.5 ${
        pending ? "opacity-60" : ""
      } ${className}`}
      role="group"
      aria-label="Dil / Language / Langue"
    >
      {LANGS.map((lang) => {
        const Flag = FLAGS[lang];
        return (
          <button
            key={lang}
            type="button"
            onClick={() => choose(lang)}
            disabled={pending}
            aria-label={langNames[lang]}
            aria-pressed={lang === current}
            title={langNames[lang]}
            className={`flex items-center justify-center rounded-sm p-0.5 transition ${
              lang === current
                ? "ring-1 ring-brand-500"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Flag className="h-4 w-6 rounded-[1px]" />
          </button>
        );
      })}
    </div>
  );
}
