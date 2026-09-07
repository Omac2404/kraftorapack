"use server";

import { cookies } from "next/headers";
import { isLang, LANG_COOKIE, LANG_COOKIE_MAX_AGE, type Lang } from "@/lib/l10n";

// Dil tercihini çereze yazar. Adres değişmediği için sayfa yalnızca yenilenir
// (bkz. components/site/LangSwitcher.tsx).
export async function setLang(lang: Lang) {
  if (!isLang(lang)) return;
  const jar = await cookies();
  jar.set(LANG_COOKIE, lang, {
    path: "/",
    maxAge: LANG_COOKIE_MAX_AGE,
    sameSite: "lax",
  });
}
