import { useNavigate } from "react-router-dom";

export default function Story() {
  const navigate = useNavigate();

  return (
    <section className="pt-28 pb-24 bg-[#faf7f2]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#d4af37] hover:underline"
        >
          ← Back
        </button>

        <p className="text-center text-sm tracking-[0.35em] text-[#d4af37] uppercase mb-4">
          Our Heritage
        </p>
        <h1 className="text-center text-4xl md:text-6xl font-serif mb-6">
          The History of Arabian Perfumery
        </h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground">
          A timeless journey of scent, tradition, and masterful craftsmanship passed down through
          generations of Arabian perfumers.
        </p>
      </div>

      {/* Timeline Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <img
            src="/products/royal-oud.jpeg"
            alt="Ancient incense trade"
            className="rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">Origins of Sacred Fragrance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Arabian perfumery began as a sacred ritual. Oud smoke purified homes, mosques, and
              gatherings. Fragrance symbolized hospitality, respect, and divine connection.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-14 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <img
              src="/products/velvet-rose.jpeg"
              alt="Oud and rose distillation"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-serif mb-4">Mastering Distillation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Steam distillation and oil infusion were perfected to extract the deepest notes from
              oud, rose, musk, and ambergris, creating unmatched richness and longevity.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <img
            src="/products/white-musk.jpeg"
            alt="Luxury perfume bottles"
            className="rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-serif mb-4">Modern Luxury, Ancient Roots</h2>
            <p className="text-muted-foreground leading-relaxed">
              Today’s Arabian perfumes blend heritage with refinement, preserving authenticity while
              elevating elegance for modern connoisseurs worldwide.
            </p>
          </div>
        </div>

      </div>

      {/* Closing Statement */}
      <div className="mt-28 bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Preserving the Art of Scent
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Every fragrance we craft is a tribute to centuries of artistry. From rare botanicals to
            meticulous blending, we honor the soul of Arabian perfumery in every bottle.
          </p>

          <button
            onClick={() => navigate("/")}
            className="border border-[#d4af37] text-[#d4af37] px-10 py-4 tracking-widest hover:bg-[#d4af37] hover:text-black transition"
          >
            RETURN TO HOME
          </button>
        </div>
      </div>
    </section>
  );
}
