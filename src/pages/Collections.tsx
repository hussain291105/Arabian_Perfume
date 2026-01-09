const products = [
  {
    id: 1,
    name: "Royal Oud",
    price: "$280",
    image: "/products/royal-oud.jpeg",
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
  return (
    <section className="pt-36 pb-24 max-w-7xl mx-auto px-8">
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
            <div className="overflow-hidden mb-6">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <h3 className="text-lg tracking-wide">{p.name}</h3>
            <p className="text-[#d4af37] mt-2">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
