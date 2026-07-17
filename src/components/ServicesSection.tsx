import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Globe2, LayoutTemplate, TrendingUp, Bot } from "lucide-react";

const services = [
    {
        icon: Globe2,
        title: "Sites personalizados",
        description:
            "Desenvolvemos o site da sua empresa do zero, com design responsivo, performance otimizada e uma identidade visual que transmite credibilidade ao seu público.",
    },
    {
        icon: LayoutTemplate,
        title: "Landing pages",
        description:
            "Páginas focadas em conversão para lançamentos, captação de leads ou campanhas específicas, com copy e estrutura pensadas para gerar resultado.",
    },
    {
        icon: TrendingUp,
        title: "Tráfego pago",
        description:
            "Planejamento e gestão de campanhas em Google Ads e Meta Ads, com acompanhamento de métricas e otimização contínua para reduzir custo por resultado.",
    },
    {
        icon: Bot,
        title: "Soluções em IA",
        description:
            "Automações, chatbots e integrações com inteligência artificial para otimizar processos internos e o atendimento ao seu cliente.",
    },
];

const ServicesSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section id="servicos" className="section-padding relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
                        O Que Fazemos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
                        <span className="text-gradient">Serviços</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        O que a{" "}
                        <span className="text-foreground font-semibold">
                            Infinitech Jr
                        </span>{" "}
                        pode fazer por você e pelo seu negócio?
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto space-y-4">
                    {services.map((service, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-glass rounded-lg overflow-hidden hover:border-primary/30 transition-colors duration-300"
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-stretch text-left"
                                >
                                    <span className="w-2 md:w-2.5 bg-primary/20 shrink-0" />
                                    <span className="flex-1 flex items-center gap-4 py-5 px-5">
                                        <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <service.icon
                                                className="text-primary"
                                                size={18}
                                            />
                                        </span>
                                        <span className="font-display font-semibold text-base md:text-lg">
                                            {service.title}
                                        </span>
                                    </span>
                                    <span className="flex items-center justify-center px-5 shrink-0">
                                        <Plus
                                            className={`text-primary transition-transform duration-300 ${
                                                isOpen ? "rotate-45" : "rotate-0"
                                            }`}
                                            size={22}
                                        />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-sm text-muted-foreground leading-relaxed pl-[4.25rem] pr-5 pb-5">
                                                {service.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;