import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#623CA1] text-white overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_2fr_1fr] lg:gap-8 xl:gap-12 lg:px-12">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-start gap-4">
          <img
            src="/logo.webp"
            alt="Diklik Cetak Printing Logo"
            className="w-48 object-contain brightness-0 invert"
          />
        </div>

        {/* Column 2: Site Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg md:text-xl font-bold tracking-wide">Site</h3>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/90">
            <li>
              <Link to="/" className="transition-colors hover:text-white hover:underline underline-offset-4">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/" className="transition-colors hover:text-white hover:underline underline-offset-4">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="transition-colors hover:text-white hover:underline underline-offset-4">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Hubungi Kami */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg md:text-xl font-bold tracking-wide">Hubungi Kami</h3>
          <ul className="flex flex-col gap-5 text-sm font-medium text-white/90">
            <li className="flex items-start gap-3 w-full pr-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              <span className="leading-relaxed">
                Jl. Sinta Melati 1 Kampung Olo,
                <br />
                Lapai, Kec. Nanggalo, Kota Padang, Sumatera Barat 25173
              </span>
            </li>
            <li>
              <a href="https://wa.me/628176001047" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full transition-opacity hover:opacity-80">
                {/* WhatsApp Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>08176001047</span>
              </a>
            </li>
            <li>
              <a href="mailto:diklikcetakprinting@gmail.com" className="flex items-center gap-3 w-full transition-opacity hover:opacity-80">
                <Mail className="h-5 w-5 shrink-0 text-white" />
                <span>diklikcetakprinting@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Sosial Media */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg md:text-xl font-bold tracking-wide">Sosial Media</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6002 5.82C15.9167 5.03953 15.5401 4.0374 15.5402 3H12.4502V15.4C12.4268 16.0712 12.1437 16.7071 11.6605 17.1735C11.1773 17.6399 10.5318 17.9004 9.86016 17.9C8.44016 17.9 7.26016 16.74 7.26016 15.3C7.26016 13.58 8.92016 12.29 10.6302 12.82V9.66C7.18016 9.2 4.16016 11.88 4.16016 15.3C4.16016 18.63 6.92016 21 9.85016 21C12.9902 21 15.5402 18.45 15.5402 15.3V9.01C16.7932 9.90985 18.2975 10.3926 19.8402 10.39V7.3C19.8402 7.3 17.9602 7.39 16.6002 5.82Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}