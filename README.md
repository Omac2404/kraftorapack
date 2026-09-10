# Kraftora

kraftorapack.com — sürdürülebilir kraft ambalaj üreticisi kurumsal sitesi. Özel yazılım: üç dilli (TR/EN/FR) kurumsal site + yönetim paneli. WordPress'ten bağımsız.

## Stack

- **Next.js 15** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4**
- **PostgreSQL** + Drizzle ORM
- Oturum tabanlı admin auth (bcryptjs + httpOnly cookie, token hash'i DB'de)
- Docker ile deploy (standalone output)

## Geliştirme

```bash
# 1. Bağımlılıklar
npm install

# 2. Ortam değişkenleri
cp .env.example .env   # değerleri düzenle

# 3. Veritabanı (Docker)
docker compose up -d

# 4. Şema + ilk admin + başlangıç içeriği
npm run db:generate
npm run db:migrate
npm run db:seed
npm run db:seed-content

# 5. Geliştirme sunucusu
npm run dev
```

Site: http://localhost:3000 — Admin panel: http://localhost:3000/admin

Dil header'daki bayraklardan seçilir; adres değişmez, tercih `lang` çerezinde tutulur.

## Dizin yapısı

```
app/
  (site)/[lang]/   # Kamuya açık sayfalar (klasör adları Türkçe; [lang] adreste görünmez,
                   # middleware çerezdeki dile göre buraya rewrite eder)
  admin/
    (auth)/giris   # Panel girişi
    (panel)/       # Korumalı panel sayfaları
  actions/         # Server actions
components/
  site/            # Site bileşenleri
  admin/           # Panel bileşenleri
db/                # Drizzle şema + seed
lib/
  auth/            # Oturum, şifre, rate-limit
  settings/        # Panelden yönetilen ayarların tipleri ve varsayılanları
  data/            # DB okuma/yazma
  i18n.ts          # Adresler + arayüz metinleri (dict: tr/en/fr)
  l10n.ts          # Dil tipleri ve t() çeviri okuyucusu
  i18n-fr.ts       # Fransızca içerik sözlüğü (Türkçe kaynak metin → Fransızca)
public/            # Statik görseller (ürün, galeri, blog, banner)
public/uploads/    # Panelden yüklenen dosyalar (canlıda volume)
```

## Panel

Ana Sayfa, Hakkımızda, Ürünler, Galeri, Blog, İletişim (mesajlar + teklif talepleri), Teknik (SMTP, SEO, favicon, sitemap, kullanıcılar). Her metin TR/EN olarak yan yana düzenlenir.
