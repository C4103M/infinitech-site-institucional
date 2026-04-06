import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--hero-gradient)" }}
      />

      <div className="relative container mx-auto px-4 text-center max-w-4xl pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-display font-semibold text-accent mb-6 tracking-widest uppercase">
            Empresa Júnior de Tecnologia
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Transformamos sua presença digital com{" "}
            <span className="text-gradient">sites de alta performance</span> e{" "}
            anúncios que vendem.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Soluções personalizadas em desenvolvimento web e gestão de tráfego
            pago para acelerar os resultados do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#processo">Como Funciona</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
