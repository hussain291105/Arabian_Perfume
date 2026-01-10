import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  shop: [
    { name: "All Products", href: "#" },
    { name: "New Arrivals", href: "#" },
    { name: "Best Sellers", href: "#" },
    { name: "Gift Sets", href: "#" },
  ],
  about: [
    { name: "Our Story", href: "#" },
    { name: "Craftsmanship", href: "#" },
    { name: "Ingredients", href: "#" },
    { name: "Sustainability", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQs", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="Arabian Perfumes" className="h-20 w-auto mb-6 brightness-0 invert" />
              <p className="font-body text-background/70 max-w-sm mb-8 leading-relaxed">
                Crafting exceptional Arabian fragrances since 1974. 
                Experience the luxury of authentic oud and exotic essences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-heading text-lg mb-6 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-background/70 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-background/50">
              © 2024 Arabian Perfumes. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-sm text-background/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-background/50 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
