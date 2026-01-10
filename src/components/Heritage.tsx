import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heritageImg from "@/assets/heritage.jpg";
import { Link } from "react-router-dom";

export function Heritage() {
  return (
    <section id="heritage" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={heritageImg}
                alt="Arabian Perfumery Heritage"
                className="w-full aspect-square object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-gold/20 -z-10" />
              <div className="absolute -inset-8 border border-gold/10 -z-10" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-gold text-gold-foreground px-8 py-6 text-center"
            >
              <p className="font-heading text-3xl">50+</p>
              <p className="font-body text-sm uppercase tracking-wider">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Our Heritage
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              A Legacy of
              <span className="block italic">Artisanal Excellence</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                For over five decades, our master perfumers have been preserving the ancient art 
                of Arabian perfumery. Each fragrance is a testament to our unwavering commitment 
                to authenticity and luxury.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                We source the finest oud from the forests of Assam, rare ambergris from distant 
                shores, and the most precious rose essences from the valleys of Taif. Every ingredient 
                tells a story of tradition, passion, and uncompromising quality.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: "Hand-Crafted", desc: "Traditional methods" },
                { title: "Pure Ingredients", desc: "Ethically sourced" },
                { title: "Long-Lasting", desc: "Premium concentration" },
                { title: "Unique Blends", desc: "Exclusive formulas" },
              ].map((feature) => (
                <div key={feature.title} className="border-l-2 border-gold pl-4">
                  <p className="font-heading text-lg text-foreground">{feature.title}</p>
                  <p className="font-body text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/story">
              <Button variant="goldOutline" size="xl">
                Discover Our Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
