import { motion } from "framer-motion";
import { Search, Code, BarChart3, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Imersão",
    description: "Entendemos seu negócio, público-alvo e objetivos para criar uma estratégia sob medida.",
  },
  {
    icon: Code,
    step: "02",
    title: "Desenvolvimento / Setup",
    description: "Criamos a solução técnica — seja um site otimizado ou campanhas de tráfego pago estruturadas.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Análise & Otimização",
    description: "Testamos, medimos e otimizamos continuamente para maximizar seus resultados.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Suporte Contínuo",
    description: "Não abandonamos o cliente após o deploy. Oferecemos suporte e manutenção contínua.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="section-padding relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display font-semibold text-accent tracking-widest uppercase">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Nosso <span className="text-gradient">Processo</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Uma metodologia clara e transparente em cada etapa do projeto.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-glass rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="text-primary" size={20} />
                    </div>
                    <span className="text-xs font-display font-bold text-accent tracking-widest">
                      ETAPA {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-8">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
