export const SITE_CONFIG = {
  name: "diKlikCetak",
  baseUrl: "https://merchandisepadang.com",
  defaultTitle:
    "diKlikCetak | Solusi Digital Printing untuk Kebutuhan Bisnis & Instansi",
  defaultDescription:
    "diKlikCetak menyediakan layanan cetak berkualitas tinggi untuk mendukung kebutuhan promosi, operasional, hingga event Anda.",
  whatsapp: "6283898001047",
  whatsappUrl: "https://wa.me/6283898001047",
  address:
    "Jl. Sinta Melati 1 Kampung Olo, Lapai, Kec. Nanggalo, Kota Padang, Sumatera Barat 25173",
  googleMapsUrl:
    "https://maps.google.com/maps?q=Dklik.+Advertising&output=embed",
} as const;

type HeadEntry = {
  title?: string;
  name?: string;
  charSet?: string;
  content?: string;
  property?: string;
  rel?: string;
  href?: string;
  type?: string;
};

type HeadOutput = {
  title?: string;
  meta: HeadEntry[];
  links: HeadEntry[];
};

export function createPageMeta({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): HeadOutput {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.defaultTitle;
  const metaDescription = description ?? SITE_CONFIG.defaultDescription;
  const canonicalUrl = path
    ? `${SITE_CONFIG.baseUrl}${path}`
    : SITE_CONFIG.baseUrl;
  const ogImage = image ?? `${SITE_CONFIG.baseUrl}/logo.webp`;

  return {
    title: fullTitle,
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: metaDescription },
      { name: "canonical", content: canonicalUrl },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: ogImage },
      { property: "og:site_name", content: SITE_CONFIG.name },
      { property: "og:locale", content: "id_ID" },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  };
}

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.defaultDescription,
    url: SITE_CONFIG.baseUrl,
    telephone: `+62${SITE_CONFIG.whatsapp.replace(/^0/, "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Gajah Mada No.1, Gn. Pangilun, Kec. Nanggalo",
      addressLocality: "Padang",
      addressRegion: "Sumatera Barat",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "0.4698",
      longitude: "101.4476",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };
}
