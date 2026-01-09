import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Decorative */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gold/50" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="w-16 h-px bg-gold/50" />
          </div>

          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Stay Connected
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Join Our World of Luxury
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            Subscribe to receive exclusive offers, new collection previews, 
            and insights into the art of Arabian perfumery.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-14 px-6 border-border bg-transparent font-body text-base placeholder:text-muted-foreground focus:border-gold"
            />
            <Button variant="gold" size="lg" className="h-14 px-8">
              Subscribe
            </Button>
          </form>

          <p className="font-body text-sm text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
