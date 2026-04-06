import { motion } from "framer-motion";
import { Zap, DollarSign, Users, Shield } from "lucide-react";

const values = [
  {
    icon: DollarSign,
    title: "Custo Acessível",
    description:
      "Preços até 70% menores que o mercado, com a mesma qualidade de grandes agências.",
  },
  {
    icon: Zap,
    title: "Inovação Constante",
    description:
      "Equipe formada por estudantes imersos nas tecnologias mais recentes do mercado.",
  },
  {
    icon: Users,
    title: "Atendimento Dedicado",
    description:
      "Seu projeto recebe atenção exclusiva com reuniões semanais de acompanhamento.",
  },
  {
    icon: Shield,
    title: "Respaldo Acadêmico",
    description:
      "Supervisionados por professores e apoiados pela universidade e Brasil Júnior.",
  },
];

const ValueSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
            Nosso Diferencial
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Por que contratar uma{" "}
            <span className="text-gradient">Empresa Júnior?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Unimos a energia da juventude com metodologia profissional para
            entregar resultados reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-glass rounded-lg p-6 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {item.title}
              </h3>
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

export default ValueSection;
