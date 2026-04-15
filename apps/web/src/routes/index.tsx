import { Link, createFileRoute } from "@tanstack/react-router";
import { Handshake, Headset, Package, Printer, Tag } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const features = [
  {
    title: "Kemitraan Jangka Panjang",
    description:
      "Kami tidak hanya bertransaksi, tetapi membangun hubungan kerja sama berkelanjutan",
    Icon: Handshake,
  },
  {
    title: "Kualitas Cetak Konsisten",
    description:
      "Standar produksi kami menjaga hasil tetap rapi dan profesional",
    Icon: Printer,
  },
  {
    title: "Harga Kompetitif",
    description:
      "Skema harga fleksibel dan sesuai kebutuhan instansi maupun bisnis",
    Icon: Tag,
  },
  {
    title: "Produksi Fleksibel",
    description: "Melayani kebutuhan dari skala kecil hingga produksi massal",
    Icon: Package,
  },
  {
    title: "Respon Cepat & Profesional",
    description:
      "Tim kami siap membantu dengan komunikasi yang responsif dan jelas.",
    Icon: Headset,
  },
];

import { useRef, useState } from "react";

function HomeComponent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Klien Kami Scroll
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = Math.min(300, scrollRef.current.clientWidth * 0.8);
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Portofolio State & Handlers
  const portofolioRef = useRef<HTMLDivElement>(null);
  const [portofolioProgress, setPortofolioProgress] = useState(0);

  const scrollPortofolio = (direction: "left" | "right") => {
    if (portofolioRef.current) {
      const amount = Math.min(300, portofolioRef.current.clientWidth * 0.8);
      portofolioRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const handlePortofolioScroll = () => {
    if (portofolioRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = portofolioRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setPortofolioProgress(progress);
    }
  };

  const portofolioItems = [
    { title: "Tumbler Custom", image: "porto1.webp" },
    { title: "Kalender Custom", image: "porto2.webp" },
    { title: "Foam Board", image: "porto3.webp" },
    { title: "Pena", image: "porto4.webp" },
    { title: "Notebook", image: "porto5.webp" },
    { title: "Stiker Kaca", image: "porto6.webp" },
    { title: "Tote bag", image: "porto7.webp" },
    { title: "Mug", image: "porto8.webp" },
    { title: "Branding", image: "porto9.webp" },
    { title: "Signage", image: "porto10.webp" },
    { title: "Topi", image: "porto11.webp" },
    { title: "Kaos", image: "porto12.webp" },
    { title: "Flyer", image: "porto13.webp" },
    { title: "PDH", image: "porto14.webp" },
    { title: "Box Branding", image: "porto15.webp" },
    { title: "Medali", image: "porto16.webp" },
    { title: "ID + Lanyard", image: "porto17.webp" },
    { title: "Bendera", image: "porto18.webp" },
    { title: "Plakat", image: "porto19.webp" },
    { title: "Gantungan Kunci", image: "porto20.webp" }
  ];

  const clients = [
    { name: "Klien 1", logoUrl: "klien-1.webp" },
    { name: "Klien 2", logoUrl: "klien-2.webp" },
    { name: "Klien 3", logoUrl: "klien-3.webp" },
    { name: "Klien 4", logoUrl: "klien-4.webp" },
    { name: "Klien 5", logoUrl: "klien-5.webp" },
    { name: "Klien 6", logoUrl: "klien-6.webp" },
    { name: "Klien 7", logoUrl: "klien-7.webp" },
    { name: "Klien 8", logoUrl: "klien-8.webp" },
    { name: "Klien 9", logoUrl: "klien-9.webp" },
    { name: "Klien 10", logoUrl: "klien-10.webp" },
    { name: "Klien 11", logoUrl: "klien-11.webp" },
    { name: "Klien 12", logoUrl: "klien-12.webp" },
    { name: "Klien 13", logoUrl: "klien-13.webp" },
    { name: "Klien 14", logoUrl: "klien-14.webp" },
    { name: "Klien 15", logoUrl: "klien-15.webp" },
    { name: "Klien 16", logoUrl: "klien-16.webp" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full overflow-x-clip overflow-y-visible bg-linear-to-b from-[#623CA1] via-[#9400D3] to-[#BF00FF] h-[calc(100svh-100px)]  lg:h-[calc(100svh-100px)] pt-20">
        {/* Decor: Top Right ZigZag */}
        <svg
          className="absolute right-0 top-12  md:top-24 w-32 md:w-48 opacity-80"
          viewBox="0 0 200 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 38L40 5L80 38L120 5L160 38L198 5"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Decor: Bottom Left ZigZag */}
        <svg className="absolute bottom-6 -left-2 w-24 md:w-32 opacity-80 rotate-10" width="102" height="56" viewBox="0 0 102 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50.4159 1.60883L-20.0339 37.7464L5.81598 16.758L28.4608 44.8311L54.3107 23.8427L78.8952 52.1992L100.299 34.5236" stroke="white" stroke-width="5" />
        </svg>


        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-12 pb-24 md:flex-row xl:py-24 gap-12">
          {/* Left Column: Text & CTA */}
          <div className="z-10 flex w-full max-w-2xl flex-col gap-6 text-white md:w-1/2">
            <h1 className="text-4xl font-bold max-w-[625px] tracking-tight sm:text-5xl lg:leading-[1.15]">
              Solusi <span className="text-[#00FFFF]">Digital Printing</span>{" "}
              untuk Kebutuhan Bisnis & Instansi
            </h1>
            <p className="mt-2 text-base font-medium leading-relaxed sm:text-lg lg:text-xl">
              Kami menyediakan layanan cetak berkualitas tinggi untuk mendukung
              kebutuhan promosi, operasional, hingga event Anda.
            </p>
            <div className="mt-4">
               <a href="https://wa.me/6283898001047" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#FF8A00] px-8 py-4 text-base font-bold tracking-wide text-white transition-all hover:bg-[#E07900] shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="relative mt-8 flex w-full flex-1 items-center justify-center md:mt-0 md:w-1/2 md:translate-y-12 xl:translate-y-24 z-20">
            {/* Decor: Yellow Triangle near printer */}
            <svg
              className="hidden lg:block absolute left-0 bottom-24 -translate-x-1/2 w-12 h-12"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 5L5 25L45 45Z"
                stroke="#FFD700"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>

            {/* Printer Image Placeholder */}
            <img src="hero.webp" className="hidden md:block w-full max-w-[250px] md:max-w-[300px] lg:max-w-[500px] h-[250px] md:h-[300px] lg:h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto w-full max-w-7xl py-12 pt-24">
        <div className="grid grid-cols-1 divide-y divide-gray-300 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center px-4 py-8 text-center sm:px-8"
            >
              <feat.Icon className="mb-6 h-12 w-12 text-[#4A4A4A] stroke-[1.5]" />
              <h3 className="mb-3 font-bold leading-snug text-[#333333]">
                {feat.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-500">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="mx-auto w-full max-w-7xl px-6 py-12">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
          Layanan
        </h2>

        <div className="flex w-full flex-col">
          {/* Row 1: Document Printing */}
          <div className="flex w-full flex-col md:flex-row">
            <div className="relative order-1 w-full min-h-[350px] bg-[#713F81] md:order-1 md:w-1/2">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="layanan1.webp"
                  alt="Document Printing"
                  className="h-full w-full object-cover scale-105"
                />
              </div>
            </div>
            <div className="relative order-2 flex w-full flex-col justify-center bg-white px-8 py-12 md:order-2 md:w-1/2 md:px-16 xl:px-24">
              <h3 className="mb-4 text-3xl font-bold text-[#333333]">
                Document printing
              </h3>
              <p className="mb-8 font-medium leading-relaxed text-[#555555]">
                Melayani kebutuhan cetak dokumen resmi dan administrasi seperti
                map folder, ID card PVC, sertifikat, buku panduan, serta berbagai
                dokumen kantor dan institusi lainnya.
              </p>
              <div>
                <Link to='/document-printing' className="rounded-lg bg-[#FF8A00] px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#E07900]">
                  Selengkapnya
                </Link>
              </div>
              {/* Decor: Purple Zigzag */}
              <svg className="hidden lg:block absolute right-8 lg:top-12 w-20 opacity-80" width="127" height="52" viewBox="0 0 127 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 2.5L32.882 38.6376L58.7319 17.6492L81.3766 45.7223L107.227 24.7339L126.966 49.5" stroke="#6750BD" stroke-width="5" stroke-linecap="round" />
              </svg>

            </div>
          </div>

          {/* Row 2: Merchandise */}
          <div className="flex w-full flex-col md:flex-row">
            <div className="relative order-2 flex w-full flex-col justify-center bg-white px-8 py-12 md:order-1 md:w-1/2 md:px-16 xl:px-24">
              <h3 className="mb-4 text-3xl font-bold text-[#333333]">
                Merchandise
              </h3>
              <p className="mb-8 font-medium leading-relaxed text-[#555555]">
                Menyediakan berbagai produk merchandise custom seperti mug,
                tumbler, totebag, notebook, dan souvenir lainnya untuk kebutuhan
                promosi maupun identitas brand.
              </p>
              <div>
                <Link to='/merchandise' className="rounded-lg bg-[#FF8A00] px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#E07900]">
                  Selengkapnya
                </Link>
              </div>
              {/* Decor: Blue Circle with dash */}
              <svg className="absolute bottom-16 left-0 -translate-x-1/2 w-12 opacity-80" width="53" height="55" viewBox="0 0 53 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.6554 34.9643C47.3474 30.0011 47.4309 24.6307 45.8939 19.6173C44.357 14.6039 41.2779 10.203 37.0949 7.04099C32.912 3.87897 27.8382 2.11693 22.5959 2.00564C17.3535 1.89436 12.2096 3.4395 7.89625 6.42117M2.17816 11.9045C0.172581 14.5123 -1.29684 17.4914 -2.14535 20.67C-2.99385 23.8486 -3.20465 27.1637 -2.76557 30.4241C-2.3265 33.6846 -1.24624 36.8259 0.412881 39.6667C2.072 42.5076 4.27716 44.9919 6.90116 46.9762C9.52515 48.9606 12.5161 50.4058 15.7013 51.2284C18.8866 52.0511 22.2033 52.2349 25.4599 51.7693C28.7166 51.3037 31.8489 50.1979 34.6761 48.5157C37.5032 46.8335 39.9694 44.6081 41.9322 41.968M-6.05891 5.6828L50.1721 48.1894" stroke="#60DAFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <div className="relative order-1 w-full min-h-[350px] bg-[#4295D6] md:order-2 md:w-1/2">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="layanan2.webp"
                  alt="Merchandise"
                  className="h-full w-full object-cover scale-120 rotate-15"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Seminar Kit */}
          <div className="flex w-full flex-col md:flex-row">
            <div className="relative order-1 w-full min-h-[350px] bg-[#FFCE1F] md:order-1 md:w-1/2">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="layanan3.webp"
                  alt="Seminar Kit"
                  className="h-full w-full origin-top-left object-cover object-left scale-[1.5]"
                />
              </div>
            </div>
            <div className="relative order-2 flex w-full flex-col justify-center bg-white px-8 py-12 md:order-2 md:w-1/2 md:px-16 xl:px-24">
              <h3 className="mb-4 text-3xl font-bold text-[#333333]">
                Seminar Kit
              </h3>
              <p className="mb-8 font-medium leading-relaxed text-[#555555]">
                Paket perlengkapan kegiatan seperti seminar, workshop, atau
                event yang terdiri dari tas seminar, lanyard, ID card, notebook,
                pulpen, dan kebutuhan event lainnya.
              </p>
              <div>
                <Link to='/seminar-kit' className="rounded-lg bg-[#FF8A00] px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#E07900]">
                  Selengkapnya
                </Link>
              </div>
              {/* Decor: Green Clover outline */}
              <svg className="absolute bottom-12 right-12 w-10 opacity-80" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9131 28.3615L34.3407 33.9249C34.5248 34.0227 34.7402 34.0436 34.9397 33.9829C35.1392 33.9222 35.3065 33.7849 35.405 33.6011L39.1138 26.6494C39.2117 26.4653 39.2326 26.2499 39.1719 26.0504C39.1112 25.8509 38.9739 25.6836 38.7901 25.5851L28.3625 20.0218L33.9259 9.59421C34.0237 9.41009 34.0446 9.19468 33.9839 8.99519C33.9232 8.7957 33.7859 8.6284 33.6021 8.52996L26.6504 4.82107C26.4663 4.7232 26.2509 4.70233 26.0514 4.76301C25.8519 4.82369 25.6846 4.96099 25.5861 5.1448L20.0228 15.5724L9.59521 10.0091C9.41108 9.9112 9.19567 9.89032 8.99618 9.951C8.79669 10.0117 8.62939 10.149 8.53095 10.3328L4.82206 17.2845C4.7242 17.4686 4.70332 17.6841 4.764 17.8835C4.82468 18.083 4.96198 18.2503 5.14579 18.3488L15.5734 23.9121L10.0101 34.3397C9.91219 34.5238 9.89131 34.7392 9.95199 34.9387C10.0127 35.1382 10.15 35.3055 10.3338 35.404L17.2855 39.1129C17.4696 39.2107 17.685 39.2316 17.8845 39.1709C18.084 39.1102 18.2513 38.9729 18.3498 38.7891L23.9131 28.3615ZM25.8592 34.7591L32.114 38.0937C32.753 38.4346 33.4529 38.6464 34.1737 38.7168C34.8945 38.7873 35.6222 38.715 36.3151 38.5043C37.008 38.2935 37.6526 37.9483 38.2121 37.4884C38.7716 37.0285 39.235 36.4629 39.5759 35.8239L43.2857 28.8752C43.6266 28.2362 43.8384 27.5363 43.9088 26.8155C43.9793 26.0947 43.907 25.367 43.6963 24.6741C43.4855 23.9812 43.1403 23.3366 42.6804 22.7771C42.2205 22.2176 41.6549 21.7542 41.0159 21.4133L34.7601 18.0757L38.0947 11.8209C38.4356 11.1819 38.6474 10.482 38.7178 9.7612C38.7883 9.04039 38.716 8.31275 38.5053 7.61985C38.2945 6.92694 37.9493 6.28234 37.4894 5.72285C37.0295 5.16336 36.4639 4.69994 35.8249 4.35905L28.8761 0.649245C28.2372 0.308294 27.5373 0.0965467 26.8165 0.0260943C26.0956 -0.044358 25.368 0.0278648 24.6751 0.238639C23.9822 0.449412 23.3376 0.794609 22.7781 1.25452C22.2186 1.71442 21.7552 2.28003 21.4143 2.91905L18.0767 9.17482L11.8219 5.84025C11.1829 5.4993 10.483 5.28755 9.7622 5.2171C9.04138 5.14665 8.31374 5.21887 7.62084 5.42964C6.92793 5.64042 6.28333 5.98561 5.72384 6.44552C5.16435 6.90543 4.70093 7.47104 4.36004 8.11005L0.649319 15.0558C0.308367 15.6947 0.0966208 16.3946 0.0261687 17.1154C-0.0442834 17.8363 0.027939 18.5639 0.238713 19.2568C0.449486 19.9497 0.794683 20.5943 1.25459 21.1538C1.7145 21.7133 2.28011 22.1767 2.91912 22.5176L9.17581 25.8582L5.84124 32.113C5.50029 32.752 5.28854 33.4519 5.21809 34.1727C5.14764 34.8935 5.21986 35.6212 5.43064 36.3141C5.64141 37.007 5.98661 37.6516 6.44651 38.2111C6.90642 38.7706 7.47203 39.234 8.11105 39.5749L15.0598 43.2847C15.6987 43.6256 16.3986 43.8374 17.1194 43.9078C17.8403 43.9783 18.5679 43.9061 19.2608 43.6953C19.9537 43.4845 20.5983 43.1393 21.1578 42.6794C21.7173 42.2195 22.1807 41.6539 22.5216 41.0149L25.8592 34.7591Z" fill="#4ACC59" />
              </svg>

            </div>
          </div>

          {/* Row 4: Media Promosi */}
          <div className="flex w-full flex-col md:flex-row">
            <div className="relative order-2 flex w-full flex-col justify-center bg-white px-8 py-12 md:order-1 md:w-1/2 md:px-16 xl:px-24">
              <h3 className="mb-4 text-3xl font-bold text-[#333333]">
                Media Promosi
              </h3>
              <p className="mb-8 font-medium leading-relaxed text-[#555555]">
                Mengerjakan berbagai media promosi visual seperti banner,
                spanduk, backdrop, neonbox, signage, serta kebutuhan branding
                indoor dan outdoor lainnya.
              </p>
              <div>
                <Link to='/media-promosi' className="rounded-lg bg-[#FF8A00] px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#E07900]">
                  Selengkapnya
                </Link>
              </div>
              {/* Decor: Orange Zigzag */}
              <svg className="absolute top-0 left-0 w-16 opacity-80" width="93" height="56" viewBox="0 0 93 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-59.4658 1.60889L-29.0838 37.7465L-3.23393 16.7581L19.4108 44.8312L45.2608 23.8428L69.8453 52.1993L91.2489 34.5237" stroke="#FFA600" stroke-width="5" />
              </svg>

            </div>
            <div className="relative order-1 w-full min-h-[350px] bg-[#E54D00] md:order-2 md:w-1/2">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="layanan4.webp"
                  alt="Media Promosi"
                  className="h-full w-full object-cover "
                />
              </div>
              {/* Decor: Yellow Triangle */}
              <svg
                className="absolute -bottom-6 left-12 w-12 opacity-80"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M25 5L45 40H5Z"
                  stroke="#FFD700"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#58496E] py-20 px-6 md:py-28">
        {/* Background Placeholder - Uncomment and adjust source later! */}
        <img src="motto.webp" alt="Background" className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl md:leading-[1.3]">
            Kami Siap Mendukung Kebutuhan Cetak
            <br />
            & <span className="text-[#00FFFF]">Media Promosi</span> Berkelanjutan Anda
          </h2>
        </div>
      </section>
      {/* Klien Kami */}
      <section id="klien-kami" className="py-12">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#333333] sm:text-4xl">
            Klien Kami
          </h2>
          <p className="mb-12 max-w-2xl text-base font-medium text-gray-500 sm:text-lg">
            Dipercaya oleh berbagai institusi, instansi pendidikan, dan
            perusahaan untuk memenuhi kebutuhan cetak mereka dengan kualitas
            terbaik.
          </p>

          {/* Carousel Viewport */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6"
            style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="flex h-32 w-[100px] lg:w-[220px] shrink-0 snap-start items-center justify-center rounded-xl bg-white p-2 lg:p-4 transition-transform hover:-translate-y-1"
              >
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="h-full w-full object-contain hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback visual if placeholder image doesn't exist
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-sm font-bold text-gray-300 uppercase tracking-widest text-center">${client.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Arrow Controls (Bottom Right) */}
          <div className="mt-8 flex w-full items-center justify-end gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 text-gray-400 transition-colors hover:border-[#FF8A00] hover:text-[#FF8A00]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FF8A00] bg-[#FF8A00] text-white transition-colors hover:bg-[#E07900] hover:border-[#E07900]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" className="mx-auto w-full max-w-[1400px] py-16 px-6 ">
        {/* Top: Header & Arrows */}
        <div className="mb-8 flex items-end justify-between max-w-[1300px] ms-auto">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#333333] sm:text-4xl ">
            Portofolio
          </h2>

          {/* Top Right Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scrollPortofolio("left")}
              aria-label="Scroll left"
              className="text-gray-400 transition-colors hover:text-[#333333]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="15 18 9 12 15 6 15 18" />
              </svg>
            </button>
            <button
              onClick={() => scrollPortofolio("right")}
              aria-label="Scroll right"
              className="text-gray-400 transition-colors hover:text-[#333333]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="9 18 15 12 9 6 9 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          ref={portofolioRef}
          onScroll={handlePortofolioScroll}
          className="no-scrollbar flex snap-x snap-mandatory scroll-smooth overflow-x-auto pb-6 gap-2 md:gap-6"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {portofolioItems.map((item, idx) => (
            <div
              key={idx}
              className="flex w-[160px] shrink-0 snap-start flex-col md:w-[240px]"
            >
              {/* Image Card */}
              <div className="mb-3 w-full h-[200px] md:h-[300px] overflow-hidden rounded-2xl bg-gray-100">
                <div
                  className="h-full w-full bg-bottom bg-cover bg-no-repeat transition-transform duration-500 scale-150 hover:scale-160"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  title={item.title}
                />
              </div>
              <h4 className="pl-1 text-base font-bold text-[#333333] md:text-lg">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Progress Slide Bar (Middle Bottom) */}
        <div className="mx-auto mt-6 h-[2px] w-full max-w-[300px] bg-gray-200">
          <div
            className="h-full w-1/3 bg-[#333333] transition-transform duration-100 ease-out"
            style={{ transform: `translateX(${portofolioProgress * 200}%)` }}
          />
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang-kami" className="mx-auto w-full max-w-[1200px] px-6 py-16 md:py-24">
        <div className="relative flex flex-col items-center gap-12 md:flex-row lg:gap-20">

          {/* Left Column: Image */}
          <div className="relative w-full md:w-1/2">
            <img
              src="tentang-kami.webp"
              alt="Tentang Kami - Diklik Cetak Printing"
              className="w-full h-auto object-cover shadow-sm"
            />
            {/* Decor: Blue Circle with Diagonal Line */}
            <svg
              className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 w-16 opacity-80"
              viewBox="0 0 40 40"
              fill="none"
              stroke="#3DC4F3"
              strokeWidth="2.5"
            >
              <circle cx="20" cy="20" r="15" />
              <line x1="6" y1="34" x2="34" y2="6" />
            </svg>
          </div>

          {/* Right Column: Text Information */}
          <div className="relative flex w-full flex-col justify-center md:w-1/2">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-[#333333] sm:text-4xl">
              Tentang Kami
            </h2>
            <div className="space-y-4 text-base font-medium leading-relaxed text-[#555555] sm:text-lg">
              <p>
                <strong className="font-bold text-[#333333]">Diklik Cetak Printing</strong> adalah perusahaan profesional yang bergerak di bidang digital printing, advertising, dan corporate merchandise.
              </p>
              <p>
                Kami berkomitmen menghadirkan hasil cetak berkualitas tinggi dengan pengerjaan cepat dan standar kerja yang terstruktur.
              </p>
              <p>
                Lebih dari sekadar vendor percetakan, kami hadir sebagai mitra strategis dalam membantu kebutuhan branding dan media promosi, khususnya untuk instansi dan perusahaan.
              </p>
            </div>

            {/* Decor: Purple Zigzag (Top Right) */}
            <svg
              className="absolute hidden md:block -top-6 right-8 w-24 opacity-80"
              viewBox="0 0 100 30"
              fill="none"
              stroke="#643EA1"
              strokeWidth="4"
              strokeLinejoin="round"
            >
              <path d="M0 5L20 20L40 5L60 20L80 5L100 20" />
            </svg>

            {/* Decor: Purple/Dark Blue Cross (Bottom Left of text box) */}
            <svg
              className="absolute  -bottom-16 -left-6 md:-left-12 w-12 opacity-80"
              viewBox="0 0 40 40"
              fill="none"
              stroke="#643EA1"
              strokeWidth="3.5"
              strokeLinejoin="round"
            >
              <path d="M15 5h10v10h10v10h-10v10h-10v-10h-10v-10h10z" />
            </svg>

            {/* Decor: Green Triangle (Bottom Right) */}
            <svg
              className="absolute hidden md:block -bottom-20 right-8 w-14 opacity-80"
              viewBox="0 0 50 50"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="3.5"
              strokeLinejoin="round"
            >
              <polygon points="5 10 45 10 25 45" />
            </svg>
          </div>

        </div>
      </section>

    </main>
  );
}
