import type { L } from "@/lib/l10n";

// İletişim bilgileri ve İletişim sayfası metinleri: site_settings("iletisim")

export type ContactSettings = {
  email: string;
  phone: string;
  // tel: bağlantısı için yalnızca rakamlar (+ ile)
  phoneHref: string;
  address: L;
  hours: L;
  replyNote: L;
  // Footer'daki kısa konum satırı
  location: L;
  social: { facebook: string; instagram: string; x: string; linkedin: string };
  mapEmbed: string;
  page: {
    title: L;
    subtitle: L;
    officeTitle: L;
    phoneTitle: L;
    emailTitle: L;
    followTitle: L;
    followText: L;
    formTitle: L;
    formText: L;
    ctaTitle: L;
    ctaText: L;
  };
};

export const defaultContactSettings: ContactSettings = {
  email: "info@kraftora.com",
  phone: "+90 544 979 26 20",
  phoneHref: "+905449792620",
  address: {
    tr: "Mansuroğlu Mah. 286/1 Sk. No: 1 İç Kapı No: 215 Bayraklı / İzmir",
    en: "Mansuroğlu Mah. 286/1 Sk. No: 1 Inner Door No: 215 Bayraklı / İzmir, Türkiye",
  },
  hours: { tr: "Pzt – Cum, 09:00 – 18:00", en: "Mon – Fri, 09:00 – 18:00" },
  replyNote: { tr: "24 saat içinde yanıt veriyoruz", en: "We reply within 24 hours" },
  location: { tr: "Bayraklı, İzmir", en: "Bayraklı, İzmir" },
  social: { facebook: "#", instagram: "#", x: "#", linkedin: "" },
  mapEmbed:
    "https://maps.google.com/maps?q=Mansuro%C4%9Flu%20Mah.%20286%2F1%20Sk.%20No%3A1%20Bayrakl%C4%B1%20%C4%B0zmir&z=16&hl=tr&output=embed",
  page: {
    title: { tr: "Bize Ulaşın", en: "Get in Touch" },
    subtitle: {
      tr: "Sizden haber almaktan mutluluk duyarız. Ürünlerimiz, fiyatlandırma ya da başka bir konuda sorunuz varsa ekibimiz yardıma hazır.",
      en: "We’d love to hear from you. Whether you have a question about our products, pricing, or anything else — our team is ready to help.",
    },
    officeTitle: { tr: "Ofisimiz", en: "Our Office" },
    phoneTitle: { tr: "Telefon", en: "Phone" },
    emailTitle: { tr: "E-posta", en: "Email" },
    followTitle: { tr: "Bizi Takip Edin", en: "Follow Us" },
    followText: {
      tr: "Yeni ürünler ve ilham veren içerikler için sosyal medya hesaplarımızı takip edin.",
      en: "Stay updated on new products and inspiration on our social channels.",
    },
    formTitle: { tr: "Bize Mesaj Gönderin", en: "Send Us a Message" },
    formText: {
      tr: "Aşağıdaki formu doldurun, en kısa sürede size dönüş yapalım.",
      en: "Fill out the form below and we’ll get back to you as soon as possible.",
    },
    ctaTitle: { tr: "Özel Ambalaj Teklifi mi Gerekiyor?", en: "Need a Custom Packaging Quote?" },
    ctaText: {
      tr: "Ürün yelpazemize göz atın ve herhangi bir ürün sayfasından doğrudan size özel teklif isteyin.",
      en: "Browse our product range and request a tailored quote directly from any product page.",
    },
  },
};
