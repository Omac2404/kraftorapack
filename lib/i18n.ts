import type { Lang } from "@/lib/l10n";

// Adresler tek dillidir (Türkçe klasör adları): /urunler, /hakkimizda …
// Dil tercihi çerezde tutulduğu için adres dile göre değişmez; middleware
// isteği çerezdeki dile göre app/(site)/[lang]/… rotasına rewrite eder.
export const ROUTES = {
  home: "",
  hakkimizda: "hakkimizda",
  urunler: "urunler",
  galeri: "galeri",
  blog: "blog",
  iletisim: "iletisim",
  kvkk: "kvkk",
  gizlilik: "gizlilik-politikasi",
  cerez: "cerez-politikasi",
} as const;

export type RouteKey = keyof typeof ROUTES;

export function href(key: RouteKey, rest?: string): string {
  const path = [ROUTES[key], rest].filter(Boolean).join("/");
  return `/${path}`;
}

// Eski İngilizce adresler (/en/products) artık kullanılmıyor; middleware bunları
// Türkçe karşılığına 308 ile yönlendirir ve dili İngilizceye çevirir.
const LEGACY_EN: Record<string, string> = {
  "about-us": "hakkimizda",
  products: "urunler",
  gallery: "galeri",
  blog: "blog",
  contact: "iletisim",
  kvkk: "kvkk",
  "privacy-policy": "gizlilik-politikasi",
  "cookie-policy": "cerez-politikasi",
};

export function legacyEnSegmentToTr(seg: string): string {
  return LEGACY_EN[seg] ?? seg;
}

// Arayüz metinleri (menü, buton, form etiketleri). İçerik metinleri DB'den gelir;
// Fransızca içerik çevirileri lib/i18n-fr.ts sözlüğünden okunur.
export const dict = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      products: "Ürünler",
      gallery: "Galeri",
      blog: "Blog",
      contact: "İletişim",
    },
    menu: "Menü",
    allProducts: "Tüm Ürünler",
    viewProduct: "Ürünü İncele",
    viewProducts: "Ürünleri İncele",
    contactUs: "Bize Ulaşın",
    sendQuote: "Teklif İste",
    readPost: "Yazıyı Okuyun",
    minRead: "dk okuma",
    otherPosts: "Diğer Yazılar",
    noPosts: "Henüz blog yazısı yok.",
    footer: {
      contact: "İletişim",
      siteMap: "Site Haritası",
      sustainability: "Sürdürülebilirlik",
      rights: "Tüm hakları saklıdır.",
      designedBy: "Tasarım",
      legal: "Yasal",
      kvkk: "KVKK",
      privacy: "Gizlilik Politikası",
      cookiePolicy: "Çerez Politikası",
    },
    form: {
      name: "Ad",
      lastName: "Soyad",
      fullName: "Ad Soyad",
      email: "E-posta Adresi",
      phone: "Telefon Numarası",
      company: "Firma Adı",
      message: "Mesajınız",
      notes: "Ek Notlar",
      send: "Gönder",
      sending: "Gönderiliyor…",
      success: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
      quoteSuccess: "Teklif talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.",
      required: "zorunlu",
      select: "-- Seçiniz --",
      material: "Malzeme",
      print: "Baskı",
      finishing: "Yüzey İşlemi",
      additionalOptions: "Ek Seçenekler",
      quantity: "Adet",
      usage: "Kullanım Türü",
      close: "Kapat",
      inquiry: "Teklif Formu",
      materials: ["Kraft Karton", "Beyaz Karton, Oluklu Kraft", "Mikro Dalga (Micro-Flute)", "Danışmanlık İstiyorum"],
      prints: ["Baskısız", "1 Renk", "2 Renk", "Tam Renk (CMYK)", "Danışmanlık İstiyorum"],
      finishings: ["Yok", "Mat Selefon", "Parlak Selefon", "UV Lak", "Danışmanlık İstiyorum"],
      quantities: ["500", "1000", "2500", "5000", "10000", "25000+"],
      usages: ["Yerinde Tüketim", "Paket Servis", "Kurye Teslimat", "Hepsi"],
    },
    cookie: {
      text: "Sitemiz, düzgün çalışması için yalnızca zorunlu çerezleri kullanır. Detaylar için",
      link: "Çerez Politikamızı",
      after: "inceleyebilirsiniz.",
      accept: "Kabul Et",
    },
    notFound: {
      title: "Sayfa bulunamadı",
      text: "Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.",
      home: "Ana sayfaya dön",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
    },
    menu: "Menu",
    allProducts: "All Products",
    viewProduct: "View Product",
    viewProducts: "View Products",
    contactUs: "Contact Us",
    sendQuote: "Send a Quote",
    readPost: "Read Article",
    minRead: "min read",
    otherPosts: "Other Posts",
    noPosts: "No blog posts yet.",
    footer: {
      contact: "Contact",
      siteMap: "Site Map",
      sustainability: "Sustainability",
      rights: "All rights reserved.",
      designedBy: "Designed by",
      legal: "Legal",
      kvkk: "KVKK",
      privacy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
    },
    form: {
      name: "Name",
      lastName: "Last Name",
      fullName: "Full Name",
      email: "E-mail Address",
      phone: "Telephone Number",
      company: "Company Name",
      message: "Your Message",
      notes: "Additional Notes",
      send: "Send",
      sending: "Sending…",
      success: "Thank you! Your message has been received. We will get back to you shortly.",
      quoteSuccess: "Your quote request has been received. Our team will contact you shortly.",
      required: "required",
      select: "-- Select --",
      material: "Material",
      print: "Print",
      finishing: "Finishing",
      additionalOptions: "Additional Options",
      quantity: "Quantity",
      usage: "Usage Type",
      close: "Close",
      inquiry: "Inquiry Form",
      materials: ["Kraft Cardboard", "White Cardboard, Corrugated Kraft", "Micro-Flute", "Need Consultation"],
      prints: ["No Print", "1 Color", "2 Colors", "Full Color (CMYK)", "Need Consultation"],
      finishings: ["None", "Matte Lamination", "Gloss Lamination", "UV Coating", "Need Consultation"],
      quantities: ["500", "1000", "2500", "5000", "10000", "25000+"],
      usages: ["Dine-in", "Takeaway", "Delivery", "All of the above"],
    },
    cookie: {
      text: "This website uses only essential cookies to function properly. See our",
      link: "Cookie Policy",
      after: "for details.",
      accept: "Accept",
    },
    notFound: {
      title: "Page not found",
      text: "The page you are looking for may have been moved or removed.",
      home: "Back to home",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      products: "Produits",
      gallery: "Galerie",
      blog: "Blog",
      contact: "Contact",
    },
    menu: "Menu",
    allProducts: "Tous les produits",
    viewProduct: "Voir le produit",
    viewProducts: "Voir les produits",
    contactUs: "Contactez-nous",
    sendQuote: "Demander un devis",
    readPost: "Lire l’article",
    minRead: "min de lecture",
    otherPosts: "Autres articles",
    noPosts: "Aucun article pour le moment.",
    footer: {
      contact: "Contact",
      siteMap: "Plan du site",
      sustainability: "Durabilité",
      rights: "Tous droits réservés.",
      designedBy: "Conception",
      legal: "Mentions légales",
      kvkk: "KVKK",
      privacy: "Politique de confidentialité",
      cookiePolicy: "Politique de cookies",
    },
    form: {
      name: "Prénom",
      lastName: "Nom",
      fullName: "Nom et prénom",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      company: "Nom de l’entreprise",
      message: "Votre message",
      notes: "Notes complémentaires",
      send: "Envoyer",
      sending: "Envoi…",
      success: "Merci ! Votre message a bien été reçu. Nous vous répondrons dans les plus brefs délais.",
      quoteSuccess: "Votre demande de devis a bien été reçue. Notre équipe vous contactera très prochainement.",
      required: "obligatoire",
      select: "-- Sélectionner --",
      material: "Matériau",
      print: "Impression",
      finishing: "Finition",
      additionalOptions: "Options supplémentaires",
      quantity: "Quantité",
      usage: "Type d’utilisation",
      close: "Fermer",
      inquiry: "Formulaire de devis",
      materials: ["Carton kraft", "Carton blanc, kraft ondulé", "Micro-cannelure (Micro-Flute)", "Je souhaite un conseil"],
      prints: ["Sans impression", "1 couleur", "2 couleurs", "Quadrichromie (CMJN)", "Je souhaite un conseil"],
      finishings: ["Aucune", "Pelliculage mat", "Pelliculage brillant", "Vernis UV", "Je souhaite un conseil"],
      quantities: ["500", "1000", "2500", "5000", "10000", "25000+"],
      usages: ["Sur place", "À emporter", "Livraison", "Tous"],
    },
    cookie: {
      text: "Notre site utilise uniquement les cookies nécessaires à son bon fonctionnement. Pour plus de détails,",
      link: "consultez notre politique de cookies",
      after: ".",
      accept: "Accepter",
    },
    notFound: {
      title: "Page introuvable",
      text: "La page que vous recherchez a peut-être été déplacée ou supprimée.",
      home: "Retour à l’accueil",
    },
  },
} as const;

export type Dict = (typeof dict)["tr"];

export function getDict(lang: Lang): Dict {
  return dict[lang] as Dict;
}

const LOCALES: Record<Lang, string> = { tr: "tr-TR", en: "en-GB", fr: "fr-FR" };

export function formatDate(date: string | Date, lang: Lang) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString(LOCALES[lang], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
