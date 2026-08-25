import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, Cpu, HeartHandshake, GraduationCap, Plus, Minus } from "lucide-react";

const values = [
    {
        icon: Coins,
        title: "Custo Acessível",
        tagline: "Qualidade de agência sênior com precificação júnior",
        description:
            "Como empresa júnior sem fins lucrativos, revertemos todo o faturamento em capacitação. Isso significa que você tem acesso a soluções de software de ponta por uma fração do preço cobrado por agências tradicionais.",
    },
    {
        icon: Cpu,
        title: "Inovação Constante",
        tagline: "Desenvolvimento com as stacks mais modernas do mundo",
        description:
            "Nossos membros são estudantes universitários imersos diariamente em pesquisa e novas tecnologias. Trabalhamos com React, Next.js, TypeScript e Inteligência Artificial, sem o peso de legado de agências antigas.",
    },
    {
        icon: HeartHandshake,
        title: "Atendimento Dedicado",
        tagline: "Uma equipe focada no sucesso da sua entrega",
        description:
            "Garantimos transparência total com sprints semanais de acompanhamento e reuniões de alinhamento. Você conversa diretamente com os desenvolvedores e designers que estão construindo sua aplicação.",
    },
    {
        icon: GraduationCap,
        title: "Respaldo Acadêmico",
        tagline: "Projetos orientados por doutores e mestres",
        description:
            "Não trabalhamos com achismos. Cada linha de código e decisão de arquitetura é validada por professores especialistas da universidade e apoiada pela chancela da rede oficial Brasil Júnior.",
    },
];

const ValueSectionEditorial = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <section id="servicos" className="py-24 md:py-36 bg-background relative border-y border-border/40">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
                    
                    {/* Left Column - Sticky Info */}
                    <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
                        <div className="space-y-6">
                            <span className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase border border-primary/20 px-3 py-1 rounded-full bg-primary/5 w-fit">
                                CONFIANÇA & ENTREGA
                            </span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.05] tracking-tight">
                                Por que nos escolher como seu parceiro de <span className="text-gradient">tecnologia?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                Redefinimos a experiência de contratação de software com transparência júnior e seriedade sênior.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Interactive List */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col border-t border-border/60">
                        {values.map((item, i) => {
                            const isHovered = hoveredIndex === i;
                            return (
                                <div
                                    key={item.title}
                                    className="border-b border-border/60 relative cursor-pointer py-6 md:py-8 group transition-colors duration-300"
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
                                >
                                    {/* Hover background slide */}
                                    <div className={`absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -mx-4 px-4 rounded-xl ${isHovered ? "opacity-100 bg-secondary/40" : ""}`} />
                                    
                                    <div className="relative flex items-start justify-between z-10">
                                        <div className="flex gap-6 items-start">
                                            {/* Number indicator */}
                                            <span className={`font-mono text-sm mt-1 transition-colors duration-300 ${isHovered ? "text-primary font-bold" : "text-muted-foreground/60"}`}>
                                                (0{i + 1})
                                            </span>

                                            {/* Title & Tagline */}
                                            <div>
                                                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 group-hover:text-primary">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs font-mono text-muted-foreground/75 mt-1">
                                                    {item.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Icon interaction */}
                                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-primary border-primary text-primary-foreground rotate-45" : "border-border text-muted-foreground"}`}>
                                            {isHovered ? <Minus size={14} /> : <Plus size={14} />}
                                        </div>
                                    </div>

                                    {/* Expandable description panel */}
                                    <AnimatePresence initial={false}>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden relative z-10 pl-12 pr-8"
                                            >
                                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                                    <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-xl hidden md:flex">
                                                        <item.icon size={22} />
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValueSectionEditorial;
