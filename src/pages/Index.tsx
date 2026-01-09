import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Heritage } from "@/components/Heritage";
import { Features } from "@/components/Features";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <Heritage />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
