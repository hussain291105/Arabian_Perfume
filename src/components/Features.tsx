import { motion } from "framer-motion";
import { Droplets, Leaf, Crown, Sparkles } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Royal Quality",
    description: "Premium ingredients sourced from the finest locations across the Arabian peninsula",
  },
  {
    icon: Droplets,
    title: "Pure Essence",
    description: "Concentrated formulas with 40% pure perfume oil for exceptional longevity",
  },
  {
    icon: Leaf,
    title: "Natural Origins",
    description: "Sustainably harvested ingredients respecting nature and tradition",
  },
  {
    icon: Sparkles,
    title: "Artisan Crafted",
    description: "Each blend is handcrafted by master perfumers with decades of expertise",
  },
];

export function Features() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            The Arabian Difference
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/30 mb-6 group-hover:border-gold transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-background/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
