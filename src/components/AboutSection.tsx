import { motion } from "framer-motion";
import { Target, TrendingUp, Globe } from "lucide-react";
import AboutImg from "../assets/about-img.png"
const AboutSection = () => {
    return (
        <section id="sobre" className="section-padding bg-muted/40">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
                            Sobre Nós
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-5">
                            Jovens profissionais,{" "}
                            <span className="text-gradient">
                                resultados reais.
                            </span>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Somos a <strong className="text-foreground">Infinitech Jr</strong>, a Empresa Júnior de Ciência da Computação e Tecnologia do <strong className="text-foreground">IFSP (Câmpus Salto)</strong>. Formada por estudantes talentosos e apaixonados por resolver problemas reais através da tecnologia, nosso foco é entregar soluções de alto impacto com excelente custo-benefício.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Especialistas em <strong className="text-foreground">desenvolvimento de sites</strong>, <strong className="text-foreground">desenvolvimento de sistemas</strong> e gestão estratégica de tráfego pago, ajudamos empresas em Salto, Indaiatuba, Itu, Campinas e região a acelerar seu crescimento no ambiente digital.
                        </p>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-4 bg-gradient-to-b from-[rgba(39,179,255,0.80)] to-[rgba(51,245,255,0.80)] w-full relative">
                            <img className="translate-x-4 -translate-y-4" src={AboutImg} />

                    </motion.div>
{/* 
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-4"
                    >
                        {[
                            {
                                icon: Target,
                                label: "+50 projetos",
                                desc: "entregues com excelência",
                            },
                            {
                                icon: TrendingUp,
                                label: "+R$200k",
                                desc: "em resultados gerados para clientes",
                            },
                            {
                                icon: Globe,
                                label: "2 especialidades",
                                desc: "Web Dev & Tráfego Pago",
                            },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-glass rounded-lg p-5 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <stat.icon
                                        className="text-primary"
                                        size={22}
                                    />
                                </div>
                                <div>
                                    <p className="font-display font-bold text-xl">
                                        {stat.label}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
