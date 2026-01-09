import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const collections = [
  {
    id: 1,
    name: "Royal Oud",
    description: "Deep, woody notes with a touch of mystique",
    price: "$280",
    image: product1,
  },
  {
    id: 2,
    name: "Golden Musk",
    description: "Soft, sensual musk with warm undertones",
    price: "$220",
    image: product2,
  },
  {
    id: 3,
    name: "Desert Rose",
    description: "Enchanting floral with oriental spices",
    price: "$195",
    image: product3,
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
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
            Signature Fragrances
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our Collections
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <Button variant="gold" className="w-full">
                    Quick View
                  </Button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-heading text-xl lg:text-2xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground mb-3">
                  {product.description}
                </p>
                <p className="font-heading text-lg text-gold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="goldOutline" size="xl">
            View All Collections
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
