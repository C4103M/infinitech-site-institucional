import { motion } from "framer-motion";
import { Target, Eye, Rocket, Handshake, Users, Cpu } from "lucide-react";

// Missão e Visão
const identity = [
    {
        icon: Target,
        title: "Nossa Missão",
        description:
            "Tornar-se uma referência no Núcleo Campinas de Empresas Juniores e, assim, promover a vivência empresarial para os alunos do IFSP - Salto através do desenvolvimento de soluções tecnológicas autênticas e personalizadas.",
    },
    {
        icon: Eye,
        title: "Nossa Visão",
        description:
            "Buscamos nos tornar a maior empresa júnior do IFSP, sendo referência para desenvolvimento de projetos de Tecnologia e como prestadora de serviços da região; além de facilitar oportunidades de crescimento para PMEs, impulsionando o desenvolvimento regional.",
    },
];

// Valores (Com o acróstico IN-FI-NI-TECH)
const values = [
    {
        prev:"",
        prefix: "IN",
        suffix: "conformismo",
        icon: Rocket,
        description: "Não aceitamos estagnação e zona de conforto.",
    },
    {
        prev:"Con",
        prefix: "FI",
        suffix: "ança",
        icon: Handshake,
        description: "Confiamos uns nos outros para que tenham confiança em nós.",
    },
    {
        prev:"U",
        prefix: "NI",
        suffix: "ão",
        icon: Users,
        description: "Trabalhamos em equipe e com colaboração para alcançarmos objetivos comuns.",
    },
    {
        prev:"",
        prefix: "TECH",
        suffix: "nologia",
        icon: Cpu,
        description: "Utilizamos as melhores e mais modernas tecnologias do mercado, a fim de entregar o melhor produto final.",
    },
];

const IdentitySection = () => {
    return (
        <section id="identidade" className="section-padding">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
                        Nossa Essência
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
                        Conheça a <span className="text-gradient">Infinitech Jr</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Somos movidos por propósitos claros que guiam cada linha de código que escrevemos e cada projeto que entregamos.
                    </p>
                </motion.div>

                {/* Grid Missão e Visão */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {identity.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-glass rounded-lg p-8 hover:border-primary/30 transition-colors duration-300 group flex flex-col md:flex-row gap-6 items-start"
                        >
                            <div className="w-14 h-14 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <item.icon className="text-primary" size={28} />
                            </div>
                            <div>
                                <h3 className="font-display font-semibold text-2xl mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Seção de Valores */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 mt-20"
                >
                    <h3 className="text-2xl md:text-3xl font-display font-bold">
                        Nossos <span className="text-gradient">Valores</span>
                    </h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, i) => (
                        <motion.div
                            key={item.prefix}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-glass rounded-lg p-6 hover:border-primary/30 transition-colors duration-300 group text-center flex flex-col items-center"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <item.icon className="text-primary" size={24} />
                            </div>
                            <h4 className="font-display font-semibold text-lg mb-3 uppercase tracking-wide">
                                {item.prev}<span className="text-primary">{item.prefix}</span>
                                {item.suffix}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IdentitySection;