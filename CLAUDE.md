# Kraftora (kraftorapack.com)

Kurumsal site + yönetim paneli. Üç dilli: Türkçe (kaynak dil), İngilizce, Fransızca. Adresler tek dillidir ve
dile göre DEĞİŞMEZ (`/urunler`); dil tercihi `lang` çerezinde tutulur. Panel Türkçe (`/admin/giris`, `/admin/urunler`).

## Stack

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4 (`@theme` token'ları `app/globals.css`), Drizzle ORM + PostgreSQL (postgres.js), bcryptjs.

Referans proje: `Webreta/ege-yatcilik` — auth, upload ve panel kalıpları oradan alındı. Tasarım kraftorapack.com (Flatsome/WordPress) birebir taşındı.

## Kurallar

- Auth: middleware yalnızca iyimser cookie kontrolü yapar; gerçek doğrulama `requireUser`/`requireSection` (lib/auth/session.ts) ile panel layout'unda ve her server action'da.
- Dil: `middleware.ts` `lang` çerezini okuyup isteği `app/(site)/[lang]/<türkçe-klasör>` rotasına rewrite eder — adres
  çubuğu değişmez. Bağlantılar `href(key, rest)` ile üretilir (dil parametresi almaz). Dil seçici
  `components/site/LangSwitcher.tsx` (üç bayrak); `app/actions/locale.ts` çerezi yazar, sayfa `router.refresh()` ile yenilenir.
  Eski dil önekli adresler (`/en/products`, `/tr/...`, `/fr/...`) 308 ile öneksiz Türkçe adrese yönlendirilir ve çerez ayarlanır.
- İçerik metinleri `L = { tr, en }` tipinde (lib/l10n.ts) ve panelden TR/EN olarak girilir. Sitede `t(value, lang)` ile
  okunur: FR istendiğinde Türkçe kaynak metin `lib/i18n-fr.ts` sözlüğünde aranır, yoksa EN'e, o da boşsa TR'ye düşer.
  Fransızca için panelde alan YOKTUR; yeni metnin çevirisi `lib/i18n-fr.ts` içine Türkçe kaynağı birebir anahtar
  yapılarak eklenir. Arayüz metinleri (menü, buton) `lib/i18n.ts` içindeki `dict` (tr/en/fr).
- Panel formlarında iki dilli alan adı `<ad>.tr` / `<ad>.en` (components/admin/Fields.tsx `LInput`, server tarafında `readL`).
- Site ayarları `site_settings` key-value tablosunda: genel, hakkimizda, iletisim, sayfalar, teknik, yasal (lib/settings/* varsayılanlar, lib/data/settings.ts okuma/yazma).
- Ürün ve blog adresleri her dilde Türkçe slug'ı kullanır (`slug`). `slugEn` sütunu eski bağlantılar için korunur:
  o slug'la gelen istek sayfada canonical (Türkçe) adrese yönlendirilir.
- DB komutları: `npm run db:generate` → `db:migrate` → `db:seed` (admin) → `db:seed-content` (ürün/blog/galeri).
- Yerel Postgres: `docker compose up -d` (port 5435).
- Yorumlar ve panelde görünen tüm metinler Türkçe.
