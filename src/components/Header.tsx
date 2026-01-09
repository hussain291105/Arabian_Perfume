import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Heritage", href: "#heritage" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Arabian Perfumes" className="h-14 lg:h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="w-2/4 flex justify-center items-center gap-16 text-sm tracking-[0.25em] text-gray-700 uppercase relative ali">

            <a href="#home" className="hover:text-[#d4af37] transition">
              Home
            </a>

            {/* ✅ Collections Dropdown */}
            <div
              className="relative"
            >
              <button onMouseEnter={() => setDropdownOpen(true)} className="hover:text-[#d4af37] transition">
                COLLECTIONS
              </button>

              {dropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-56 bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden z-50 normal-case tracking-normal" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <a href="#oud" onClick={() => setDropdownOpen(false)} className="block px-6 py-3 hover:bg-gray-50">
                    Oud Collection
                  </a>
                  <a href="#musk" onClick={() => setDropdownOpen(false)} className="block px-6 py-3 hover:bg-gray-50">
                    Musk Series
                  </a>
                  <a href="#attar" onClick={() => setDropdownOpen(false)} className="block px-6 py-3 hover:bg-gray-50">
                    Attar Oils
                  </a>
                  <a href="#gift" onClick={() => setDropdownOpen(false)} className="block px-6 py-3 hover:bg-gray-50">
                    Gift Sets
                  </a>
                </div>
              )}
            </div>

            <a href="#heritage" className="hover:text-[#d4af37] transition">
              Heritage
            </a>

            <a href="#contact" className="hover:text-[#d4af37] transition">
              Contact
            </a>

          </nav>

          {/* CTA Button */}
          

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-lg uppercase tracking-[0.2em] text-foreground/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <Button variant="gold" size="lg" className="mt-4">
                Shop Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
