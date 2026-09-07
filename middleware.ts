import { NextResponse, type NextRequest } from "next/server";
import { legacyEnSegmentToTr } from "@/lib/i18n";

const LANGS = ["tr", "en", "fr"];
const LANG_COOKIE = "lang";
const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * 1) /admin için İYİMSER kontrol: yalnızca cookie'nin varlığına bakar (edge'de DB yok).
 *    Gerçek doğrulama panel layout'unda ve server action'larda (requireUser/requireSection).
 * 2) Dil: adres çubuğu dile göre değişmez. Tercih `lang` çerezinde tutulur; istek
 *    çerezdeki dile göre app/(site)/[lang]/… rotasına rewrite edilir.
 * 3) Eski dil önekli adresler (/en/products, /tr/urunler) öneksiz Türkçe adrese
 *    308 ile yönlendirilir ve dil çerezi buna göre ayarlanır.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/giris";
    const hasSessionCookie = request.cookies.has("session");
    if (!isLoginPage && !hasSessionCookie) {
      const loginUrl = new URL("/admin/giris", request.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "no-store");
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    response.headers.set("X-Frame-Options", "DENY");
    return response;
  }

  const parts = pathname.split("/").filter(Boolean);

  // Eski dil önekli adresler → tek canonical (öneksiz) adres
  if (parts.length > 0 && LANGS.includes(parts[0])) {
    const prefix = parts[0];
    const rest = parts.slice(1);
    // /en/products → /urunler (İngilizce segment adları artık kullanılmıyor)
    if (prefix === "en" && rest.length > 0) rest[0] = legacyEnSegmentToTr(rest[0]);
    const url = request.nextUrl.clone();
    url.pathname = `/${rest.join("/")}`;
    const redirect = NextResponse.redirect(url, 308);
    redirect.cookies.set(LANG_COOKIE, prefix, {
      path: "/",
      maxAge: LANG_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
    return redirect;
  }

  const cookieLang = request.cookies.get(LANG_COOKIE)?.value;
  const lang = cookieLang && LANGS.includes(cookieLang) ? cookieLang : "tr";

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`.replace(/\/$/, "") || `/${lang}`;
  const headers = new Headers(request.headers);
  headers.set("x-lang", lang);
  headers.set("x-pathname", pathname);

  const response = NextResponse.rewrite(url, { request: { headers } });
  // Aynı adres dile göre farklı içerik döndürüyor; ara katman önbellekleri ayırsın
  response.headers.set("Vary", "Cookie");
  return response;
}

export const config = {
  // Statik dosyalar, Next iç yolları, yüklemeler ve API dışında her şey
  matcher: [
    "/((?!_next|uploads|api|favicon.ico|robots.txt|sitemap.xml|icon.svg|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
