import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Royal Oud",
    price: 280,
    image: "/products/royal-oud.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Oud",
    date: "2025-12-01",
  },
  {
    id: 2,
    name: "Golden Musk",
    price: 220,
    image: "/products/golden-musk.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Musk",
    date: "2020-12-01",
  },
  {
    id: 3,
    name: "Desert Rose",
    price: 195,
    image: "/products/desert-rose.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Rose",
    date: "2027-12-01",
  },
  {
    id: 4,
    name: "Amber Night",
    price: 210,
    image: "/products/amber-night.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Amber",
    date: "2025-12-01",
  },
  {
    id: 5,
    name: "White Musk",
    price: 180,
    image: "/products/white-musk.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Musk",
    date: "2024-12-01",
  },
  {
    id: 6,
    name: "Oud Supreme",
    price: 320,
    image: "/products/oud-supreme.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Oud",
    date: "2023-12-01",
  },
  {
    id: 7,
    name: "Velvet Rose",
    price: 205,
    image: "/products/velvet-rose.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Rose",
    date: "2024-12-01",
  },
  {
    id: 8,
    name: "Black Amber",
    price: 245,
    image: "/products/black-amber.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Amber",
    date: "2026-12-01",
  },
  {
    id: 9,
    name: "Pure Attar",
    price: 260,
    image: "/products/pure-attar.jpeg",
    desc: "Deep woody oud with royal warmth",
    category: "Attar",
    date: "2025-11-01",
  },
];

export default function Collections() {
    const navigate = useNavigate();

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("new");
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const filteredProducts = products
    .filter((p) => filter === "All" || p.category === filter)
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "new")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      return 0;
    });

  return (
    <section className="pt-36 pb-24 max-w-7xl mx-auto px-8">
      {/* Top Controls */}
      <div className="flex items-center justify-between mb-12 relative">

        {/* Back Button */}
        <button
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#d4af37] hover:underline"
        >
             ← Back
        </button>

        <div className="flex gap-4">
          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowFilter(!showFilter);
                setShowSort(false);
              }}
              className="border border-[#d4af37] text-[#d4af37] px-5 py-2 text-sm tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition"
            >
              Filter ▾
            </button>

            {showFilter && (
              <div className="absolute right-0 mt-2 bg-white shadow-xl border z-50 w-40">
                {["All", "Oud", "Musk", "Rose", "Amber", "Attar"].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setFilter(c);
                      setShowFilter(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSort(!showSort);
                setShowFilter(false);
              }}
              className="border border-[#d4af37] text-[#d4af37] px-5 py-2 text-sm tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition"
            >
              Sort ▾
            </button>

            {showSort && (
              <div className="absolute right-0 mt-2 bg-white shadow-xl border z-50 w-48">
                <button
                  onClick={() => { setSort("low"); setShowSort(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Price: Low to High
                </button>

                <button
                  onClick={() => { setSort("high"); setShowSort(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Price: High to Low
                </button>

                <button
                  onClick={() => { setSort("new"); setShowSort(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Newest Arrivals
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-[#d4af37] uppercase mb-3">
          Signature Fragrances
        </p>
        <h1 className="text-4xl md:text-5xl font-serif">
          All Collections
        </h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {filteredProducts.map((p) => (
          <div key={p.id} className="text-center group">
            <div className="relative overflow-hidden mb-6 group">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Text on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 text-white opacity-0 group-hover:opacity-100 transition duration-500 text-center px-6">
                <p className="text-sm opacity-90">{p.desc}</p>
              </div>

            </div>

            <h3 className="text-lg tracking-wide">{p.name}</h3>
            <p className="text-[#896f1a] mt-2 text-xl font-bold">{p.price}</p>
          </div>
        ))}
      </div>

      {/* Closing Statement */}
      <div className="mt-20 text-center">
        <button
          onClick={() => navigate("/")}
          className="border border-[#d4af37] text-[#d4af37] rounded-2xl px-10 py-4 tracking-widest hover:bg-[#d4af37] hover:text-black transition"
        >
          RETURN TO HOME
        </button>
      </div>
    </section>
  );
}
