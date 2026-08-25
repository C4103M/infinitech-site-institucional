import { motion } from "framer-motion";
import { Coins, Cpu, HeartHandshake, GraduationCap } from "lucide-react";

const valueItems = [
    { 
        id: "01", 
        sys: "SYS-COST", 
        icon: Coins, 
        title: "Custo Acessível", 
        desc: "Preços menores que o mercado tradicional, com a mesma qualidade de grandes agências de desenvolvimento de software." 
    },
    { 
        id: "02", 
        sys: "SYS-TECH", 
        icon: Cpu, 
        title: "Inovação Constante", 
        desc: "Equipe formada por estudantes de tecnologia imersos nas stacks, frameworks e conceitos mais recentes do mercado." 
    },
    { 
        id: "03", 
        sys: "SYS-MGMT", 
        icon: HeartHandshake, 
        title: "Atendimento Dedicado", 
        desc: "Seu projeto recebe atenção exclusiva e transparente com reuniões semanais de acompanhamento e sprints focados." 
    },
    { 
        id: "04", 
        sys: "SYS-ACAD", 
        icon: GraduationCap, 
        title: "Respaldo Acadêmico", 
        desc: "Supervisionados por professores doutores da universidade e apoiados pela rede federada Brasil Júnior." 
    }
];

const ValueSectionIndustrial = () => {
    return (
        <section id="servicos" className="py-24 md:py-32 bg-background relative overflow-hidden border-y border-border/40">
            {/* Fine tech grid background line */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                
                {/* Header with technical border */}
                <div className="border-b border-border/40 pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="text-[10px] font-mono text-accent mb-3 tracking-[0.3em] uppercase flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                            [ METODOLOGIA E EFICIÊNCIA ]
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                            Por que escolher a <span className="text-gradient">Infinitech?</span>
                        </h2>
                    </div>
                    <div className="md:max-w-xs font-mono text-xs text-muted-foreground leading-relaxed border-l border-border/40 pl-4">
                        Nossa operação junta o rigor acadêmico de uma universidade federal com o dinamismo do ecossistema júnior.
                    </div>
                </div>

                {/* Industrial grid table */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border/40">
                    {valueItems.map((item) => (
                        <div
                            key={item.id}
                            className="border-r border-b border-border/40 p-8 md:p-12 relative overflow-hidden group hover:bg-secondary/15 transition-all duration-300"
                        >
                            {/* Technical Corner Marking */}
                            <div className="absolute top-3 right-3 font-mono text-[9px] text-muted-foreground/40 group-hover:text-accent transition-colors">
                                [{item.sys}]
                            </div>

                            {/* Huge background number */}
                            <div className="absolute -bottom-8 -right-4 font-display font-bold text-[120px] md:text-[160px] text-border/20 select-none pointer-events-none group-hover:text-primary/5 transition-all duration-300 font-mono">
                                {item.id}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="w-10 h-10 rounded border border-border/60 bg-background flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
                                    <item.icon size={20} />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-display font-bold text-xl tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ValueSectionIndustrial;
