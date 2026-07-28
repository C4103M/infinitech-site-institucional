import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/hero-img-with-blur.png";
const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden  "
            // style={{ backgroundImage: `url(${HeroImage})` }}
        >
            {/* Subtle gradient background */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat overflow-hidden 
             before:absolute before:inset-0 before:z-0
             before:bg-[#2727B5]/50 
             dark:before:bg-[#060636]/50"
                style={{
                    backgroundImage: `url(${HeroImage}), linear-gradient(lightgray, lightgray)`,
                }}
            ></div>
            {/* <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat overflow-hidden"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}
            ></div> */}

            {/* Decorative shapes */}
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative container mx-auto px-4 text-center max-w-4xl pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block text-sm font-display font-semibold text-accent mb-6 tracking-widest uppercase color-[#C2FFDE]">
                        EMPRESA JÚNIOR DE TECNOLOGIA DO IFSP - SALTO
                    </span>

                    <h1 className="font-display text-center mb-6">
                        {/* 1º Span */}
                        <span className="block text-white text-[18px] md:text-[24px] lg:text-[29px] font-normal leading-[84%] tracking-[-1px] lg:tracking-[-1.74px] [text-shadow:3px_3px_1.8px_rgba(0,0,0,0.25)] mt-2 mb-3 lg:mt-3 lg:mb-5">
                            Transformamos sua presença digital com
                        </span>

                        {/* 2º Span - Gradiente e Uppercase */}
                        <span className="block text-transparent bg-clip-text bg-[linear-gradient(180deg,#0357FF_21.63%,#58D2FF_42.79%,#18EF64_97.12%)] text-[42px] md:text-[72px] lg:text-[122px] font-bold leading-[80%] tracking-[-3px] md:tracking-[-5px] lg:tracking-[-9.76px] uppercase mb-1 md:mb-2 lg:mb-3">
                            sites de alta performance
                        </span>

                        {/* 3º Span - Uppercase */}
                        <span className="block text-white text-[20px] md:text-[32px] lg:text-[43px] font-bold leading-[115%] tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-3.44px] uppercase">
                            e anúncios que vendem.
                        </span>
                    </h1>

                    {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Soluções personalizadas em desenvolvimento web e gestão
                            de tráfego pago para acelerar os resultados do seu
                            negócio.
                        </p> */}

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
