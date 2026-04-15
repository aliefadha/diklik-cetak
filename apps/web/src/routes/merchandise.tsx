import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'

export const Route = createFileRoute('/merchandise')({
  component: MerchandisePage,
})

const categories = [
  { name: "Documen Printing", path: "/document-printing", active: false },
  { name: "Merchandise", path: "/merchandise", active: true },
  { name: "Seminar Kit", path: "/seminar-kit", active: false },
  { name: "Media Promosi", path: "/media-promosi", active: false },
];

const items = [
  { name: "Tumbler", image: "tumbler.webp" },
  { name: "Mug", image: "mug.webp" },
  { name: "Tote Bag", image: "tote-bag.webp" },
  { name: "Goodie Bag", image: "goodie-bag.webp" },
  { name: "Kaos", image: "kaos.webp" },
  { name: "Payung", image: "payung.webp" }
];

function MerchandisePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[300px] md:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('merchandise.webp')" }}
        >
          {/* Overlay to darken image behind text */}
          <div className="absolute inset-0 bg-[#333333]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto text-white mt-8 md:mt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Merchandise
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-xl text-gray-200">
            Menyediakan berbagai produk merchandise custom seperti mug, tumbler, totebag, notebook, dan souvenir lainnya untuk kebutuhan promosi maupun identitas brand.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 lg:gap-16">

        {/* Sidebar Kategori */}
        <div className="w-full md:w-[250px] shrink-0 md:border-r md:border-gray-300 md:pr-10">
          <h2 className="text-3xl font-bold text-black mb-8 md:mb-10">Kategori</h2>
          <ul className="flex flex-col gap-6 md:gap-8">
            {categories.map((cat, idx) => (
              <li key={idx}>
                <Link
                  to={cat.path}
                  className={`flex items-center font-medium transition-colors hover:text-[#FF8A00] ${cat.active ? 'text-black font-semibold' : 'text-gray-600'}`}
                >
                  <ChevronRight className="w-4 h-4 mr-3 shrink-0" />
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-12">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer transition-transform duration-300 ">
                {/* Image Container */}
                <div className="w-full aspect-square bg-transparent flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[80%] h-[80%] object-contain drop-shadow-md transition-all duration-300 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `<div class="flex items-center justify-center w-full h-full bg-gray-100 rounded-xl"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest text-center px-4">${item.name}</span></div>`;
                    }}
                  />
                </div>
                {/* Text */}
                <h3 className="text-sm md:text-base font-bold text-center text-black transition-colors">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}
