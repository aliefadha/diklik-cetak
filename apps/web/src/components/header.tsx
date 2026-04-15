import { Link, useLocation } from "@tanstack/react-router";
import { Headphones, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { to: "/", label: "Beranda" },
    { to: "/#layanan", label: "Layanan" },
    { to: "/#klien", label: "Klien Kami" },
    { to: "/#portofolio", label: "Portofolio" },
    { to: "/#tentang-kami", label: "Tentang Kami" },
  ] as const;

  return (
    <header
      className={`sticky z-50 transition-all duration-300 ${isHome
          ? "top-0 w-full lg:rounded-b-[30px] bg-white border-white shadow-sm"
          : "top-2 lg:top-4 w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] max-w-7xl mx-auto rounded-[20px] lg:rounded-[30px] bg-white/30 backdrop-blur-sm shadow-lg"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 md:px-12">

        <Link to="/" className="flex items-center">
          <img src="/logo.webp" alt="Logo" className="w-16 md:w-24" />
        </Link>

        {/* Middle: Navigation Links (Desktop) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(({ to, label }) => {
            return (
              <a
                key={label}
                href={to}
                className={`text-xs md:text-sm font-semibold transition-colors hover:text-[#FF8A00] ${isHome ? 'text-[#333333]' : 'text-white'}`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Right: Call to Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <a href="https://wa.me/628176001047" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-[#FF8A00] px-4 py-1 md:py-2.5 text-xs md:text-sm font-semibold text-white transition-colors hover:bg-[#E07900] shadow-md"
          >
            <span className="hidden sm:inline">Hubungi Kami</span>
            <span className="sm:hidden">Hubungi</span>
            <Headphones className="ml-2 h-4 w-4" />
          </a>

          {/* Hamburger Menu Icon (Mobile/Tablet Only) */}
          <button
            className={`lg:hidden flex items-center justify-center p-2 transition-colors hover:text-[#FF8A00] ${isHome ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`absolute left-0 flex w-full flex-col gap-4 px-6 pb-6 pt-4 shadow-lg lg:hidden ${isHome ? 'top-full rounded-b-[30px] bg-white' : 'top-[calc(100%+8px)] rounded-[20px] bg-white backdrop-blur-sm shadow-lg'}`}>
          <nav className="flex flex-col gap-4">
            {links.map(({ to, label }) => {
              return (
                <a
                  key={label}
                  href={to}
                  className={`block text-base font-semibold transition-colors hover:text-[#FF8A00] text-[#333333]`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
