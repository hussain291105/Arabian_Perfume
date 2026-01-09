import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury Arabian Perfumes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24">
        <div className="max-w-3xl">
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-gold to-transparent mb-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6"
          >
            The Art of Arabian Perfumery
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Discover the
            <span className="block italic text-gold-light">Essence of Luxury</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed"
          >
            Experience the timeless allure of authentic Arabian fragrances, 
            crafted with the finest oud, musk, and exotic essences from the heart of Arabia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="gold" size="xl">
              Explore Collection
            </Button>
            <Button 
              variant="heroGold" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:border-gold"
            >
              Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-12 mt-16 pt-8 border-t border-primary-foreground/10"
          >
            {[
              { value: "50+", label: "Years Heritage" },
              { value: "200+", label: "Unique Blends" },
              { value: "30+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl md:text-4xl text-gold">{stat.value}</p>
                <p className="font-body text-sm uppercase tracking-wider text-primary-foreground/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
