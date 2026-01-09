import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import emailjs from "emailjs-com";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_qgwqr32",
      "template_vx8auye",
      { user_email: email },
      "s5BeUpXl8Y5YY0x4-"
    )
    .then(() => {
      setStatus("Thank you for subscribing!");
      setEmail("");
    })
    .catch(() => {
      setStatus("Failed to send. Try again later.");
    });
  };
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 px-6 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button type="submit" variant="gold" size="lg">
              Subscribe
            </Button>
          </form>

          {status && (
            <p className="font-body text-sm text-foreground mt-4">
              {status}
            </p>
          )}

          <p className="font-body text-sm text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
