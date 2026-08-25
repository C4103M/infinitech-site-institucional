import { motion } from "framer-motion";
import { Coins, Cpu, HeartHandshake, GraduationCap } from "lucide-react";

const ValueSectionBento = () => {
    return (
        <section id="servicos" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-mono tracking-[0.2em] text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                        DIFERENCIAIS
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 tracking-tight">
                        Por que contratar a <span className="text-gradient">Infinitech?</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Combinamos a flexibilidade acadêmica com metodologias de mercado para entregar tecnologia de ponta.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-12 gap-6">
                    
                    {/* CARD 1: Custo Acessível (7 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-12 lg:col-span-7 bg-card border border-border/80 rounded-2xl p-8 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
                        <div>
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                    <Coins className="text-primary" size={24} />
                                </div>
                                <span className="text-sm font-mono text-muted-foreground/50">01 / CUSTO-BENEFÍCIO</span>
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-3">Custo Acessível</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-md">
                                Preços menores que o mercado tradicional, com a mesma qualidade de grandes agências de tecnologia. Nosso modelo EJ permite otimização máxima de recursos.
                            </p>
                        </div>

                        {/* Mini Visualizer: Comparativo de Custo */}
                        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col gap-3">
                            <div className="text-xs font-mono text-muted-foreground">COMPARAÇÃO DE INVESTIMENTO ESTIMADO</div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between text-xs">
                                    <span>Agência Tradicional</span>
                                    <span className="font-mono text-destructive">100% (R$$$$)</span>
                                </div>
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-destructive/60 rounded-full w-full" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-primary font-medium">Infinitech (EJ)</span>
                                    <span className="font-mono text-primary font-bold">Até 60% Menor (R$$)</span>
                                </div>
                                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "40%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full" 
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: Inovação Constante (5 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-12 lg:col-span-5 bg-card border border-border/80 rounded-2xl p-8 flex flex-col justify-between group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <div>
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                                    <Cpu className="text-accent" size={24} />
                                </div>
                                <span className="text-sm font-mono text-muted-foreground/50">02 / TECNOLOGIA</span>
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-3">Inovação Constante</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Equipe formada por estudantes de ponta, imersos nas stacks mais modernas e recomendadas do mercado de software mundial.
                            </p>
                        </div>
                        
                        {/* Interactive Tech Badge Cluster */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {["React", "TypeScript", "Tailwind", "Next.js", "Node.js", "Python"].map((tech) => (
                                <span key={tech} className="text-[11px] font-mono bg-secondary/80 border border-border px-2 py-1 rounded-md text-foreground/80 group-hover:border-accent/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* CARD 3: Atendimento Dedicado (5 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-12 lg:col-span-5 bg-card border border-border/80 rounded-2xl p-8 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <div>
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                    <HeartHandshake className="text-primary" size={24} />
                                </div>
                                <span className="text-sm font-mono text-muted-foreground/50">03 / FOCO</span>
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-3">Atendimento Dedicado</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Seu projeto não é apenas mais um número. Oferecemos atenção exclusiva com sprints ágeis e reuniões semanais de alinhamento com toda a equipe dedicada.
                            </p>
                        </div>

                        {/* Visual representation of meetings */}
                        <div className="mt-8 bg-secondary/30 border border-border/50 rounded-xl p-4">
                            <div className="flex items-center justify-between text-xs font-mono mb-2">
                                <span className="text-accent font-semibold">• ACOMPANHAMENTO</span>
                                <span>100% Transparente</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                                <div className="bg-card p-2 rounded border border-border">Planej.</div>
                                <div className="bg-card p-2 rounded border border-border">Sprint</div>
                                <div className="bg-card p-2 rounded border border-border">Review</div>
                                <div className="bg-primary/20 text-primary p-2 rounded border border-primary/30 font-bold">Feedback</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4: Respaldo Acadêmico (7 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-12 lg:col-span-7 bg-card border border-border/80 rounded-2xl p-8 flex flex-col justify-between group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors" />
                        <div>
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                                    <GraduationCap className="text-accent" size={24} />
                                </div>
                                <span className="text-sm font-mono text-muted-foreground/50">04 / CONFIANÇA</span>
                            </div>
                            <h3 className="font-display font-bold text-2xl mb-3">Respaldo Acadêmico</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-md">
                                Todo o nosso desenvolvimento é supervisionado diretamente por professores doutores da universidade e validado pelo ecossistema do Movimento Empresa Júnior nacional.
                            </p>
                        </div>

                        {/* Badges/Seals */}
                        <div className="mt-8 flex items-center gap-4 flex-wrap">
                            <span className="text-xs font-semibold tracking-wide text-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border">
                                Apoio Acadêmico Unifei
                            </span>
                            <span className="text-xs font-semibold tracking-wide text-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border">
                                Federada Brasil Júnior
                            </span>
                            <span className="text-xs font-semibold tracking-wide text-foreground bg-secondary px-3 py-1.5 rounded-lg border border-border">
                                Orientação de Mestres/Doutores
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ValueSectionBento;
