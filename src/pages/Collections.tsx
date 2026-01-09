import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Royal Oud",
    price: "$280",
    image: "/products/royal-oud.jpeg",
    desc: "Deep woody oud with royal warmth",
  },
  {
    id: 2,
    name: "Golden Musk",
    price: "$220",
    image: "/products/golden-musk.jpeg",
  },
  {
    id: 3,
    name: "Desert Rose",
    price: "$195",
    image: "/products/desert-rose.jpeg",
  },
  {
    id: 4,
    name: "Amber Night",
    price: "$210",
    image: "/products/amber-night.jpeg",
  },
  {
    id: 5,
    name: "White Musk",
    price: "$180",
    image: "/products/white-musk.jpeg",
  },
  {
    id: 6,
    name: "Oud Supreme",
    price: "$320",
    image: "/products/oud-supreme.jpeg",
  },
  {
    id: 7,
    name: "Velvet Rose",
    price: "$205",
    image: "/products/velvet-rose.jpeg",
  },
  {
    id: 8,
    name: "Black Amber",
    price: "$245",
    image: "/products/black-amber.jpeg",
  },
  {
    id: 9,
    name: "Pure Attar",
    price: "$260",
    image: "/products/pure-attar.jpeg",
  },
];

export default function Collections() {
    const navigate = useNavigate();
  return (
    <section className="pt-36 pb-24 max-w-7xl mx-auto px-8">
        {/* Back Button */}
        <button
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#d4af37] hover:underline"
        >
             ← Back
        </button>

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
        {products.map((p) => (
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
            <p className="text-[#d4af37] mt-2">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
